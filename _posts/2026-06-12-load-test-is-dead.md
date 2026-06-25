---
layout: post
title: The Load Test Is Dead. Long Live the Load Test.
date: 2026-06-12T10:09:00.000-04:00
description: A performance engineer's hypothesis about what agentic AI is actually doing to your infrastructure, and why nobody is watching.
---

# The Load Test Is Dead. Long Live the Load Test.

*A performance engineer's hypothesis about what agentic AI is actually doing to your infrastructure, and why nobody is watching.*

---

I want to start with a hypothesis, not a conclusion.

That distinction matters. A conclusion is something you hand someone. A hypothesis is something you argue for, pressure-test, and revise when the evidence demands it. What follows is the result of spending time in an AI training course watching agents do impressive things, and then having the uncomfortable thought: *yes, but look at what they're actually doing to the system underneath.*

I have been doing load and performance testing of web-based enterprise applications for decades. I know what it looks like when a system is under stress. And what I am starting to see in agentic AI deployments has the signature of something I recognize, except nobody seems to have planned for it.

---

## The World We Built

In traditional load testing, we had total control over the transaction profile. We knew exactly what the script was going to do: simulate ten thousand virtual users hitting a login endpoint, pausing for think time, proceeding to checkout, and measuring response time to the millisecond. The traffic was linear, predictable, and deterministic.

When we wanted to find the edge, the point where the system started to buckle, we ran a throughput test. We stripped out the think time. No pauses. No human hesitation. Just requests in sequence, as fast as the virtual users could generate them, hammering the system continuously. Machine speed.

And when the system hit saturation, when CPU climbed past the threshold, when response times spiked, when the database started queueing, we did something critical.

We backed off the load.

Deliberately. Manually. A human hand on the throttle, reducing pressure at precisely the moment the system was most stressed, watching to see whether it could recover on its own. That recovery test was the whole point. You weren't just looking for the breaking point. You were looking for whether the system could find its way back.

That throttle was not incidental. It was the design.

---

## The Team Sport

Nobody ran a serious load test alone. You needed the network engineer watching bandwidth, the DBA watching for deadlocks, the infrastructure team monitoring CPU and memory scaling, and the QA performance lead coordinating the injection scripts. It was a team sport with a defined roster, a controlled field, and a clear end time.

At Empirix, we went further. When we were stress-testing call center infrastructure, the convergence of voice and data, we ran the Hammer to flood the IVR and telecom side with T1 and analog traffic, while simultaneously driving e-load and coordinating through the sync server to force the CRM screen pops to the agent desktops. We were proving that when a voice packet and a data packet raced through different parts of a complex network, they had to converge cleanly on a human monitor at the exact same fraction of a second.

That required every stakeholder in the room. It required coordination across systems that didn't naturally speak to each other. It required someone who understood the whole field, not just their corner of it.

We called it a team sport. It was more like synchronized swimming, every lane had to move together or the whole thing fell apart.

The question I keep coming back to now is: how much of that model is reusable? And how much of what we're doing today has quietly abandoned it entirely?

---

## What Agents Actually Do

Before making the case that something new is happening, I want to be precise about what is not new.

Enterprise systems have always carried non-human workloads. Batch jobs, ETL pipelines, scheduled tasks, integration middleware, asynchronous background traffic is a baseline assumption in any serious performance model. Performance engineers already know how to account for it. It belongs in the ambient load profile, and a competent test design has always included it.

That is not the argument.

The novelty is not that machines are generating traffic. The novelty is the *behavioral profile* of that traffic. A batch job follows a deterministic execution path every single time. You can model it, schedule around it, and capacity-plan for it because it does the same thing in the same sequence on the same schedule. You know the path before it runs.

An agent's execution path is decided at runtime. It is probabilistic, adaptive, and externally dependent. The agent evaluates what it finds, responds to what external systems return, and adjusts based on what the LLM infers from accumulated context. No two runs are guaranteed to be the same. The path is not predictable in advance because the agent itself does not know the path in advance.

This changes the modeling problem entirely. The old question was: how much non-human load will hit the system, and when? The new question is: how much load will this agent generate, across how many hops, through how many external dependencies, with how many retries... and we will not know until it is already happening.

Consider what this means concretely. A traditional API endpoint expects a predictable payload. An agent might hit that same endpoint with a fifty-token prompt on one transaction and a thirty-thousand-token payload packed with accumulated context and dynamic schema on the next. Load is no longer measured just by concurrency. It is measured by context depth and memory weight. A system can look perfectly healthy under ten thousand normal users and buckle instantly when ten agents saturate the GPU queues, because of the sheer density of what they are shuffling back and forth on paths nobody mapped in advance.

---

## The Unintended Throughput Test

Here is what I cannot stop thinking about.

When a business manager instructs their team to deploy agents to automate as much as possible, to hit the efficiency numbers, to show AI utilization, to answer the "how are you using AI today" question, they are, without knowing it, running a throughput test.

No think time. Machine speed. Continuous. In production.

They have not planned it. They have not staffed a war room. They have not set a test window or defined success criteria. They have not established a baseline. There is no DBA watching for deadlocks. There is no infrastructure engineer watching CPU. There is no human hand on the throttle.

And unlike the throughput tests we designed, this one does not stop.

In our old model, hitting saturation was a signal to act. The moment the system showed stress, we backed off deliberately. We gave it room to recover. The recovery test was inseparable from the stress test, it was the whole point.

A well-engineered distributed system would have circuit breakers and rate controls to provide that relief automatically. A good distributed systems engineer would never deploy without them. That objection is valid, and it is precisely the point. Because the people building these agent workflows right now are frequently not distributed systems engineers.

What I am seeing in the field, and what is confirmed by the AI training I am currently completing, is that business leaders are tasking other business people to solve departmental problems with agentic AI. The builders are operations managers, lawyers, administrators, accountants. They are domain experts, often highly capable within their disciplines. But the no-code and low-code agent builders they are using are designed to abstract away infrastructure complexity. The circuit breaker conversation never happens because the person building the workflow does not know the question exists.

In the testing world, we have always understood that subject matter experts need to be *involved* in testing. What is happening now is something different: the subject matter expert has become the builder, and the systems engineer is nowhere in the conversation.

So the agents run. They encounter slow endpoints. They retry. They encounter timeouts. They retry again. And again.

---

## The Feedback Loop Nobody Designed For

I want to be careful here about the framing, because the easy analogy, that this resembles a distributed denial-of-service attack, points readers toward the wrong problem and therefore the wrong solution. A DDoS implies an external adversary. What we are describing is endogenous. The system's own response to stress is what amplifies the stress.

Donella Meadows, the systems thinker whose work in *Thinking in Systems* remains one of the clearest frameworks for understanding complex system behavior, would have recognized this immediately as an unchecked positive feedback loop. The structure is straightforward: an agent hits a degraded endpoint, interprets the timeout as a signal to retry, that retry adds load, the additional load degrades the endpoint further, which generates more timeouts, which generate more retries. The degradation is the amplifier. Each pass around the loop increases the pressure.

There is no natural damping mechanism unless someone designed one in. And as we have just established, the person who built the workflow was an operations manager who did not know to ask about damping.

Meadows would also note that the delay in the feedback loop makes it worse. By the time the infrastructure team sees the saturation signal in their monitoring, the agents have already been compounding the problem through however many retry cycles occurred during the visibility gap. The longer it takes to see the loop, the more it has already run.

This is not an attack to defend against at the perimeter. It is a system dynamic to interrupt from the inside, through circuit breakers, backoff logic, token budgets, and human oversight checkpoints. Governance inside the loop, not a wall around it.

---

## The Throttle of Last Resort

In our old throughput tests, the performance engineer had a hand on the throttle. When the system hit saturation, we backed off. The control was deliberate, technical, and immediate.

In the agentic deployment model, that performance throttle is absent. But I do not think that means there is no throttle at all. I think the throttle has migrated, from the performance layer to the financial one.

Every recursive retry is a billable token event. Every reasoning loop that compounds under degradation is burning through API budget. An agent population that is retrying aggressively because the system is under stress is not just creating a performance problem. It is accelerating spend at exactly the moment when the infrastructure is least able to support productive work.

This creates a second feedback loop running in parallel with the performance one, and in some ways it is more dangerous because it is invisible until it is catastrophic. Performance degradation shows up in monitoring, however imperfect. Budget saturation shows up in a finance report weeks later, long after the agents have already consumed the runway.

The two loops are coupled. The worse performance gets, the faster the budget evaporates. And the throttle that eventually stops the system is not a performance engineer backing off the load. It is an operations manager hitting an approval wall, or a CFO freezing a cost center, or an API quota being exhausted. Budget saturation becomes the throttle of last resort, not a control mechanism, but a crisis response.

---

## The League Nobody Assembled

If load testing was a team sport, agentic infrastructure requires managing a whole league. And that framing was always true, serious performance testing has never been a solo act. What has changed is not the need for coordination but the scale and complexity of who needs to be coordinating, and how far the boundaries of the field now extend.

No single discipline owns this problem. A data engineer would rightly argue that retrieval-augmented generation performance lives in their domain, poorly indexed unstructured data stalls the vector search engine, and that stall propagates through the entire runtime. A security architect would rightly argue that AI guardrails and prompt-injection detectors are processing massive amounts of text in real time, and under heavy load the security middleware itself can become the single point of failure. A FinOps leader would rightly argue that token consumption governance belongs in the architecture from day one, not as a cleanup function after the budget has been consumed.

They would all be right. The performance engineer's seat at this table is not the owner's seat. It is the coordinator's seat, the discipline that understands instrumentation, interference patterns, saturation signals, and how to design a test architecture that gives every other stakeholder what they need to see their piece of the system clearly.

The problem is not that the wrong discipline is in charge. The problem is that nobody has assembled the league at all. No coordinator. No shared instrumentation. No agreed signals. Individual disciplines managing their corner while the feedback loops run unobserved across the boundaries between them.

The classic model, every stakeholder in the room, every system channel instrumented, someone watching the whole field, is not obsolete. It is the template. The question is whether anyone is applying it before the system tells them they should have.

---

## What the Industry Has Not Built Yet

I raised this question with Henry Ebomah, a systems engineer teaching enterprise AI agent workflow training, during a class session in early June. His response was direct: agent load does not equal traditional user load. Ten agents can crush a system that handles ten thousand normal users, because agents do not just make requests, they think, remember, retry, and chain tool calls. What to measure has changed: token throughput, context window usage, tool call frequency, queue depth, retry and loop behavior.

And then he said something that I keep returning to: *"Honestly? The industry is still figuring this out. If you crack a solid methodology for agent load testing, you might be onto something valuable."*

There is no unified solution. The tools currently marketed as AI testing platforms are primarily functional automation, they check whether a button works, not whether the infrastructure holds when the feedback loops start running.

The methodology I keep sketching looks familiar: establish the human ambient baseline on the outside of the application using standard HTTP load tools, then inject the agentic workload on the inside and measure the interference wave, where human transaction times degrade, where the saturation cliff appears, what the financial cost velocity looks like per unit of automated efficiency, where the feedback loops first become visible.

It is the Hammer and the sync server, updated for 2026. Coordinated. Holistic. Staffed. With FinOps in the room alongside the DBA.

---

## The Open Question

This post is a hypothesis, not a solution.

The hypothesis is this: enterprise organizations are deploying autonomous agents at scale without understanding that they have introduced probabilistic, adaptive, externally dependent workloads whose execution paths cannot be predicted in advance, and that when those agents encounter the stress they are helping to create, the system dynamics amplify rather than dampen the pressure, with financial consequences running in parallel that may not be visible until long after the damage is done.

I believe this is measurable. I believe the methodology exists in fragments across disciplines that have not yet been assembled into a coherent practice. I believe the team sport discipline that serious performance testing has always required is exactly the model that needs to be applied here, expanded to league scale, with every stakeholder instrumented and no single owner, just shared visibility and a coordinator watching the whole field.

---

## Show Me the Agentic Load Test

Are organizations actually testing agentic workloads in a systematic way, or are they applying traditional performance techniques to isolated components and assuming the overall system will behave?

If I put on a skeptical CTO hat, the response might be: "We already have monitoring. We already have rate limits. We already have cloud governance."

Fair enough. My follow-up question would be: show me the agentic load test.

Not the API load test. Not the LLM benchmark. Not the RAG evaluation. Not the cost dashboard.

Show me the methodology that predicts what happens when thousands of business-built agents simultaneously encounter degraded conditions across multiple systems, external dependencies, model providers, and tool chains.

Traditional performance engineering eventually converged on widely understood concepts: virtual users, think time, ramp rates, throughput, saturation, recovery testing. Different tools existed, but there was broad agreement on the methodology. I am not sure we are there yet for agentic systems.

One question in particular keeps sticking with me: what is the equivalent of think time for an autonomous agent?

Traditional load models assume humans naturally dampen demand. Agents may not. Their delays are driven by inference time, queue depth, tool latency, rate limits, and model behavior. Those are not the same thing as a person pausing to read a screen.

If the industry has already developed mature methodologies for modeling probabilistic, adaptive, multi-agent workloads, I would genuinely like to see them. I have looked, and found plenty of discussion around AI observability, AI governance, AI evaluation, and AI safety, but much less around agentic load modeling, saturation testing, or performance engineering for autonomous workflows.

Perhaps the methodologies exist and I am simply unaware of them. If so, I would appreciate the references. If not, that absence may itself be evidence that this is an area still being defined.

The load test is not dead. It just left the test environment and moved into production. And nobody assembled the league.

---

*Rick Cavallaro is the founder of RJCadvisors Inc., a QA advisory and test automation consulting firm specializing in enterprise application environments. He writes about the craft of testing at [qameditations.com](https://qameditations.com).*
