---
layout: post
title: "The Architect Who Isn't There"
date: 2026-09-22
description: "Asking the architect how many real paths a system has works beautifully, right up until there's no architect left who remembers. Here's what to do instead."
series: exploratory-testing-dividend
series_part: 7
---

Last time, I told a story about a single question that cut thousands of test cases down to a handful of tests that represented the core eleven unique loops in the system. What I didn't say is how lucky that outcome actually was (as many of you mentioned in the messages I received). Somebody was still there who knew the answer. That's rarely the situation I'm called in to solve, so I wanted to address the far more common reality.

Most of my career has lived inside enterprise platforms that have been running for a decade or more, customized layer over layer, by people who've long since moved on to other companies, other careers, sometimes retired outright. Ask "how many real execution paths does this have" in that conference room, and you get silence, or worse, a confident guess from someone who's been there three years and genuinely doesn't know what they don't know. There's no original architect. There's a system that works, mostly, and a pile of accumulated knowledge scattered across whoever's left.

That's the actual, common case, and it's where most of this type of work really happens.

## Four ways to reconstruct what nobody remembers

When there's no one to ask, the real dimensionality of a system still exists, it's just gone quiet. Finding it again means pulling from a handful of genuinely different sources. Each one captures a different kind of "truth" as you piece together the structure of the system, I think you need them all as one won't substitute for another.

**Formal factor and level design** starts from what's still enumerable even when nothing else is, the known inputs, the known configuration options, and works out mathematically the minimal set of combinations needed to cover their real interactions. You don't need anyone's memory for this one. You need the input space written down, and a method for not testing every combination when testing the right handful covers the same ground.

**Code-path analysis** goes straight to the most honest witness available, the code itself. Whatever anyone remembers or forgot, the actual execution paths are sitting right there, discoverable by tracing what the system can structurally do, independent of anyone's account of what it's supposed to do.  I know, this one is probably the hardest to extract when every team is already too busy.

**Behavioral observation** is the one that surprises people most. Watching what a system actually does in live use, not what anyone believes it does, regularly turns up workarounds nobody documented and nobody would have thought to mention, because the people using them don't think of them as unusual. They just think of them as how the job gets done. Those shadow paths are frequently exactly where the real risk concentrates, precisely because nobody's watching them on purpose.  By the way, this is a uniquely human endeavor.

**Documentation archaeology** is the least glamorous and often the most necessary, reconstructing entity relationships and data structure from whatever actually survives: old schemas, half-finished wikis, a ticket from four years ago that happens to explain a decision nobody remembers making. It's slow, unglamorous work, and it's frequently the only source available at all for a system old enough that nobody left was there when it was built.

None of these four is sufficient alone. A code-path analysis tells you what's structurally possible without telling you what actually happens in production. Behavioral observation tells you what happens without telling you why the code allows it. Used together, they triangulate toward something close to the real number, the way four separate accounts of an intermittent bug, cross-checked against each other, get you closer to the truth than any single account manages alone.

## Order matters more than people expect

There's a sequencing discipline here, and getting it backward quietly wastes a lot of time and a good deal of the value these four sources provide.

Structural knowledge belongs upstream, feeding generation. Before you narrow anything down, you want the full, honest picture of what's actually there, all four sources, gathered without yet asking which parts matter to anyone. Judgment belongs downstream, tempering what's already been generated. Only after the real dimensionality is mapped do you filter it against what an organization actually cares about, which is a different, later question entirely.

Reverse that order, and the damage isn't obvious right away. Filtering by priority before the structure is understood means you never see the full space in the first place, you only see the parts someone already thought to look for, which just recreates the exact problem eleven loops disguised as a thousand test cases was supposed to solve.

## What this means for AI specifically

An AI system generating test coverage without any of this underneath it isn't doing something categorically different from a human skipping the same step, it's just doing it faster, and producing volume that looks like confidence.

Feeding a model the actual structural picture, the real paths, the real behavioral patterns, the real entities, before asking it to generate anything, isn't a nice-to-have. It's the difference between coverage that maps to something real and coverage that maps to whatever happened to be easy to generate. The architect who isn't there can't be replaced by more test cases. The four sources above might be the closest thing to bringing them back into that conference room.
