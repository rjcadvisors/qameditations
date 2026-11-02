---
layout: post
title: "Assembly Required"
date: 2026-11-01
description: "Nine posts, separate pieces. Here is how I think they fit together, and why I call the result bracketed."
series: exploratory-testing-dividend
series_part: 10
---

This is part ten of a series about exploratory testing. If you're joining at the end, here is the short version. Exploratory testing costs real hours and real money, and spending either means talking about return. Some of that return is hard, like defects caught before release. Some of it is soft, like confidence and faster decisions. Throughout the series I've called that combined return the dividend.

Nine posts... All separate pieces... This is how I think the puzzle fits together.

I've been asking where the ROI on exploratory testing comes from. Giving it a name, the Deep Stack Dividend, is important, but it is also the easy part. Explaining why a particular investigation deserves someone's time is harder.

That's the assembly I want to attempt here in part ten.

## Where the charters come from

Start with what the business says matters.

Quality Words give us the organization's own vocabulary for "broken," gathered from stakeholders rather than assumed. Some describe invariants: never double-charge a customer. Others describe bounded expectations: trading responses stay under 200 milliseconds.

Then consider how people actually behave.

They make mistakes, get interrupted, grow impatient, and sometimes poke at things on purpose. Michael Bolton's plausibility taxonomy gives us a way to consider those behaviors deliberately. Instead of arguing about whether someone would really do something, we can ask how the system should respond when they do.

Put those two sources together, and an investigation starts to take shape.

"Never double-charge a customer" meets a person who clicks Submit again because nothing seems to be happening. Now we have a reason to explore repeated submissions during a delayed response, looking for whether a duplicate charge can occur.

The business demand is why we care. The human behavior gives us a plausible way to challenge it.

Crossing the same demand with another category may yield nothing we can honestly justify investigating. Leave that cell empty. A demand with two or three useful collisions gets two or three charters. There is no need for the grid to have a full set. We learned that with the eleven loops in Part 6.

## The assembly

The infographic shows the arrangement I'm proposing: the Bracketed Quality Framework.

<figure style="margin: 2rem 0;">
  <a href="/images/uploads/bracketed-quality-framework.jpg"><img src="/images/uploads/bracketed-quality-framework.jpg" alt="The Bracketed Quality Framework. Across the top, five stages: Elicit, Charter, Execute (the vendor-augmented stage), Judge, and Evidence. Below, a matrix with business demands (the Always/Never rule 'Never double-charge a customer' and the bounded expectation 'Trading responses under 200 ms') down the side and human behaviors from the plausibility taxonomy across the top. Charters appear only in cells where a business demand and a human behavior collide, and empty cells are skipped." style="max-width: 100%; height: auto;"></a>
  <figcaption style="font-size: 0.9em; opacity: 0.8; margin-top: 0.5rem;">The Bracketed Quality Framework: a charter exists only where a business demand and a human behavior collide.</figcaption>
</figure>

The name has two meanings for me. One is the picture: business demands down one side, human behaviors across the top, and charters in the cells where they meet. The other is the older sense of the word, from math and engineering, where you trap an unknown by setting a limit on each side. Here the unknown is risk, and the two walls are what the business demands and how people behave. We look in the space between them.

The matrix gives each charter a traceable starting point. Around it sit five stages: Elicit, Charter, Execute, Judge, and Evidence. They carry that inquiry through gathering the Quality Words, writing the charters, running them, interpreting what we saw, and keeping a record of what we learned.

The tagline I keep landing on is *Intent-Driven. Vendor-Augmented. Human-Governed.* Intent-driven because the work starts with what the organization says matters. Vendor-augmented because I'd rather use good tools than pretend I don't need them. Human-governed because someone has to answer for the interpretation.

Tools can help generate and execute the work. Someone still has to judge what the observations mean for this business. That's the Human Fiduciary: the person responsible for observing faithfully, interpreting honestly, and surfacing the risk in terms decision-makers can use. That responsibility does not make them the owner of the release decision.

And the brackets don't make the inquiry complete. We can miss a business demand. We can overlook a behavior. We can discover something during execution that sends us beyond the original charter.

The framework should help us explain where we looked and why, while leaving room to recognize where the map ran out.

## What the assembly buys us

Suppose someone asks why we spent time investigating repeated checkout submissions.

We can point to a business demand, a plausible behavior, and the question their intersection raised. Afterward, we can explain what we observed, what remains uncertain, and whether further investigation deserves time.

That gives a budget conversation something more useful than a test count.

It also gives us a basis for restraint. We can explain why we pursued one collision and left another alone. We can make deferrals visible, along with the reasons for them, so the next person doesn't mistake an unanswered question for an answered one.

That's where I think part of the dividend may come from: directing scarce investigative time toward questions we can justify, then leaving evidence that helps someone make a better decision.

Fire prevention leaves no scorch marks. The record matters because the value of the work may otherwise disappear with the incident that never happened. We still have to be careful about claiming credit for that absence.

## What's borrowed

The foundation is Elizabeth Hendrickson's *Explore It!*, including the charter template. Quality Words come from Henrik Andersson. The plausibility taxonomy comes from Michael Bolton's writing. The broader series also draws on James and Jonathan Bach's session-based test management and ideas from the chaos engineering community.

My proposal is this particular assembly: using Quality Words and plausible human behavior to generate defensible charters, with a named human responsibility for interpreting the findings.

If there's prior work that already describes this arrangement, I'd like to know. Attribution is part of getting the assembly right.

## What remains to be shown

This depends on being able to discover what matters to the business and having someone whose judgment will be heard. Neither is a small requirement.

The dividend also remains a hypothesis. I can describe how this might improve the allocation of testing effort and the usefulness of its evidence. I haven't demonstrated the return.

But it gives me a practical starting point. Before funding an investigation, I want to know what business demand it serves and what plausible risk it explores. Afterward, I want to know what we learned and what we still don't know.

That's the assembly I can offer today.

Where would you put it to work, and where would it come apart?
