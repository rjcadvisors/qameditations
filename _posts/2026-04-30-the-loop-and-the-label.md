---
layout: post
title: The Loop and the Label
date: 2026-07-30
description: "Regression Testing: Labeled by What It Produces, Not What It's Meant For"
---


# The Loop and the Label

Somewhere in the last decade, "regression testing" stopped meaning one thing and started meaning whatever the speaker needed it to mean. Ask a build engineer and you'll get a pipeline stage. Ask a manager and you'll get a line item in a sprint plan. Ask a tester steeped in Rapid Software Testing and you'll get something closer to a stance... any testing motivated by the risk of change to a previously working product, whatever form that testing takes.

That last definition is the more honest one. It's also the one I want to push on a little, not because it's wrong, but because I think it quietly folds three different things into a single drawer, and the drawer's label stops telling you what's actually inside.

## Targets, not intentions

Start with what regression testing is actually checking. Something that already worked is supposed to keep working. The baseline exists. The question is whether the product has drifted away from it.

Primary testing, by contrast, doesn't have a baseline to hold against. It's aimed at something novel, or something changed enough that the old baseline no longer applies... new functionality, a modified workflow, a requirement that got refined mid-sprint. You're not asking "did this stay the same." You're asking "does this now do what it's supposed to do." Whether that validation happens by hand, by script, or by an agent running through scenarios doesn't change what's being asked. It's a different question aimed at a different target, and I don't think motivation alone is enough to collapse it into the same category as regression.

This matters more than it sounds like it should, because of how we actually label testing work once it's done. We don't label an activity by what the tester meant to find when they sat down. We label it by what it produced. A check earns its name because it produces a binary, comparable result... pass or fail, green or red, matched or mismatched. Primary testing earns its name because it produces something else entirely... a mental model, a bug report, a new question nobody had thought to ask, evidence that a design intent was or wasn't met.

If you define regression testing purely by motivation, "any test aimed at change-related risk," you get a definition that's true and also strangely unmeasurable. Motivation is invisible. Nobody reports "I was motivated by regression risk" in a sprint retro. They report what came out the other end. And what comes out the other end of a regression check looks nothing like what comes out the other end of primary testing, even when both were triggered by the same commit.

## Retesting isn't a fourth thing

Here's where I think the tidy four-way split, primary testing, retesting, check development, scripted checking, starts to wobble a little.

Retesting isn't a peer to the other three. It's a response.

Look at when retesting actually happens. It happens because a build cycle needs to reconfirm that prior coverage still holds after another iteration landed. It happens because deterministic checks are fragile... flaky results, environment drift, a framework quietly self-healing something that deserved a human's attention instead. It happens because a bug got fixed and someone needs to verify the fix actually took, or reproduce the original report one more time to be sure.

Strip away the surface differences and those three triggers are the same mechanism wearing different hats. Something produced a result. The result needs confirming. That's a feedback loop, not a discipline of its own. It doesn't have its own target the way regression and primary testing do. It exists downstream of them, called into service whenever their outputs need a second look.

Putting retesting on the same shelf as primary testing and check development makes for a clean four-box diagram. But it also implies retesting has its own reason for existing, independent of what triggered it. I don't think it does. I think it's the loop that connects the other activities to each other, not a fourth activity standing beside them.

## Why the distinction earns its keep

None of this is an argument for narrowing regression testing back down to "run the automated suite." That version was always too small, and the people who've made that argument well have made it convincingly. Automated checks catch the easy regressions and nothing else, and pretending otherwise is how teams get burned by a green suite sitting on top of a silently broken deployment pipeline.

The argument here is smaller and, I think, more practical. If we define regression testing by motivation alone, we lose the axis we actually report against. Someone eventually has to answer "what did regression testing produce this cycle." That answer is easier to give, and easier to defend in a planning meeting, when the labels track outputs instead of intentions. Checks produced a pass/fail signal. Primary testing produced a model and maybe a bug. Retesting closed a loop that something else opened.

Keep the targets separate. Keep the loop visible as a loop. The risk of change doesn't need one drawer to live in. It needs a shelf, with the items on it labeled for what they actually gave you back.
