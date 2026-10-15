---
layout: post
title: "How Many Charters Is Enough"
date: 2026-10-15
description: "Every sponsor eventually asks two questions: how long will exploring take, and how will we know when you're done? The honest answer to both used to collapse into 'it depends.' It no longer has to."
series: exploratory-testing-dividend
series_part: 9
---

This is part nine of a series about exploratory testing, so if you're joining midway, here is the thread in one breath. Exploratory testing costs something real: hours from skilled people who could be doing something else, and budget someone has to approve. Spending either means talking about return on investment. Some of that return is hard: defects caught before release or incidents that never reached a customer. Some of it is soft: confidence, trust, and faster decision-making. Throughout this series I've called that combined return the dividend.

This post is about the two questions a sponsor asks before they fund any of it. You can't claim a dividend without saying what the investment was, and you can't say when you've earned it without knowing when to stop. Those questions tend to arrive in the same breath... How long is this going to take? And how will we know when you're done?

Way back in 2013, Elizabeth Hendrickson, to her credit and a testament to her enduring craft, answers the first one honestly in her book *Explore It!*, and the honest answer is "it depends." 

Brainstorm a list of charters for the feature area, estimate how many sessions it takes to cover them, and accept that programming, checking, and exploring are so tangled together that better engineering makes every one of them faster, while shortcuts slow all three down at once. Session-based test management gave the craft real accountability on the other side of the ledger... time-boxed sessions and a clear account of where the hours went. But it reports what happened. It was never built to predict how many sessions a system needs before anyone starts. In practice, whenever a team lacked a structural picture of what it was testing, the answer to "how long" collapsed back into "it depends," which sounds like a shrug to the person holding the checkbook.  That's a great way to not get funding.

I don't think her answer was wrong then. I think it was the best available one.  However, I think it may have finally expired...

## Two numbers wearing one coat

The old estimate takes two completely different quantities and blends them into a single guess. How many charters does this system actually need? And how long does each one take to run?

Take an order-to-cash workflow that, for illustration, presents fourteen genuinely distinct risk interactions worth a charter each. Whether a tester and an agentic tool take forty-five minutes or three days to work through those fourteen is the execution variable. The fourteen is something else entirely. That number is anchored to the system, though how I model it, and which risks I decide matter, will push it up or down.

In 2013 there was little practical reason to pull those apart. The same human did the thinking and the doing, so one guessed time-box covered both. That's no longer true. Execution has been separating from judgment for a while now, and the last few posts in this series have explored that exact idea. Tooling can compress the time it takes to run a charter, sometimes dramatically. What it cannot compress is the number of charters worth running, because that number isn't governed by how fast anything executes. It is governed far more by how many genuinely different things the system can do.

Which brings back an old idea from this series: eleven loops, not eleven hundred. A system that looks like a thousand test cases can turn out to have eleven real execution paths, and the real number is the one that actually matters. Those paths aren't charters, mind you. They feed the charter count, they aren't the count itself.

## Where the count comes from, and where it stops

Once you've done the work from Parts 6 and 7 (reconstructing the real dimensionality of a system from its inputs, code paths, observed behavior, and whatever documentation survived), part of the charter count stops being a brainstorm. Formal factor-and-level design gives you the minimal set of combinations covering the interactions that actually exist. That's arithmetic on a structure you've already mapped. To be clear, those combinations aren't charters yet. They're the raw material charters get built from.

I'll try to be exact (or at least pretty close) about what that arithmetic gets you, because any experienced practitioner will push back on it if I don't. The factors and levels describe combinations; they don't describe surprises. What they produce is the foundation... the baseline, structural reconnaissance charters that establish minimum coverage of everything the map says exists. That is real, countable, and estimable. It is not the whole of exploring. Hunting along boundaries, state transitions, and integration seams where a system behaves in ways nobody modeled is precisely what human judgment is for. That judgment is freed up because the foundation no longer requires a brainstorming session to construct. The count gives you the floor. Exploration is what you do standing on it.

There's a second effect hiding in there, and it may be what sits underneath Hendrickson's tangle. A team with solid regression coverage, a healthy build pipeline, and deterministic checks tends to resolve easily covered risk before an explorer ever shows up. That doesn't make the system any simpler, but it does shrink the part of it that still needs exploring. "Better practices make exploring faster" is more than an intuition. There is a plausible structural mechanism behind it. Mature engineering may not just run the same sessions quicker; it may reduce the number of exploratory sessions that need to exist.

So the new estimate has two honest parts: a charter count anchored to the structure of the system, and a per-charter execution time that tools are free to shrink. I'd suggest not blending them. When a sponsor asks what it costs to speed things up, you can finally say which of the two numbers the money moves.

## Knowing when you're done

The second question is harder, and Hendrickson's answer is a good one: Stop when your open questions are answered. Stop when you're no longer learning anything new. Stop when more information wouldn't change what anyone does next. Or stop when it's clear the organization won't act on what you find regardless.

Every one of those relies on an experienced practitioner reading the room, and they are sound. But to a CFO or a VP of Engineering under ship-date pressure, they sound indistinguishable from "whenever the tester feels like it."

I'd like to offer something firmer, with an explicit boundary around it. For the portion of a system whose structure is actually mapped, you can state a stopping rule that doesn't depend on anyone's mood:

1. The inquiry list for that scope has been cleared; every question anyone put on the table has been answered, or knowingly deferred.
2. Recent sessions, deliberately varied in approach, tester, or heuristic, have stopped surfacing anything new. Running the same session three times and finding nothing is repetition, not saturation.
3. No unresolved tensions remain in the Quality Words (the explicit vocabulary stakeholders use to define "broken"), or the ones that do have been explicitly accepted or deferred, with a named owner.

Notice what that rule does not claim. It does not claim there is nothing left to find. No explorer ever knows that. It claims the known questions are exhausted and the trail has gone cold, within territory you can explicitly name. That is a statement a sponsor can verify, and it stays honest about the dark corners outside the map. Those are what the next session is for, and the one after that.

One more boundary, and it matters. Finishing the exploring is not the same as approving the release. Our job is to surface what we found and be plain about what we left open, the fiduciary idea from Part 3. Deciding to live with that risk belongs to the people who own it.

## The verdict

The reason exploratory testing kept losing the "how long" and "how will we know" arguments was never that the answers didn't exist. It's that nobody had separated the question into its real parts. Count the foundation charters from the structure. Time the execution separately. Stop when the questions and the tensions are both cleared, for the territory you've actually mapped.

Sponsors don't need a guarantee that a system is infallible. They need a record showing you looked everywhere you had a map for, answered every question on the table, and can tell them plainly where the map ran out. So, how many charters is enough? Enough to cover the floor, which you can calculate from the structure and be held to. Beyond that, it's a risk-informed call about how much further to go, and it belongs to the people who own the risk. It's a better answer than "it depends," and it's one you can stand behind.

---

*I hold the hypothesis on engineering maturity reducing charter counts loosely, and I'd be interested to hear from teams who have watched that dynamic play out, or observed the opposite.*