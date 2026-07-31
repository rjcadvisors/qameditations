---
layout: post
title: The Fire That Never Started
date: 2026-07-26
description: Exploratory Testing 2026, Craft in the Age of AI & Deep Stack Dividends 
---



# The Fire That Never Started

There is a strange thing about the best book on exploratory testing. It was written in 2013.  Nothing else about our field sat still for twelve years. The architecture underneath our applications turned over completely ... monoliths and SOAP services giving way to REST APIs and microservices, microservices giving way to cloud-native serverless, and now to something even less nameable. The tools we point at our own work changed so often that half of them don't have a name yet when the next one arrives. And somewhere in the middle of all that motion, the one book worth handing to a new tester who wants to learn how to explore... just sat there. Unchallenged. Nobody wrote a better one. Nobody needed to. 


I sit behind my desk every day. The bookshelf opposite me holds that book, three shelves down, four books over from the right. I know that book. I’ve read it, referenced it, and consulted it more times than I can count. And that’s the thing I want to sit with for a minute, before we get anywhere near what artificial intelligence has to do with any of this. Because the story of exploratory testing isn't really a story about a technique falling out of fashion. It's a story about an investment that almost nobody could ever quite defend, even when they believed in it completely.

I don't think that's because the subject stopped mattering. I think it's because nobody could justify the time it would take to write the sequel, any more than most of us can justify the time it takes to actually practice what the original book describes.

## Fire prevention doesn't leave a mark

Here is the asymmetry, stated as plainly as I can manage.

If your team fixes a production incident, everyone knows it happened. There's a ticket. There's a timeline. There's a person who stayed late, and there's a story that gets told in the next retro, the kind of story that makes its way into a performance review a few months later without anyone having to ask. Firefighting is visible by its nature. It has a beginning, a middle, and someone standing at the end holding the extinguisher.

Fire prevention doesn't work that way. If a tester spends an afternoon poking at the edges of a feature nobody asked them to poke at, chasing down a hunch about what happens when a session times out mid-transaction, and finds nothing... there is no ticket. If they find something and it gets quietly fixed before anyone outside the team ever knows it existed, there is, at best, a single line in a defect log that nobody upstream will ever read closely enough to understand what it actually prevented. The fire that never started leaves no scorch marks. There's nothing to point to in a budget meeting except the absence of a fire, which is a very hard thing to hold up as evidence of anything.

I don't think exploratory testing gets cut from budgets because anyone secretly believes it doesn't work. I think it gets cut because the thing it produces is, by its very design, invisible. And when a manager somewhere up the chain has to choose between a line item they can defend with a dashboard and a line item they can only defend by asking people to trust them, they choose the dashboard. Every time. Not because they're wrong to. Because that's what the job asks of them.

## What the research actually says

I want to be careful here, because I've spent enough late nights lately checking my own assumptions against real evidence to know how easy it is to state something as fact that's really just a strongly-held belief wearing a nicer coat.

So here is something that isn't a belief. Researchers at Helsinki University of Technology, in a study that's been replicated more than once, sat testers down and had some of them work from scripted test cases and others explore the same software without a script, learning and designing and executing all at once, the way exploratory testing actually happens. What they found wasn't a landslide in either direction. There was no significant difference in how many real defects either group found. But the scripted testers, the ones following the plan, produced meaningfully more false positives... more reports that looked like bugs and turned out to be nothing.

Sit with that for a second, because it runs against almost everyone's gut instinct. We tend to assume the disciplined, planned, written-down approach is the rigorous one, and the wandering, curious, undocumented approach is the loose one. The research doesn't say that. It says the wandering approach found just as much, and wasted less of everyone's time chasing ghosts while doing it.

That's not a marketing claim. Nobody selling something wrote that finding. It's a fact sitting quietly in the academic literature, largely unread by the people making budget decisions, because why would they have gone looking for it.

## The part that's actually changing

I'm not going to pretend the answer is simple, because it isn't, and there's a real reason nobody's built the full argument for this yet. Twelve years is a long time for an idea to sit unchallenged, and there's a lot riding on making sure whatever replaces the stillness is actually sound rather than just newer.

But something has shifted, and it's worth naming plainly before we go any further. The reason exploratory testing kept losing budget fights was never really about whether it worked. It was about the fact that a skilled person's sustained, undivided attention is the most expensive resource in any organization, and asking for more of it, for something that produces no visible fire to point to, was always going to be the hardest ask in the room.

What's changed isn't the value of that attention. It's what has to consume it.

I'll pick this thread up properly next time... where the actual mechanics live, and where I think the old argument for cutting this work quietly stops holding.
