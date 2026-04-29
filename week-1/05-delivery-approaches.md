# Delivery Approaches: Predictive vs Agile vs Hybrid

Understanding when to use each approach is critical for the PMP exam. Approximately
50% of exam questions involve agile or hybrid scenarios. You MUST be comfortable
with all three approaches.

Content synthesized from PMBOK 7, Agile Practice Guide, and community resources.
Content rephrased for compliance with licensing restrictions.
Sources: [open-exam-prep.com](https://open-exam-prep.com/blog/how-to-pass-pmp-exam-first-try-2026),
[pmaspirant.com](https://pmaspirant.com/agile-mindset)

---

## The Three Approaches

### Predictive (Waterfall / Plan-Driven)
A sequential approach where the project progresses through distinct phases:
Requirements → Design → Build → Test → Deploy. Each phase is completed before
the next begins. The scope, schedule, and cost are determined early and changes
are managed through formal change control.

### Adaptive (Agile / Change-Driven)
An iterative and incremental approach where work is delivered in short cycles
(iterations/sprints). Requirements evolve through collaboration between the team
and stakeholders. Feedback is gathered frequently and the plan adapts continuously.

### Hybrid (Combination)
Combines elements of both predictive and adaptive approaches. Some parts of the
project may use predictive planning while others use agile execution. This is the
most common approach in real-world projects.

---

## Side-by-Side Comparison

| Characteristic | Predictive | Agile | Hybrid |
|---------------|-----------|-------|--------|
| Requirements | Fixed upfront | Evolving | Mix of fixed and evolving |
| Planning | Detailed upfront | Just-in-time | Upfront for known, JIT for unknown |
| Delivery | End of project | Each iteration | Incremental + end-of-phase |
| Change handling | Formal change control (CCB) | Backlog reprioritization | Both mechanisms |
| Customer involvement | Beginning and end | Continuous | Varies by component |
| Documentation | Comprehensive | Lightweight, just enough | Varies by component |
| Team structure | Defined roles, hierarchy | Self-organizing, cross-functional | Varies |
| Risk approach | Detailed risk planning | Short iterations reduce risk | Both |
| Feedback loops | Phase gates, reviews | Every sprint (1-4 weeks) | Both |
| Best for | Stable requirements, regulated | Uncertain requirements, innovation | Mixed certainty |

---

## When to Use Each Approach

### Use Predictive When:
| Condition | Why |
|-----------|-----|
| Requirements are well-defined and stable | No need for iterative discovery |
| Regulatory/compliance constraints require documentation | Sequential documentation trail |
| Fixed-price contracts | Scope must be locked upfront |
| Low uncertainty, well-understood technology | Detailed planning is reliable |
| Large infrastructure or construction projects | Physical deliverables require sequential phases |
| Stakeholders expect formal milestones and gates | Traditional governance structure |

### Use Agile When:
| Condition | Why |
|-----------|-----|
| Requirements are unclear or evolving | Iterative discovery through feedback |
| High customer involvement is possible | Frequent demos and feedback loops |
| Small, collaborative team | Self-organizing teams work best |
| Innovation or new product development | Experimentation and pivoting needed |
| Speed to market is critical | Incremental delivery of working product |
| High uncertainty or complexity | Short iterations reduce risk exposure |

### Use Hybrid When:
| Condition | Why |
|-----------|-----|
| Some requirements are fixed, others evolving | Predictive for known, agile for unknown |
| Organization is transitioning to agile | Gradual adoption approach |
| External dependencies require predictive planning | Internal development can be agile |
| Regulatory requirements for documentation | Agile delivery with waterfall governance |
| Large project with multiple components | Different components suit different approaches |

---

## Predictive Approach — Key Concepts

### Project Life Cycle Phases
1. **Initiating** — Define the project, get authorization (project charter)
2. **Planning** — Define scope, schedule, cost, quality, risk, procurement, etc.
3. **Executing** — Perform the work, manage the team, acquire resources
4. **Monitoring & Controlling** — Track performance, manage changes
5. **Closing** — Formal acceptance, lessons learned, release resources

### Key Artifacts
| Artifact | Purpose |
|----------|---------|
| Project Charter | Authorizes the project and the PM |
| Project Management Plan | Master plan with all subsidiary plans |
| Scope Baseline | Scope statement + WBS + WBS dictionary |
| Schedule Baseline | Approved project schedule |
| Cost Baseline | Approved time-phased budget |
| Risk Register | Log of identified risks and responses |
| Change Log | Record of all change requests and their status |
| Lessons Learned Register | Captured knowledge for future projects |

### Change Control Process
1. Change is identified
2. Change request is submitted
3. Impact analysis is performed (scope, schedule, cost, quality, risk)
4. Change Control Board (CCB) reviews and approves/rejects
5. If approved: update project management plan and baselines
6. If rejected: document the decision and communicate

**Exam tip**: PMI NEVER wants you to skip this process. Even if the change seems
small or beneficial, the answer is always "follow the change control process."

---

## Agile Approach — Key Concepts

### The Agile Manifesto (4 Values)
1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

The items on the right still have value — but the items on the left are valued MORE.

### 12 Agile Principles (Summarized)
1. Satisfy the customer through early and continuous delivery of valuable work
2. Welcome changing requirements, even late in development
3. Deliver working product frequently (prefer shorter timescales)
4. Business people and developers work together daily
5. Build projects around motivated individuals; give them support and trust
6. Face-to-face conversation is the most effective communication
7. Working product is the primary measure of progress
8. Maintain a sustainable pace of development
9. Continuous attention to technical excellence and good design
10. Simplicity — maximize the amount of work NOT done
11. Self-organizing teams produce the best results
12. Regularly reflect and adjust (retrospectives)

### Scrum Framework (Most Tested Agile Framework)

**Roles**:
| Role | Responsibility |
|------|---------------|
| Product Owner | Owns the product backlog, prioritizes by value, represents stakeholders |
| Scrum Master | Servant leader, removes impediments, facilitates Scrum events, coaches the team |
| Development Team | Self-organizing, cross-functional, delivers the increment |

**Events**:
| Event | Purpose | Timebox |
|-------|---------|---------|
| Sprint | Fixed iteration for delivering an increment | 1-4 weeks (typically 2) |
| Sprint Planning | Define sprint goal, select backlog items, plan the work | 2-4 hours (for 2-week sprint) |
| Daily Standup | Synchronize, identify impediments | 15 minutes |
| Sprint Review | Demo increment to stakeholders, gather feedback | 1-2 hours |
| Sprint Retrospective | Team reflects on process, identifies improvements | 1-1.5 hours |
| Backlog Refinement | Clarify and estimate upcoming backlog items | Ongoing (~10% of sprint capacity) |

**Artifacts**:
| Artifact | Description |
|----------|-------------|
| Product Backlog | Ordered list of everything needed in the product (owned by PO) |
| Sprint Backlog | Items selected for the current sprint + plan to deliver them |
| Increment | The sum of all completed backlog items — must meet Definition of Done |

### Kanban
- Visualize the workflow on a board
- Limit Work in Progress (WIP) — the key differentiator
- Manage flow — optimize throughput
- Make policies explicit
- Implement feedback loops
- Improve collaboratively

### Key Agile Concepts
| Concept | Description |
|---------|-------------|
| User Story | "As a [role], I want [feature] so that [benefit]" |
| INVEST Criteria | Independent, Negotiable, Valuable, Estimable, Small, Testable |
| Story Points | Relative sizing of effort/complexity |
| Velocity | Average story points completed per sprint |
| Definition of Done (DoD) | Team agreement on what "complete" means |
| Definition of Ready (DoR) | Criteria for a backlog item to enter a sprint |
| MVP | Minimum Viable Product — smallest thing that delivers value |
| Spike | Time-boxed research to reduce uncertainty |

### Agile Metrics
| Metric | What It Measures |
|--------|-----------------|
| Velocity | Story points completed per sprint (used for forecasting) |
| Burn-down Chart | Work remaining vs time in a sprint |
| Burn-up Chart | Work completed vs total scope (shows scope changes) |
| Cycle Time | Time from work started to work completed |
| Lead Time | Time from request to delivery |
| Cumulative Flow Diagram | WIP and flow over time (used in Kanban) |

---

## Hybrid Approach — Key Concepts

### Common Hybrid Patterns
| Pattern | Description |
|---------|-------------|
| Waterfall governance + Agile execution | Phase gates and formal reviews, but work within phases is done in sprints |
| Predictive planning + Agile development | Upfront scope/schedule planning, but development uses iterations |
| Component-based hybrid | Some components use predictive (e.g., hardware), others use agile (e.g., software) |
| Agile with predictive procurement | Agile delivery but contracts and procurement follow predictive processes |

### When Hybrid Works Best
- Organization is transitioning from waterfall to agile
- Project has both well-defined and uncertain components
- Stakeholders require traditional reporting but team prefers agile
- Regulatory environment requires documentation but delivery benefits from iteration

---

## Decision Framework: Choosing an Approach

Ask these questions when a scenario describes choosing a methodology:

1. **How well-defined are the requirements?**
   - Well-defined → Predictive
   - Unclear/evolving → Agile
   - Mix → Hybrid

2. **How much uncertainty exists?**
   - Low → Predictive
   - High → Agile
   - Moderate → Hybrid

3. **How involved can the customer be?**
   - Limited availability → Predictive
   - Highly available → Agile
   - Varies → Hybrid

4. **What does the organization support?**
   - Traditional culture → Predictive or Hybrid
   - Agile-mature culture → Agile
   - Transitioning → Hybrid

5. **What are the regulatory requirements?**
   - Heavy documentation → Predictive or Hybrid
   - Flexible → Agile

---

## Exam Tips for Approach Questions

1. PMI does NOT favor one approach over another. The "right" answer depends on
   the scenario context.
2. If the scenario describes stable requirements and a regulated environment,
   predictive is likely correct.
3. If the scenario describes evolving requirements and a need for speed,
   agile is likely correct.
4. If the scenario describes a mix, hybrid is likely correct.
5. The answer "tailor the approach to the project context" is almost always
   a strong choice.
6. Never assume agile means "no planning" — agile plans, just differently.
7. Never assume predictive means "no flexibility" — change control exists for a reason.

---

## Self-Check Questions

1. What are the 4 values of the Agile Manifesto?
2. Name the 3 Scrum roles and their primary responsibilities.
3. What is the difference between a Sprint Review and a Sprint Retrospective?
4. When would you choose a hybrid approach over pure agile?
5. What is the key differentiator of Kanban vs Scrum?
6. How does change management differ between predictive and agile?
7. What does INVEST stand for in user stories?
