---
layout: post
title: "The Human Fiduciary"
date: 2026-08-03
description: "Nobody wrote a test for the moment a tester connects a stray delay to a silent inventory failure. That pivot has a name, and it isn't a legal one, but it's real."
series: exploratory-testing-dividend
series_part: 3
---

Four hundred milliseconds. That's not very long. It's shorter than a blink. It's the kind of number that lives quietly in a performance dashboard, unremarked, most days.

Now put it next to a second fact from the same moment: an inventory count that should have decremented after a purchase didn't. Neither one, on its own, is a bug report. A response that's a little slow happens. A count that's momentarily stale happens. But a tester who's spent real time inside this system doesn't see two small, separate facts. They see one thing, a payload that may be getting submitted twice, a payment that may be about to double-charge someone, and they abandon whatever they were doing to go find out.

Nobody wrote a test for that. Nobody could have. And I want to spend this piece on the thing that happens in that exact moment, because I think it's the part of exploratory testing that's hardest to explain to someone who's never done it, and the part most at risk of being quietly assumed away as AI moves further into this work.

## What the pivot actually is

I called this the human fiduciary in the piece before this one, and I want to slow down and earn that word properly here, because I used it once and moved on, and it deserves more than that.

A fiduciary exists, as a legal concept, because you cannot write a contract detailed enough to cover every situation that might arise. So instead of trying, you entrust someone with an ongoing duty, to act in your actual interest when the unanticipated shows up, precisely because you couldn't have anticipated it yourself. That's not a loose metaphor for what happened with the four hundred milliseconds. It's a precise description of it. Nobody's charter said watch for this exact combination. The entire value of that moment lived in a standing judgment that recognized it mattered, live, and acted, without waiting for permission or a rewritten plan.

I want to be honest about where the metaphor ends, though, because overclaiming it would undercut the piece rather than strengthen it. A fiduciary in the legal sense carries formal liability. A tester doesn't, and shouldn't be described as though they do. What they actually carry is narrower, and I've come to think it's more honest for being narrower: an obligation to observe faithfully, connect what they're seeing to what the business genuinely depends on, and put that connection in front of the person who bears the consequence, without deciding on that person's behalf, and without letting a distorted or incomplete picture stand in for what's true.

## Data, information, and who decides

There's an old lesson in this field, one that predates almost everything else in this series, that says any stakeholder should be able to report a bug. On its face that sounds like it flattens the tester's role into something anyone could do. I don't think it does, and working through why sharpened this whole piece for me.

A stakeholder reporting something they noticed is contributing raw observation. That's valuable, and it should be welcomed, not gatekept. But raw observation isn't the same thing as information, and turning one into the other is real, skilled work. It means taking the four hundred milliseconds and the stale count and asking what they mean together, whether they're connected, what they'd cost if they're real, and whether they're the kind of thing this particular business would consider serious or shrug off. That synthesis is the tester's actual job. And once it's done, once raw noise has become a clear, specific piece of information, it belongs in front of whoever owns the consequence of being wrong about it. Not because the tester lacks the standing to decide. Because deciding was never the job. Informing faithfully was.

I think that's the cleanest answer to why this is fiduciary in spirit rather than in name. A fiduciary's whole function is to act faithfully in someone else's interest when a decision has to be made without them in the room. A tester's whole function, in the moment I opened with, is exactly that, minus the final decision. Watch, synthesize, surface, faithfully. Let the person who actually bears the outcome decide what to do about it.

One thing worth being clear about, because it would be easy to read this as a title reserved for the fifteen-year veteran: it isn't. The fiduciary posture is an attitude of observational fidelity, not a seniority grade. A junior tester who flags an odd UI flicker because it feels wrong for a real user is exercising the exact same muscle as a longtime architect connecting a latency spike to a pricing tier. What varies with experience is how much you catch and how quickly you can explain why it matters. What doesn't vary is the obligation itself, and it belongs to anyone doing the watching, on day one or year fifteen.

## The obligation scales with the stakes

This isn't one obligation with one intensity, and I think treating it that way makes it sound more dramatic than it usually is, right up until the day it isn't.

Most of the time, this plays out as an ordinary business disagreement. You think a behavior matters more than the team currently does, you say so, they weigh it against everything else on their plate, and a reasonable answer comes back that isn't the one you'd have picked. That's not a crisis. That's just work.

Occasionally it's sharper than that, a real professional confrontation, where you're not just flagging a preference but pushing back hard on a decision you think is genuinely wrong, and the conversation gets uncomfortable because something real is actually at stake. I've been in rooms like that. They're not comfortable, and they're not supposed to be.

And every so often, rarely, it crosses into something else entirely, a genuine ethical line, not a disagreement about priorities but a matter of what shouldn't be allowed to happen regardless of what anyone decides. That's a different category of obligation, and it's worth naming as distinct rather than blurring it into the other two, because collapsing all three into one dramatic gesture cheapens the rare cases that actually deserve the word.

Most days, this obligation looks like the first kind. The reason it's worth naming at all is that you don't get to choose in advance which kind a given moment will turn out to be. You only find out by paying attention closely enough to notice when it's stopped being the first kind and become something else.

## It isn't only measured in dollars

I used to think about this obligation almost entirely in terms of profit and loss, because that's the currency most commercial software gets measured in, and it's the language a budget conversation understands.

But the underlying principle isn't really about dollars. It's about whoever bears the actual consequence of an outcome, and dollars are just the currency that happens to apply in most commercial contexts. Change the context and the structure survives, only the currency changes. In a military or safety-critical system, the consequence isn't profit, it's mission success, operational readiness, and in the worst cases, someone's life. That world already has a more explicit, doctrinally codified version of this same idea than most companies do, command responsibility, the principle that accountability for an outcome follows whoever held command over the systems and people involved, regardless of who executed the specific failing task. It doesn't allow the kind of ambiguity a corporate postmortem often does, about whose fault a bad release really was. The chain is explicit by design.

Worth being precise about where the parallel actually sits, since it's easy to blur two different roles together here. Command responsibility says the liability stops with whoever held command, not with the tester. That's exactly right, and it's not in tension with anything said earlier about a tester not carrying formal liability. The fiduciary role isn't the commander's, it's closer to the intelligence officer's: the one whose entire job is making sure the person who does carry that liability is never operating on a distorted, incomplete, or quietly sanitized picture of what's actually happening.

I bring that up because I think it clarifies rather than complicates the point. The human fiduciary isn't a commercial invention dressed up in serious language. It's the same underlying obligation, observe faithfully, synthesize honestly, surface it to whoever actually bears what happens next, showing up in whatever currency the domain happens to be denominated in.

## Why this is the piece that matters most

Of everything in this series so far, I think this is the idea I'd defend most stubbornly if someone tried to talk me out of it, because I think it's the one most likely to get quietly assumed away as AI keeps moving into this work.

It would be easy to believe that a sufficiently well-built agent, given enough context and a good enough prompt, could eventually catch the four hundred milliseconds and the stale count too. In one narrow sense, it already can, and it's worth being precise rather than defensive about that. Modern observability and anomaly-detection systems are genuinely good at cross-telemetry correlation, spotting that a latency spike and a database anomaly happened in the same window, often across thousands of concurrent requests, faster than any human watching a single screen ever could. That's not a hypothetical capability. It's real, and pretending otherwise would be the kind of claim that falls apart the moment someone who actually builds these systems reads it.

What that correlation-spotting can't do is the part that actually mattered in the moment I opened with. A machine can tell you Event A and Event B happened together. It can't tell you that, for this particular business, that combination means a specific high-value customer on a legacy pricing tier is about to be silently double-charged in a way that breaches a contractual promise nobody wrote into a monitoring rule. That evaluation isn't a harder version of the same technical problem. It's a different kind of problem entirely, business-situated, built from months or years spent learning what a particular system is actually supposed to protect. The gap isn't in seeing that something happened. It's in knowing what it would cost, to whom, and why anyone should care.

That's worth holding onto, and so is this: none of it should live only in one person's head. If this obligation is real, its value is only realized once it stops being locked inside a single tenured employee and gets transmitted, into charters other people can run, into a team's shared sense of what actually matters here, into something the organization holds rather than something that walks out the door the day one person leaves. A practice that depends entirely on one irreplaceable person's accumulated memory isn't a fiduciary duty being well discharged. It's a bus-factor problem that hasn't been noticed yet. Part of the obligation is making sure what you've learned gets out of your own head before it has to.

That's the piece worth holding onto as this series keeps going. Not as a defense of testers for its own sake, but because I think it's true, and because losing sight of it quietly, one convenient assumption at a time, is exactly how something valuable disappears without anyone deciding to get rid of it.
