---
layout: post
title: "The Third Gate"
date: 2026-06-27
description: "Most automation readiness checklists have a rule that quietly disqualifies the exact thing AI is best at. Here's the fix."
---

I came across a tidy little framework recently, from a book called *Agentic AI for Business* by Jordan Blake. It's a readiness checklist... three questions to ask before you let an agent anywhere near a business process.

Is the process triggered by a digital event? Does it follow clear decision-tree logic? Is the data structured and accessible?

That third one has a clause worth sitting with. The data needs to be reachable, the book says, "without interpreting human language or resolving ambiguous input." Disorganized data or unclear triggers will stall even advanced tools.

Reasonable advice. I'd have nodded along too, six months ago.

**The Build That Broke the Rule**

I spent part of this week rebuilding a lead-intake workflow... the kind of thing the book's checklist was clearly written to evaluate. Email comes in, something has to decide what it is and what happens next, a record gets logged. Textbook automation candidate, by every measure on the list. Frequency: daily. Manual time: real, and rising. Error rate: not just typos, but entire categories of lead going unnoticed because they didn't look like leads.

Except the thing the workflow actually needed to do, at its center, was read an unstructured paragraph of human writing and decide what kind of inquiry it was. A reply to outbound outreach reads differently than a quiet whitepaper download. Neither one announces itself by subject line. By the checklist's own third gate, that should have ended the conversation before it started. Interpreting human language is exactly what the rule says to avoid.

I built it anyway. It works. And the reason it works is the rule isn't wrong... it's just incomplete for where the tooling actually is now.

**One Bounded Exception, Not a Loophole**

Here's what I think the checklist is actually protecting against: an automation that has to *guess* its way through ambiguity at every step, with no clean boundary around where the guessing happens and where it stops. That's a real failure mode, and the warning is earned. Pre-LLM automation had no good way to contain it, so the safest advice was simply: don't go there.

An LLM classification step changes the shape of the problem, but only if you're disciplined about where you let it operate. In the build I'm describing, exactly one step touches ambiguity... read the email, decide Hot, Warm, or Watch, hand back a structured answer. Everything before that step is a deterministic filter. Everything after it is a deterministic write to a sheet, a deterministic email, a deterministic calendar entry. The model gets one job, with a hard edge on both sides.

That's the distinction I keep landing on, from a few different directions this week: this isn't agentic automation. It's deterministic process automation that calls a model for exactly one judgment-based decision. No planning, no autonomy, no agent deciding its own next move. Just a script with a single, bounded, audited exception carved into it on purpose.

**The Checklist Needs a Fourth Question**

So I'd amend the third gate, not throw it out. The real question isn't "does this process need human-language interpretation." Plenty of valuable processes do, and refusing to touch them just because they're messy is leaving real time on the table. The real question is narrower, and more answerable: *can the human-language interpretation be isolated to one bounded, auditable step, with clean structured data on both sides of it?*

If yes, that step is exactly where craft and judgment should still live... a sharp prompt, a tight schema, a human checking the edge cases... while everything around it gets to be boring, reliable, no-code plumbing. If no, if the ambiguity is smeared across the whole process with no clean seam to isolate it, the original warning still applies. Stop. Digitize first. Find the seam before you build.

That seam is the whole job, honestly. Not running the automation tool. Finding the one place in a process where judgment is actually required, drawing a hard line around it, and being honest about everything outside that line being a solved problem. The tools have gotten good enough that almost anyone can wire up the plumbing now. Knowing exactly where to put the one valve that needs a craftsman's hand on it... that's the part that doesn't automate.

Where's the seam in your own most frustrating process? Not the whole thing... just the one paragraph in the middle that actually needs a human read.
