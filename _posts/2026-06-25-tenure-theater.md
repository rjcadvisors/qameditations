---
layout: post
title: "Tenure Theater: Why Your AI Tool Rollout Is Stalled (And It's Not the Tool)"
date: 2026-06-25
excerpt: "Why tenure-as-requirement is a leverage play in disguise, and what it costs the organizations that lean on it."
---

I keep hearing about roles that have been open for months. The job description hasn't changed. The candidate pool hasn't dried up. So what's actually broken?

Here's a pattern I've now seen from both sides of the table: an organization adopts an AI-native automation platform, the rollout stalls, and the response is always the same. *We need someone who already knows this specific tool.* Not someone who's good at automation. Someone who's already fluent in this exact platform, on day one, no ramp time.

That instinct feels reasonable. It's also usually wrong... and chasing it is what keeps the effort stalled long after the actual problem could have been fixed.

## The Domain Is Small. The Tools Just Differ in Mechanism.

Strip away the branding and automation is fundamentally the same problem it's been for twenty years: events on objects, validated along the way. You plan the test, you build it, you clean it up, you extend it, and you cycle through that loop until it's solid enough to promote. The mechanism changes... record-and-playback, object repositories, locator strategies, now natural-language intent and ML-based self-healing... but the discipline underneath it doesn't.

I've spent two decades watching clients pay a premium for "20 years of experience with this one specific testing tool," when what they were actually buying was automation judgment that happened to be demonstrated through that tool. The tool was the proof, not the product. Swap the tool and the judgment transfers. I've done it across half a dozen platforms, in environments ranging from clean modern web apps to fifteen-year-old enterprise systems nobody fully understands anymore.

If 80 percent of what makes someone successful with an automation tool is automation expertise, and 20 percent is tool-specific idiosyncrasy, then hiring exclusively against that 20 percent slice is a flawed filter. It's especially absurd when the tool in question is a newer, AI-native platform explicitly designed to *lower* the learning curve, not gatekeep behind it. The whole pitch of these tools is that you don't need years of tribal knowledge to be productive. Organizations that demand years of tribal knowledge anyway haven't understood what they bought.

There's a useful reframe buried in a comment I saw recently on a related post about why regression testing feels broken at so many enterprise shops: most teams don't actually have a velocity problem. They have a rework problem. Incidents caught after merge cost roughly ten times what they'd cost to catch before merge... that's not a guess, it's the kind of math engineering leaders run constantly and still somehow ignore when they're deciding how to staff a testing effort. Every AI-native automation platform's entire value proposition is compressing that gap... validating closer to the point of creation instead of paying the rework tax weeks later when nobody remembers the context anymore. An organization that gatekeeps adoption of that exact tool behind years of tenure is choosing, deliberately or not, to keep paying the tax the tool exists to eliminate.

## Tenure Theater

Here's the harder thing to say out loud: time-in-seat is not the same as success.

A team can have someone working inside a platform for the better part of a year and still have nothing functional to show for it. That's not a contradiction... it's the most common outcome when the underlying automation discipline isn't there to begin with. Depth without discipline is just a long, expensive runway to the same stall.

This matters because "deep hands-on experience required" has become the default line in almost every automation job posting, and it quietly assumes that depth equals competence. It doesn't. I'd take a sharp automation engineer with two weeks of focused ramp-up over twelve months of unproductive tenure, every time... and any hiring manager who's actually watched a stalled rollout up close should already know that.

There's a sharper irony underneath this one. AI-native tools were supposed to put the platform back in the hands of the practitioner... to close the gap between the person who understands the business transaction and the tool that's supposed to execute it, without requiring a software engineering background to operate. When an organization responds to early friction by erecting an even higher tenure-based gate around that exact tool, they've recreated the very specialist lock-in that AI-native automation was supposed to dissolve.

I saw someone frame this well in an unrelated thread about consulting and AI: the real fault line isn't specialists versus generalists, it's specialization versus leverage, and leverage is exactly what AI eats. Tenure-as-requirement is a leverage play in disguise. It's not asking "can this person do the work," it's asking "can this person skip the part where we'd have to actually evaluate judgment," and substituting time-in-seat as a cheap proxy for competence. That's the same model the big consulting firms built their margins on, junior staff billed at premium rates because the client couldn't easily verify what was actually being delivered. AI is dismantling that proxy everywhere it shows up, including, apparently, in how organizations write their own hiring requirements for the AI tools meant to replace it.

## The Org Tell

When a stalled rollout gets answered with "let's add headcount" instead of "let's find out why this stalled," that's usually evidence nobody has actually located the bottleneck.

I've watched this play out in a fairly specific shape: the person closest to the effort gets promoted before the effort is actually finished, and the organization backfills the unfinished work under someone new... without ever asking whether the original owner had the resourcing, the authority, or the skill to finish it in the first place. The hiring criteria then fixate on tool-specific tenure as a stand-in for "fix this fast," when what's actually missing might be authority, or scope clarity, or simply enough hours in the week... not another body.

Nobody asks the uncomfortable question: was this ever a hiring gap? Or is it a leadership and resourcing gap, dressed up in a job requisition because that's a more comfortable thing to solve?

Adding a person to a structurally unresolved effort doesn't fix the structure. It just adds a second person confused about the same things the first person was confused about... at a steeper hourly rate.

## The Wrong Frame

A stalled automation effort is, by nature, a diagnostic problem. Something is broken in process, in resourcing, or in technical approach, and the first job is figuring out *what*, before anyone gets thrown at fixing it.

But the moment that problem shows up as a contractor requisition routed through a staffing agency, the entire conversation defaults into employee-evaluation framing... cost, risk, longevity, fit against a job description. I saw a post recently making this point about age bias in hiring, and the framing translates perfectly here: the same expertise that commands a premium, outcome-priced engagement in a genuine advisory conversation gets evaluated like commodity labor the moment it's funneled through a staffing-agency contractor search.

That's the quiet irony for senior practitioners. Someone with real been-in-the-seat leadership experience... having actually run technical services, pre-sales, consulting, or hosted delivery at a senior level... is exactly the person equipped to reframe a conversation from "evaluate my resume against your job description" into "I've sat where you're sitting; here's what I'm seeing." That's a different conversation entirely. It's priced on speed, certainty, and outcome... not on years and hourly rate.

The format itself works against that reframe. A recruiter-sourced contractor interview is structurally built for cost-risk-longevity questions, and even an experienced consultant can get pulled into answering inside that frame by default... simply because nobody in the room signals that a different kind of conversation is available. Most senior practitioners never notice the frame was a choice at all.

## Unfalsifiable Diagnosis

There's a close cousin to the org-tell problem, and it shows up on the evaluator's side rather than the resourcing side: judgment that's protected from examination by language that can't be checked against anything.

*It's not quite working yet. We're still optimizing. The team needs more time.* None of these statements can be falsified, because nobody defined what "working" actually looks like before the clock started running. "We'll test it later" belongs in the same family... a phrase that sounds like a plan but is actually a deferral with no checkpoint attached, no definition of when "later" arrives or what it has to prove once it does. I watched a sharp thread recently about a hiring manager who rejected eleven candidates in a row, each for a different vague reason... "not quite right," "smart but wrong energy," "doesn't fit the vision"... and when asked to simply write down what a "yes" would look like, he stared at the page for two minutes and left it blank. Eleven rejections, each treated as its own isolated judgment, when really they were one undefined standard, repeated eleven times. Nobody held them up against each other and asked what they had in common, because doing that would have meant pointing the question back at the person doing the rejecting rather than at the candidates.

The same exact mechanism shows up in a stalled rollout. Each failed test cycle, each missed milestone, gets filed and moved past as its own discrete event, instead of being read... as a series... for what it's actually saying about the approach, the resourcing, or the standard nobody defined. Eleven sprints that all end in "almost" aren't eleven separate problems. They're one unexamined assumption, on repeat.

Asking the obvious question... *what would done actually look like, and why haven't we seen it yet*... requires someone with authority over the effort to use that authority critically instead of supportively. Most organizational relationships default to supportive, because examining a leader's judgment reads as undermining their ownership of the thing they're supposed to own. That default is exactly what lets a stalled effort run for months without anyone naming the unexamined standard sitting underneath it.

The fix isn't more patience, and it isn't more headcount. It's a falsifiable definition of success, set before the rollout... or the search... begins, specific enough that "not there yet" has to mean something concrete enough to be proven wrong.

## Two Ironies, Stacked

The whole promise of AI-native automation tools is to close the gap between the practitioner and the platform... fewer gatekeepers, faster ramp, intent-driven rather than code-driven. An organization that meets early friction by building an even higher tenure-based wall around that same tool has inverted its own value proposition.

And the search process typically used to find that gatekept hire... a staffing-agency contractor pipeline... guarantees the conversation happens in exactly the wrong frame, pricing genuine diagnostic expertise as commodity labor before anyone's said a real word about the actual problem.

The fix was supposed to be the cure for exactly this disease. On both counts, it's being asked to operate inside the very dysfunction it was built to dissolve.
