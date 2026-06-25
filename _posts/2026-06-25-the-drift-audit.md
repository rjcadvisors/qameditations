---
layout: post
title: "The Drift Audit"
date: 2026-06-25
excerpt: "Why the end of a sprint needs an inspector, not just another machine."
---

There's a moment near the end of every sprint where a quiet question shows up uninvited... did any of this actually work, or did we just get really good at agreeing with ourselves?

If your testing strategy leans on AI agents during the build, that question gets sharper. The agents are fast. They're tireless. They cover ground no human team could cover at that speed. But speed and coverage were never the thing in question. The thing in question is trust... and trust, once a machine is grading its own work, needs a second source.

I keep coming back to an image from manufacturing to explain what that second source should look like.

**The Factory Floor, Not the Lab**

Picture a shoe factory. High-speed vision systems watch every shoe roll down the line... measuring stitch spacing, checking sole alignment, flagging anything outside spec. That's your AI testing platform during the sprint. It's watching the DOM, verifying layouts, tracking a hundred data points across every build, all day, every day.

But no plant manager trusts the camera blindly. At the end of the shift, an independent human inspector pulls ten shoes at random off the line. Feels the stitching. Flexes the sole. Checks for the things a camera was never built to notice.

That inspector isn't redoing the vision system's job. They're auditing it.

That's the model I think QA needs to borrow, deliberately, instead of backing into by accident. I'm calling it the Drift Audit... a small, independent, human sampling pass at the end of a sprint, built specifically to catch the two failure modes an AI testing system is structurally bad at catching in itself: drift and hallucination.

**Why Sampling Beats Re-Checking Everything**

The instinct, when you don't fully trust the machine, is to have a person re-verify everything it touched. That's exhausting, it doesn't scale, and it defeats the entire point of automating in the first place.

The factory doesn't re-inspect every shoe. It pulls a representative handful and asks whether the sample holds. If ten random, high-risk shoes pass a close human look, that's statistical confidence the batch is sound... not because every shoe was checked, but because the inspector knows where flaws would show up first, and they didn't.

A Drift Audit works the same way. You're not regression-testing the whole system by hand. You're pulling a small number of high-risk flows... the ones with the most business weight, the most exposure, the most room for a model to quietly drift off spec... and looking at them the way a human looks, not the way an assertion checks.

**Zero Maintenance, on Purpose**

There's a second benefit that only shows up once you've lived with the alternative. A rigid, hard-coded check breaks the moment the underlying thing shifts even slightly... move a button two pixels and a brittle script smashes into it like a robotic arm hitting a shoe that moved. A human inspector doesn't care about the two millimeters. They look at the whole shoe and ask if it still holds together.

That's not a minor convenience. It's the difference between a guardrail that survives change and one that becomes its own maintenance burden... what I've called the Verification Tax elsewhere. The Drift Audit is built to be cheap to keep, because it's not chasing the system's surface, it's checking its integrity.

**Catching What the Machine Was Built to Ignore**

The deepest value of pulling those ten shoes isn't catching what the vision system measured wrong. It's catching what the vision system was never measuring at all. Dimensions can be perfect while the leather smells wrong. Optical Integrity... the system looking fine on every metric it was built to track... is exactly the condition under which the real failure hides.

An AI testing platform can pass ten thousand assertions and still miss the one thing a person would have noticed in five seconds, because nobody told it that thing mattered. The Drift Audit exists to put a person back in the loop at the one point where that blindness can be caught before it ships.

**The Shift This Asks For**

This isn't a case against AI-driven testing. It's a case for what AI-driven testing needs sitting next to it. Use the machine for scale during the sprint. Use the inspector at the end of it, independent, sampling, and unimpressed by a green light it didn't generate itself.

The question worth sitting with... if you pulled ten "shoes" off your last sprint and looked at them yourself, would you actually know what you were looking for?
