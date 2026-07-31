// netlify/functions/vote.js
//
// Reads and writes per-post thumbs up/down counts using Netlify Blobs.
// No external database needed — Blobs is built into Netlify's free tier.
//
// GET  /api/vote?slug=my-post-slug        -> { up, down }
// POST /api/vote  { slug, vote: "up"|"down" } -> { up, down }

import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("vote-counts");
  const url = new URL(req.url);

  if (req.method === "GET") {
    const slug = url.searchParams.get("slug");
    if (!slug) {
      return new Response(JSON.stringify({ error: "missing slug" }), { status: 400 });
    }
    const data = (await store.get(slug, { type: "json" })) || { up: 0, down: 0 };
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "invalid body" }), { status: 400 });
    }

    const { slug, vote } = body;
    if (!slug || !["up", "down"].includes(vote)) {
      return new Response(JSON.stringify({ error: "bad request" }), { status: 400 });
    }

    const data = (await store.get(slug, { type: "json" })) || { up: 0, down: 0 };
    data[vote] += 1;
    await store.setJSON(slug, data);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/vote" };
