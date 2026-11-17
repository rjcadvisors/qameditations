---
layout: post
title: "A Tale of Two Trend Lines"
date: 2026-11-17
description: "Two phone calls, one question about why good QA candidates aren't landing offers, and a suspicion that we are measuring the wrong gap."
series: two-curves
series_part: 1
---

*Charter 1: Are We Measuring the Wrong Gap?*

So, on the surface, it looks like Charles Dickens may have been looking for a job on a modern QA team:

*“It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...”*

A tale of two cities or a tale of two trend lines?

It is, in many ways, the best of times and the worst of times in our corner of software engineering.

Over the past couple of weeks, I had two phone calls with peers in quality engineering that felt like reports from two different worlds. On the first call, a friend called with great news. He had landed a new role with a genuinely exciting twist, an opportunity to step out of the familiar grind, stretch into unfamiliar territory, and learn new things. On the second call, another capable practitioner sounded worn down by a long, discouraging slog of job searching, questioning whether what he knows how to do is still valued at all.

A few days later, a question surfaced in an industry thread that brought both conversations into sharp focus: why aren't good QA candidates landing offers?

The discussion filled up fast. Over forty comments, and if you read them in order, you can watch the camps form. Some argued that candidates simply need to learn automation. Some pointed out that job descriptions ask for a unicorn at junior pay. Others blamed automated resume filters, stagnant wages, or managers who let agile and AI excuse them from ever writing a real requirement. Everyone brought a piece of the puzzle, and almost everyone was right about their piece.

I've been dwelling on how much those pieces looked like one single problem seen from different angles, and whether they might help explain why capable practitioners are encountering such different opportunities.

My suspicion, and I offer it as a working hypothesis to test rather than a settled verdict, is that we are measuring the wrong gap. The story our industry keeps telling is a skills gap. Candidates lack something, so they need to go get it. Yet if you look closely at what AI actually made cheap versus what it left expensive, the gap may exist in the place where the job description gets written and how it is written.

My final sculpture is still emerging from the stone, but here is the shape my eyes are beginning to see...

There are (at least) two curves a testing professional climbs.

The first is knowing the application under test and the business it serves: what the system is for, who gets hurt when it's wrong, and what "right" even means in context. This is the domain expertise and quality judgment at the heart of the QA activity. It determines what deserves testing, what constitutes adequate coverage, and whether the results actually tell us something meaningful about quality.

The second is building and maintaining automation and infrastructure: the code, the frameworks, the scripts, and, in general, the plumbing. This is the tooling expertise that automation engineers and SDETs have traditionally provided, often translating the testing intentions of domain specialists into executable automation.

The two competencies complement each other, but they are not the same thing. Knowing how to automate a Salesforce workflow does not necessarily mean knowing whether that workflow is correct. Likewise, knowing Oracle EBS inside and out does not automatically make someone proficient in Playwright or Selenium.

For years, that separation helped define the division of labor.

But AI is changing the economics of that division.

Natural-language test authoring, automated script generation, self-healing, and regeneration are making much of the second curve easier to climb. The expertise is not disappearing, but the ability to produce automation is becoming increasingly democratized.

This distinction reminds me of an economic model discussed by David Autor and Neil Thompson in *The Digitalist Papers, Volume 2*. They contrast occupations in which technology makes the remaining human expertise more specialized with occupations in which technology democratizes work that previously required specialized skills.

I wonder whether quality engineering is experiencing both effects at once.

If that is roughly true, then a hiring process that keeps emphasizing the second curve may be screening out people strongest on the first. The scarce skill gets filtered out by a checklist written for the cheap one.

And this is where the problem may already be encoded into the system.

Organizations tend to describe new positions using the qualifications they have historically associated with the role. Those requirements become job descriptions, screening criteria, and automated filters. Selenium, Playwright, Cypress, and a growing list of tools become the price of admission, sometimes before anyone has established whether those skills are central to the work being hired for.

Consider a QA position testing Salesforce. If AI-based tools can handle much of the test authoring and automation maintenance, why should proficiency in a particular scripting framework outweigh an understanding of Salesforce workflows, business rules, and the consequences of getting them wrong?

The question is not whether automation expertise still matters. It does.

The question is whether we are continuing to screen for expertise that is becoming easier to reproduce while overlooking expertise that remains difficult to acquire.

In effect, we may be asking candidates to prove they can do what AI increasingly does for us, while failing to ask whether they know what AI should be doing in the first place.

I am treating this series the same way I treat an exploratory testing session: each piece is a charter aimed at probing one part of the system and seeing what breaks or holds up under scrutiny.

This is Charter 1.

I do not expect everyone to agree, and I would be a little suspicious if they did. If you are seeing something different from your seat, push back and tell me where the model misses.

For now, only this: if there is a gap, the first place I'd look is the question we are asking. Whether it lives in the people too is a different charter.
