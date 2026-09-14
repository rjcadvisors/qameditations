---
layout: post
title: "Eleven Loops, Not Eleven Hundred"
date: 2026-09-13
description: "A team had thousands of test cases and still couldn't find the bug. An architect asked one question and the real number of things worth testing dropped by two orders of magnitude."
series: exploratory-testing-dividend
series_part: 6
---

A QA team I worked with once had thousands of test cases for a tax platform under load, organized by customer profile, income bracket, filing status, every combination anyone could think of, and none of it was reproducing a session-mixing defect that kept showing up under real traffic. The volume looked like coverage. It behaved like noise.

What actually broke it open was a single question put to an architect: how many genuinely different execution paths does this system actually have. Not customer profiles, not test cases, paths. The answer was eleven. Eleven real loops, dressed up in thousands of superficially different clothes, because different customer data walking through the same handful of code paths looks like variety and isn't. A handful of transactions built specifically to exercise those eleven loops and their interactions found the defect that thousands of cosmetically distinct test cases had missed entirely.

That's the question worth asking before any charter gets written, and it's a harder question than it sounds. Apparent variety and real variety are not the same thing, and a charter aimed at the wrong one burns real attention re-testing the same underlying logic in different costumes.

## Where a charter actually comes from

The charter template itself, explore this, with these resources, to discover this, has already come up in this series. What hasn't come up yet is where the content of a good one is actually supposed to come from, and the honest answer is: several places, none of them sufficient alone.

Stakeholders will tell you plenty if you ask the right shape of question, not "does this work" but "what would worry you if it didn't." Bug databases and old support tickets are a quieter version of the same thing, a record of what's already gone wrong once, worth mining rather than starting fresh every time. A requirements or planning meeting is a genuinely efficient source too, since the conversation naturally produces both halves of a charter at once, the resources being discussed and the risk being raised, in the same breath, without anyone having to translate one into the other afterward.

And there's the question worth asking anyone with reputational skin in the game: what's the single failure that would force you to face a board or a furious customer base on Monday morning? It cuts straight through polite engineering optimism, surfacing the exact operational risks everyone quietly worries about but rarely puts into an official requirement.

## Claims as a source, not just complaints

One source deserves its own mention, because it's easy to overlook. Marketing copy, packaging, and public claims are, technically, an oracle, someone wrote down what this thing is supposed to do, from a vantage point completely separate from engineering. Comparing actual behavior against that claim is a real, legitimate technique.

For a heavily customized enterprise platform, there's rarely public marketing that describes your specific configuration, so the equivalent source has to be internal, the business case that got the customization funded in the first place, the SLA promised to the business unit it serves, the training materials written for the people who'd use it. Someone, somewhere, already wrote down a confident claim about what this thing was supposed to deliver. That claim is worth testing against, exactly the way a product's marketing copy would be.

## Turning a priority into a specific question

Years ago, when I was on the product side at Empirix, our QA manager, Joe Strazzere, used to drive me crazy. Whenever an edge case surfaced that felt entirely implausible, Joe had a flat, unblinking response that cut straight through whatever roadmap defense I was preparing: "Right. And when they do, how should the system respond?"

Not whether it would happen. What happens once it does.

At some point during that ongoing friction, Joe tossed a printout onto my desk. It had Michael Bolton's name at the top and an exhaustive catalog of reasons a real user might do something a developer or product manager swears no sane person would ever attempt. I still have that paper somewhere. The URL printed along the footer faded out years ago, partially obscured by scribbled margin notes, dog-eared corners, and a couple of old coffee rings. Only Michael probably remembers the exact canonical link at this point.

The items themselves, though, haven't aged a day: a slip of the fingers, plain curiosity, confusion caused by bad interface design, an assumption that because a sequence worked in one screen it should work here, or bulk data shoved through an API in patterns no human at a keyboard would ever produce.

On its own, that printout is just a catalog of human error and mischief, interesting, but directionless. But crossed against an organization's negotiated priorities, it turns into an operating weapon.

Take a priority leadership has explicitly committed to protect, and ask, one by one, which of those behaviors could plausibly violate it. Not all of them will apply. But the ones that do become razor-sharp charters. One side supplies what actually matters to the business; the other supplies the messy, unscripted reality of how systems actually break.

## The eleven loops, again

That's really the whole discipline ... Don't chase apparent variety, chase real dimensionality. Ground every candidate in something an organization has actually told you matters, not a generic assumption about what a well-built system should do. And when you've got a real priority and a real, plausible way it could break, that's a charter worth running, not one of a thousand cosmetic variations on the same eleven questions.
