---
layout: post
title: "Whose Definition of Broken"
date: 2026-08-03
description: "A checkbox got quietly removed because it looked like clutter. It took months to discover the enterprise workflows that had been silently built around it."
series: exploratory-testing-dividend
series_part: 5
---

Years ago, I worked with an enterprise automation platform where every routine followed a clean three-phase lifecycle, an initialization block that ran once at the start, an iterative core that could loop continuously, and a teardown block that ran once at the finish. Built right into the interface were three simple checkboxes letting you enable or disable each of those blocks independently. In the field, that modest toggle turned out to be pure leverage. It let practitioners treat scripts like composable building blocks, chaining complex workflows together by running the setup on the first program, disabling the entry and exit overhead on everything in the middle, and letting the last program handle cleanup. It was an elegant pattern, and hundreds of real enterprise implementations quietly depended on it.

Then a new release shipped, and the checkboxes were simply gone.

I filed it as a regression. Development pushed back immediately, it wasn't a defect at all, it was a deliberate simplification. In their view, those toggles were visual clutter confusing to ordinary users, so they'd swept the interface clean and deprecated the execution hooks underneath along with it. When I laid out how enterprise implementations were actually chaining these modules together in production, the engineering team was genuinely stunned. Nobody had been careless, and nobody had been malicious. The engineers had been solving for a clean, theoretical user journey. The practitioners were living inside an entirely different operational reality, one nobody had ever asked them about.

They eventually restored the capability, uncommenting the underlying logic and exposing a clunky programmatic workaround, but the clean toggles never came back. The real breakdown here was never a coding error. It was two groups operating for months on completely different assumptions about what the software was actually for, and discovering the unwritten contract between them only after someone had already broken it.

Elisabeth Hendrickson describes something structurally identical in her own book, a tester who kept finding what looked like bugs in how a parser handled malformed HTML, filed session after session, fixed without argument, until a developer finally objected that nobody had ever specified the parser needed to handle invalid HTML at all. Same failure, running in the opposite direction, a tester over-attributing meaning to unspecified behavior instead of engineers under-attributing it. I don't think that's a coincidence. I think it's the same missing step, showing up on both sides of the same kind of silence.

Ron Jeffries, one of the people who signed the Agile Manifesto, has a blunter line for the tester-side version of this: I wish you testers would stop making stuff up. I understand the frustration behind it, and I think it's aimed at something real. But my own story runs the other direction, and I don't think the fix, either direction, is anyone making up less or assuming more confidently. I think the fix is making sure "what this is actually for" gets decided, on purpose, by someone with the standing to decide it, before anyone, tester or engineer, has to guess.

## Quality isn't a fact waiting to be found

Quality isn't a property sitting inside the codebase, waiting to be measured against some fixed standard. It's a runtime contract, negotiated between user intent and architectural assumptions, and like any contract nobody wrote down, it can be broken by either side without either side meaning to.

Henrik Andersson has a useful name for the negotiated half of that: company quality words, an organization-specific vocabulary a practitioner has to go elicit, not read off a generic checklist. Should a lifecycle toggle stay in an interface because real practitioners quietly built production patterns around it, or come out because it looks, to whoever's designing the next release, like clutter nobody needs? There's no fact of the matter sitting inside the code. Removing it assumes an answer nobody gave. Insisting it can never change assumes an answer nobody approved either.

Most friction between development and QA over "that's not a real bug" isn't really an argument about the software. It's a collision over a decision neither side realized they hadn't made yet.

## When two people's definitions quietly diverge

Elisabeth Hendrickson tells a story that sharpens this further, and it doesn't involve a bug at all. A product manager and a lead developer had been discussing a feature for weeks, separately, each developing their own confident understanding of what it should do. Asked individually how to test it, they both gave the same deflecting answer, just check it against the spec. It wasn't until someone got both of them in the same room, at a whiteboard, and asked the developer to use the feature as actually built to run one of the product manager's own example scenarios, that the gap became visible. He couldn't do it. Neither of them had known, until that exact moment, that they'd been building toward two different things the entire time.

Nothing was broken, technically. Two people had simply never checked their private definitions against the same concrete example. Same failure as the checkbox story, wearing different clothes, two definitions of correct, quietly diverging, with nothing forcing them to reconcile until the gap became impossible to ignore.

## Where the words actually come from

Stakeholders rarely announce their priorities directly. They surface sideways, in what people complain about and what they're quietly proud of, in the war story that still gets brought up two years later, in the post-incident language a company used to apologize to its own customers, the rare moment an organization is forced to state, in plain English, what quality meant to them at the exact instant they failed to deliver it.

The words themselves matter, not just the idea behind them. If three people independently reach for the phrase "silent failure," that's not a coincidence worth paraphrasing away. That's the organization's actual vocabulary, worth capturing verbatim rather than translated into something that sounds more like a requirements document.

## Why this can't be a one-time exercise

Priorities drift. A quality word load-bearing eighteen months ago might have quietly stopped mattering, and a static list captured once will miss it. This is a live, current gap, not a hypothetical one, I've watched practitioners online ask the honest question, a risk profile from six months ago can miss what matters today, how do you keep yours current, and watched the thread move on without really answering it.

The honest answer is that this has to be a recurring conversation, not a document, revisited on a real cadence rather than filed away after one interview. There's a test worth applying that has nothing to do with software at all: whether something someone tells you matters is a should or a must. Plenty of things get nodded along to in a room without ever crossing into a priority anyone's actually willing to act on. That gap is usually where the real answer lives.

## What this actually feeds

None of this is abstract philosophy sitting apart from the practical work. Every quality word gathered this way becomes raw material for the next piece of this series, the actual charters that get run, the specific things worth spending a session's attention on. A generic industry checklist can tell you what a well-built system usually handles gracefully. Only this can tell you what this one is actually going to be judged against.

That's the piece worth carrying forward. Not "what would a well-designed system do here," but "what has this organization already decided broken means," and building the exploration around that instead of around a guess.
