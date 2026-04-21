// Chapters 8 (continued), 9, 10, 11, 12
// These will be merged into pages.js

const additional_pages = [

{
chapter: "Chapter 8: Process Domain",
title: "Schedule Management",
html: `
<h1>Schedule Management</h1>
<p>Schedule management involves defining activities, sequencing them, estimating durations, developing the schedule, and controlling it throughout the project.</p>
<h2>Activity Dependencies</h2>
<table><tr><th>Type</th><th>Abbreviation</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Finish-to-Start</strong></td><td>FS</td><td>B can't start until A finishes</td><td>Pour foundation before building walls</td></tr>
<tr><td><strong>Start-to-Start</strong></td><td>SS</td><td>B can't start until A starts</td><td>Editing starts when writing starts</td></tr>
<tr><td><strong>Finish-to-Finish</strong></td><td>FF</td><td>B can't finish until A finishes</td><td>Testing finishes when coding finishes</td></tr>
<tr><td><strong>Start-to-Finish</strong></td><td>SF</td><td>B can't finish until A starts</td><td>Old system runs until new system starts (rare)</td></tr>
</table>
<p><strong>FS is the most common dependency type.</strong> SF is the rarest.</p>
<h2>Leads and Lags</h2>
<table><tr><th>Concept</th><th>Definition</th><th>Example</th></tr>
<tr><td><strong>Lead</strong></td><td>Acceleration — successor starts before predecessor finishes</td><td>Start painting 2 days before plastering finishes (FS - 2 days)</td></tr>
<tr><td><strong>Lag</strong></td><td>Delay — waiting time between activities</td><td>Wait 3 days for concrete to cure before building (FS + 3 days)</td></tr>
</table>
<h2>Critical Path Method (CPM)</h2>
<p>The critical path is the <strong>longest path through the network diagram</strong>. It determines the minimum project duration.</p>
<ul>
<li>Activities on the critical path have <strong>zero float</strong> (no slack)</li>
<li>Any delay on the critical path delays the entire project</li>
<li>A project can have multiple critical paths</li>
<li><strong>Forward pass</strong>: Calculate Early Start (ES) and Early Finish (EF)</li>
<li><strong>Backward pass</strong>: Calculate Late Start (LS) and Late Finish (LF)</li>
<li><strong>Float</strong> = LS - ES = LF - EF</li>
</ul>
<h2>Schedule Compression</h2>
<table><tr><th>Technique</th><th>How It Works</th><th>Trade-off</th></tr>
<tr><td><strong>Crashing</strong></td><td>Add resources to critical path activities</td><td>Increases cost</td></tr>
<tr><td><strong>Fast-tracking</strong></td><td>Perform sequential activities in parallel</td><td>Increases risk (rework potential)</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Crashing and fast-tracking only work on <strong>critical path activities</strong>. Compressing non-critical activities won't shorten the project. Also: crash the activity with the lowest cost-per-unit-of-time-saved first.</div>
<h2>Estimating Techniques</h2>
<table><tr><th>Technique</th><th>Description</th><th>Accuracy</th></tr>
<tr><td><strong>Analogous</strong></td><td>Use similar past projects as a basis</td><td>Rough (±25-50%)</td></tr>
<tr><td><strong>Parametric</strong></td><td>Use statistical relationships (e.g., $X per line of code)</td><td>Moderate</td></tr>
<tr><td><strong>Bottom-up</strong></td><td>Estimate each work package, then roll up</td><td>Most accurate</td></tr>
<tr><td><strong>Three-point (PERT)</strong></td><td>(O + 4M + P) / 6</td><td>Good for uncertainty</td></tr>
</table>
`
},
{
chapter: "Chapter 8: Process Domain",
title: "Cost Management & EVM",
html: `
<h1>Cost Management</h1>
<p>Cost management involves estimating costs, determining the budget, and controlling costs throughout the project.</p>
<h2>Cost Estimating Techniques</h2>
<p>Same techniques as schedule estimating: Analogous, Parametric, Bottom-up, Three-point. Bottom-up is the most accurate but most time-consuming.</p>
<h2>Budget Components</h2>
<table><tr><th>Component</th><th>Description</th></tr>
<tr><td>Activity cost estimates</td><td>Cost of each work package</td></tr>
<tr><td>+ Contingency reserves</td><td>For known risks (owned by PM)</td></tr>
<tr><td>= <strong>Cost baseline</strong></td><td>Approved time-phased budget</td></tr>
<tr><td>+ Management reserves</td><td>For unknown risks (owned by management)</td></tr>
<tr><td>= <strong>Project budget</strong></td><td>Total authorized funding</td></tr>
</table>
<div class="key-point"><strong>Key distinction:</strong> Contingency reserves are for known risks and are part of the cost baseline. Management reserves are for unknown risks and are NOT part of the cost baseline. The PM can use contingency reserves; management reserves require management approval.</div>
<hr>
<h1>Earned Value Management (EVM)</h1>
<p>EVM integrates scope, schedule, and cost data to assess project performance. This is one of the most calculation-heavy topics on the exam. <strong>Memorize these formulas.</strong></p>
<h2>The Three Core Values</h2>
<table><tr><th>Abbreviation</th><th>Name</th><th>Question It Answers</th></tr>
<tr><td><strong>PV</strong></td><td>Planned Value</td><td>How much work should be done by now? (budget for scheduled work)</td></tr>
<tr><td><strong>EV</strong></td><td>Earned Value</td><td>How much work IS done? (budget for completed work)</td></tr>
<tr><td><strong>AC</strong></td><td>Actual Cost</td><td>How much did we actually spend?</td></tr>
</table>
<h2>Variance Formulas (Subtraction)</h2>
<table><tr><th>Formula</th><th>Calculation</th><th>Interpretation</th></tr>
<tr><td><strong>SV</strong> (Schedule Variance)</td><td>EV - PV</td><td>Positive = ahead of schedule; Negative = behind</td></tr>
<tr><td><strong>CV</strong> (Cost Variance)</td><td>EV - AC</td><td>Positive = under budget; Negative = over budget</td></tr>
</table>
<p><em>Memory trick: Variances always start with EV and subtract.</em></p>
<h2>Index Formulas (Division)</h2>
<table><tr><th>Formula</th><th>Calculation</th><th>Interpretation</th></tr>
<tr><td><strong>SPI</strong> (Schedule Performance Index)</td><td>EV / PV</td><td>&gt;1.0 = ahead; &lt;1.0 = behind; 1.0 = on schedule</td></tr>
<tr><td><strong>CPI</strong> (Cost Performance Index)</td><td>EV / AC</td><td>&gt;1.0 = under budget; &lt;1.0 = over budget; 1.0 = on budget</td></tr>
</table>
<p><em>Memory trick: Indices always start with EV and divide. Greater than 1 is good.</em></p>
<h2>Forecasting Formulas</h2>
<table><tr><th>Formula</th><th>Calculation</th><th>When to Use</th></tr>
<tr><td><strong>EAC</strong> (Estimate at Completion)</td><td>BAC / CPI</td><td>Current cost trend will continue (most common on exam)</td></tr>
<tr><td>EAC (atypical)</td><td>AC + (BAC - EV)</td><td>Variance was a one-time event; future work at original rate</td></tr>
<tr><td>EAC (both factors)</td><td>AC + (BAC - EV) / (CPI × SPI)</td><td>Both cost and schedule affect remaining work</td></tr>
<tr><td><strong>ETC</strong> (Estimate to Complete)</td><td>EAC - AC</td><td>How much more money needed to finish</td></tr>
<tr><td><strong>VAC</strong> (Variance at Completion)</td><td>BAC - EAC</td><td>Projected budget variance at end</td></tr>
<tr><td><strong>TCPI</strong> (To-Complete Performance Index)</td><td>(BAC - EV) / (BAC - AC)</td><td>Required efficiency to meet original budget</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip — Worked Example</div>
<p>A project has BAC = $200,000. At the status date: EV = $80,000, PV = $100,000, AC = $90,000.</p>
<p><strong>SV</strong> = 80K - 100K = <strong>-$20,000</strong> (behind schedule)<br>
<strong>CV</strong> = 80K - 90K = <strong>-$10,000</strong> (over budget)<br>
<strong>SPI</strong> = 80K / 100K = <strong>0.80</strong> (20% behind schedule)<br>
<strong>CPI</strong> = 80K / 90K = <strong>0.89</strong> (getting 89¢ per dollar spent)<br>
<strong>EAC</strong> = 200K / 0.89 = <strong>$224,719</strong> (projected total cost)<br>
<strong>ETC</strong> = 224,719 - 90K = <strong>$134,719</strong> (still need to spend)<br>
<strong>VAC</strong> = 200K - 224,719 = <strong>-$24,719</strong> (projected over budget)</p>
</div>
`
},
{
chapter: "Chapter 8: Process Domain",
title: "Quality & Risk Management",
html: `
<h1>Quality Management</h1>
<p>Quality management ensures that the project and its deliverables meet the defined requirements and standards.</p>
<h2>Key Quality Concepts</h2>
<table><tr><th>Concept</th><th>Definition</th></tr>
<tr><td><strong>Quality</strong></td><td>The degree to which a set of characteristics fulfills requirements</td></tr>
<tr><td><strong>Grade</strong></td><td>A category for deliverables with the same function but different characteristics</td></tr>
<tr><td><strong>Precision</strong></td><td>Consistency of repeated measurements (tight grouping)</td></tr>
<tr><td><strong>Accuracy</strong></td><td>Closeness to the true value (hitting the target)</td></tr>
</table>
<p><strong>Low quality is always a problem. Low grade may not be.</strong> A simple product that works perfectly is high quality, low grade.</p>
<h2>Quality Assurance vs Quality Control</h2>
<table><tr><th>Aspect</th><th>Quality Assurance (QA)</th><th>Quality Control (QC)</th></tr>
<tr><td>Focus</td><td>Processes</td><td>Deliverables</td></tr>
<tr><td>Purpose</td><td>Prevent defects</td><td>Detect defects</td></tr>
<tr><td>When</td><td>During execution (process audits)</td><td>During execution (inspections)</td></tr>
<tr><td>Approach</td><td>Proactive</td><td>Reactive</td></tr>
</table>
<h2>The 7 Basic Quality Tools</h2>
<table><tr><th>Tool</th><th>Purpose</th></tr>
<tr><td><strong>Cause-and-Effect (Fishbone/Ishikawa)</strong></td><td>Identify root causes of a problem</td></tr>
<tr><td><strong>Flowchart</strong></td><td>Map a process to find inefficiencies</td></tr>
<tr><td><strong>Check Sheet</strong></td><td>Collect data in a structured format</td></tr>
<tr><td><strong>Pareto Chart</strong></td><td>Identify the vital few causes (80/20 rule)</td></tr>
<tr><td><strong>Histogram</strong></td><td>Show frequency distribution of data</td></tr>
<tr><td><strong>Control Chart</strong></td><td>Monitor process stability over time (upper/lower control limits)</td></tr>
<tr><td><strong>Scatter Diagram</strong></td><td>Show relationship between two variables</td></tr>
</table>
<h2>Cost of Quality (CoQ)</h2>
<table><tr><th>Category</th><th>Type</th><th>Examples</th></tr>
<tr><td><strong>Prevention costs</strong></td><td>Conformance</td><td>Training, process documentation, quality planning</td></tr>
<tr><td><strong>Appraisal costs</strong></td><td>Conformance</td><td>Testing, inspections, audits</td></tr>
<tr><td><strong>Internal failure costs</strong></td><td>Non-conformance</td><td>Rework, scrap, retesting</td></tr>
<tr><td><strong>External failure costs</strong></td><td>Non-conformance</td><td>Warranty claims, liability, reputation damage</td></tr>
</table>
<div class="key-point"><strong>PMI principle:</strong> Spending more on prevention and appraisal reduces failure costs. Prevention is always cheaper than correction.</div>
<hr>
<h1>Risk Management</h1>
<p>Risk management is about identifying, analyzing, and responding to project risks proactively. A risk is an uncertain event that, if it occurs, has a positive or negative effect on project objectives.</p>
<h2>Risk Management Process</h2>
<ol>
<li><strong>Plan Risk Management</strong> — Define how risk activities will be conducted</li>
<li><strong>Identify Risks</strong> — Determine which risks may affect the project</li>
<li><strong>Qualitative Risk Analysis</strong> — Prioritize risks by probability and impact</li>
<li><strong>Quantitative Risk Analysis</strong> — Numerically analyze the effect of risks</li>
<li><strong>Plan Risk Responses</strong> — Develop options and actions to address risks</li>
<li><strong>Implement Risk Responses</strong> — Execute the agreed-upon response plans</li>
<li><strong>Monitor Risks</strong> — Track identified risks, identify new risks, evaluate effectiveness</li>
</ol>
<h2>Risk Response Strategies</h2>
<table><tr><th>For Threats (Negative)</th><th>For Opportunities (Positive)</th></tr>
<tr><td><strong>Avoid</strong> — Eliminate the threat entirely</td><td><strong>Exploit</strong> — Ensure the opportunity happens</td></tr>
<tr><td><strong>Transfer</strong> — Shift impact to a third party (insurance, outsourcing)</td><td><strong>Share</strong> — Allocate to a third party best positioned to capture it</td></tr>
<tr><td><strong>Mitigate</strong> — Reduce probability or impact</td><td><strong>Enhance</strong> — Increase probability or impact</td></tr>
<tr><td><strong>Accept</strong> — Acknowledge; may be active (contingency plan) or passive (do nothing)</td><td><strong>Accept</strong> — Acknowledge and be ready if it occurs</td></tr>
<tr><td><strong>Escalate</strong> — Beyond PM's authority; escalate to program/portfolio level</td><td><strong>Escalate</strong> — Beyond PM's authority</td></tr>
</table>
<h2>Key Risk Concepts</h2>
<table><tr><th>Term</th><th>Definition</th></tr>
<tr><td><strong>Risk Register</strong></td><td>Document listing all identified risks, their analysis, and response plans</td></tr>
<tr><td><strong>Risk Owner</strong></td><td>Person responsible for monitoring and implementing the risk response</td></tr>
<tr><td><strong>Risk Trigger</strong></td><td>An event or condition that indicates a risk is about to occur</td></tr>
<tr><td><strong>Residual Risk</strong></td><td>Risk remaining after response strategies are applied</td></tr>
<tr><td><strong>Secondary Risk</strong></td><td>A new risk created by implementing a risk response</td></tr>
<tr><td><strong>Workaround</strong></td><td>An unplanned response to a risk that has occurred (no prior plan)</td></tr>
<tr><td><strong>EMV</strong></td><td>Expected Monetary Value = Probability × Impact (used in decision trees)</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Risk management is <strong>proactive</strong>. If a question asks what to do about a potential future event, the answer involves the risk management process. If the event has already occurred, it's an <strong>issue</strong>, not a risk — use the issue log and implement a workaround or contingency plan.</div>
`
},
{
chapter: "Chapter 8: Process Domain",
title: "Procurement & Communications",
html: `
<h1>Procurement Management</h1>
<p>Procurement management involves acquiring goods and services from outside the project team. The exam tests your knowledge of contract types, the procurement process, and make-or-buy decisions.</p>
<h2>Contract Types (Risk Spectrum)</h2>
<p>Contract types exist on a spectrum from buyer risk to seller risk:</p>
<table><tr><th>Type</th><th>Abbreviation</th><th>Buyer Risk</th><th>Seller Risk</th><th>Description</th></tr>
<tr><td>Cost Plus Percentage of Cost</td><td>CPPC</td><td>Highest</td><td>Lowest</td><td>Seller reimbursed for costs + percentage fee (bad for buyer — no incentive to control costs)</td></tr>
<tr><td>Cost Plus Fixed Fee</td><td>CPFF</td><td>High</td><td>Low</td><td>Seller reimbursed for costs + fixed fee</td></tr>
<tr><td>Cost Plus Incentive Fee</td><td>CPIF</td><td>Medium-High</td><td>Medium-Low</td><td>Seller reimbursed for costs + fee based on meeting performance targets</td></tr>
<tr><td>Cost Plus Award Fee</td><td>CPAF</td><td>Medium</td><td>Medium</td><td>Seller reimbursed for costs + award fee based on subjective evaluation</td></tr>
<tr><td>Time & Materials</td><td>T&M</td><td>Medium</td><td>Medium</td><td>Pay for time and materials used; hybrid of fixed and cost contracts</td></tr>
<tr><td>Fixed Price Incentive Fee</td><td>FPIF</td><td>Medium-Low</td><td>Medium-High</td><td>Fixed price with incentive for meeting targets; shared savings/overruns</td></tr>
<tr><td>Firm Fixed Price</td><td>FFP</td><td>Lowest</td><td>Highest</td><td>Set price regardless of actual costs — seller bears all cost risk</td></tr>
</table>
<div class="key-point"><strong>Memory trick:</strong> Cost-reimbursable contracts put risk on the <strong>buyer</strong>. Fixed-price contracts put risk on the <strong>seller</strong>. T&M is in the middle.</div>
<h2>Point of Total Assumption (PTA)</h2>
<p>Used only with FPIF contracts. The PTA is the cost point above which the seller bears all additional costs.</p>
<p><strong>PTA = ((Ceiling Price - Target Price) / Buyer's Share Ratio) + Target Cost</strong></p>
<hr>
<h1>Communications Management</h1>
<p>The PM spends approximately <strong>90% of their time communicating</strong>. Effective communication is critical to project success.</p>
<h2>Communication Channels Formula</h2>
<p><strong>Channels = n(n-1) / 2</strong> where n = number of stakeholders</p>
<table><tr><th>Stakeholders</th><th>Channels</th></tr>
<tr><td>5</td><td>10</td></tr>
<tr><td>10</td><td>45</td></tr>
<tr><td>15</td><td>105</td></tr>
<tr><td>20</td><td>190</td></tr>
</table>
<p><em>Adding one person to a 10-person team increases channels from 45 to 55 — a 22% increase. This is why communication complexity grows rapidly.</em></p>
<h2>Communication Methods</h2>
<table><tr><th>Method</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Interactive</strong></td><td>Two-way, real-time exchange</td><td>Meetings, phone calls, video conferences</td></tr>
<tr><td><strong>Push</strong></td><td>Sent to specific recipients (no guarantee it's read)</td><td>Emails, memos, reports</td></tr>
<tr><td><strong>Pull</strong></td><td>Placed in a central location for recipients to access</td><td>Intranet, knowledge base, shared drives</td></tr>
</table>
<h2>Communication Models</h2>
<p>Sender → Encode → Message → Decode → Receiver → Feedback</p>
<p><strong>Noise</strong> can interfere at any point in this chain. The sender is responsible for ensuring the message is clear, and must confirm the receiver understood it (feedback loop).</p>
`
},

// ============================================================
// CHAPTER 9: BUSINESS ENVIRONMENT DOMAIN (8% of Exam)
// ============================================================
{
chapter: "Chapter 9: Business Environment",
title: "Benefits, Compliance & Change",
html: `
<h1>Business Environment Domain</h1>
<p>The smallest domain at 8%, but questions tend to be nuanced and scenario-based. This domain tests whether you understand <strong>why</strong> projects exist and how they connect to organizational strategy.</p>
<h2>Benefits Realization</h2>
<p>Every project exists to deliver business value. The PM must ensure the project stays aligned with its intended benefits throughout its lifecycle.</p>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td><strong>Business Case</strong></td><td>Justification for the project — expected benefits vs costs, ROI analysis</td></tr>
<tr><td><strong>Benefits Management Plan</strong></td><td>How benefits will be realized, measured, and sustained after the project</td></tr>
<tr><td><strong>Benefits Owner</strong></td><td>Person accountable for realizing benefits (often not the PM)</td></tr>
<tr><td><strong>Value Delivery</strong></td><td>Continuous assessment of whether the project is delivering intended value</td></tr>
</table>
<h2>Project Selection Methods</h2>
<table><tr><th>Method</th><th>Description</th><th>Decision Rule</th></tr>
<tr><td><strong>NPV</strong> (Net Present Value)</td><td>Present value of future cash flows minus investment</td><td>Higher NPV = better project</td></tr>
<tr><td><strong>IRR</strong> (Internal Rate of Return)</td><td>Discount rate that makes NPV = 0</td><td>Higher IRR = better project</td></tr>
<tr><td><strong>Payback Period</strong></td><td>Time to recover the initial investment</td><td>Shorter = better</td></tr>
<tr><td><strong>ROI</strong> (Return on Investment)</td><td>(Net Profit / Cost) × 100</td><td>Higher ROI = better project</td></tr>
<tr><td><strong>BCR</strong> (Benefit-Cost Ratio)</td><td>Benefits / Costs</td><td>BCR &gt; 1.0 = benefits exceed costs</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>When comparing projects: choose the one with the <strong>highest NPV</strong> (most common selection criterion). If NPV is equal, use IRR. If the question asks about time to recover investment, use payback period.</div>
<h2>Compliance</h2>
<p>The PM must ensure the project complies with all applicable regulations, laws, organizational policies, and industry standards.</p>
<ul>
<li>Identify compliance requirements early in planning</li>
<li>Monitor compliance throughout execution</li>
<li>Document compliance activities and evidence</li>
<li>Understand consequences of non-compliance (legal, financial, reputational)</li>
<li>Compliance requirements may constrain the project approach (e.g., requiring predictive documentation)</li>
</ul>
<h2>Organizational Change Management</h2>
<p>Projects deliver change. The PM must help the organization adopt and sustain the changes the project delivers.</p>
<h3>Change Management Models</h3>
<table><tr><th>Model</th><th>Steps</th></tr>
<tr><td><strong>Kotter's 8 Steps</strong></td><td>1. Create urgency 2. Build coalition 3. Form vision 4. Communicate vision 5. Empower action 6. Create quick wins 7. Build on change 8. Anchor in culture</td></tr>
<tr><td><strong>ADKAR</strong></td><td>Awareness → Desire → Knowledge → Ability → Reinforcement</td></tr>
<tr><td><strong>Lewin's 3 Stages</strong></td><td>Unfreeze (prepare) → Change (transition) → Refreeze (sustain)</td></tr>
</table>
<h3>Dealing with Resistance</h3>
<ul>
<li>Understand the root cause (fear, loss of control, lack of information, past bad experiences)</li>
<li>Communicate the "why" — help people understand the purpose and benefits</li>
<li>Involve resistors in the change process where possible</li>
<li>Provide training and support</li>
<li>Celebrate early wins to build momentum</li>
</ul>
<h2>External Environment</h2>
<p>External factors can impact the project at any time. Use <strong>PESTLE analysis</strong> to monitor:</p>
<table><tr><th>Factor</th><th>Examples</th></tr>
<tr><td><strong>P</strong>olitical</td><td>Government policies, political stability, trade regulations</td></tr>
<tr><td><strong>E</strong>conomic</td><td>Interest rates, inflation, exchange rates, economic growth</td></tr>
<tr><td><strong>S</strong>ocial</td><td>Demographics, cultural trends, consumer behavior</td></tr>
<tr><td><strong>T</strong>echnological</td><td>New technologies, automation, digital transformation</td></tr>
<tr><td><strong>L</strong>egal</td><td>Laws, regulations, compliance requirements</td></tr>
<tr><td><strong>E</strong>nvironmental</td><td>Climate, sustainability, environmental regulations</td></tr>
</table>
<div class="key-point"><strong>When external changes occur:</strong> Assess the impact on the project → Inform stakeholders → Adjust scope/backlog as needed → Follow change control (predictive) or reprioritize backlog (agile).</div>
`
},

// ============================================================
// CHAPTER 10: AGILE & HYBRID DEEP DIVE
// ============================================================
{
chapter: "Chapter 10: Agile & Hybrid",
title: "Agile Frameworks Beyond Scrum",
html: `
<h1>Agile Frameworks Beyond Scrum</h1>
<p>While Scrum is the most tested framework, the PMP exam also covers Kanban, XP, Lean, and SAFe at a high level.</p>
<h2>Kanban (Deep Dive)</h2>
<p>Kanban is a flow-based system that visualizes work and limits work in progress. Unlike Scrum, it has no fixed iterations or prescribed roles.</p>
<table><tr><th>Kanban Principle</th><th>Description</th></tr>
<tr><td><strong>Visualize the workflow</strong></td><td>Use a board with columns representing stages (To Do, In Progress, Done)</td></tr>
<tr><td><strong>Limit WIP</strong></td><td>Set maximum items per column — the KEY differentiator</td></tr>
<tr><td><strong>Manage flow</strong></td><td>Optimize throughput, reduce bottlenecks</td></tr>
<tr><td><strong>Make policies explicit</strong></td><td>Define rules for how work moves through the system</td></tr>
<tr><td><strong>Implement feedback loops</strong></td><td>Regular reviews and retrospectives</td></tr>
<tr><td><strong>Improve collaboratively</strong></td><td>Continuous, evolutionary improvement</td></tr>
</table>
<h3>Kanban vs Scrum</h3>
<table><tr><th>Aspect</th><th>Scrum</th><th>Kanban</th></tr>
<tr><td>Cadence</td><td>Fixed sprints (1-4 weeks)</td><td>Continuous flow</td></tr>
<tr><td>Roles</td><td>PO, SM, Dev Team</td><td>No prescribed roles</td></tr>
<tr><td>Planning</td><td>Sprint planning events</td><td>Just-in-time, as capacity allows</td></tr>
<tr><td>Change</td><td>Changes wait for next sprint</td><td>Changes can enter anytime (if WIP allows)</td></tr>
<tr><td>Metrics</td><td>Velocity, burn-down</td><td>Cycle time, lead time, throughput</td></tr>
<tr><td>Best for</td><td>Product development, feature delivery</td><td>Support, maintenance, continuous delivery</td></tr>
</table>
<h2>Extreme Programming (XP)</h2>
<p>XP focuses on engineering practices and technical excellence:</p>
<table><tr><th>Practice</th><th>Description</th></tr>
<tr><td><strong>Pair Programming</strong></td><td>Two developers work together at one workstation</td></tr>
<tr><td><strong>Test-Driven Development (TDD)</strong></td><td>Write tests before writing code</td></tr>
<tr><td><strong>Continuous Integration</strong></td><td>Integrate and test code frequently (multiple times per day)</td></tr>
<tr><td><strong>Refactoring</strong></td><td>Continuously improve code structure without changing behavior</td></tr>
<tr><td><strong>Simple Design</strong></td><td>Build the simplest thing that works</td></tr>
<tr><td><strong>Collective Code Ownership</strong></td><td>Any developer can modify any code</td></tr>
<tr><td><strong>Sustainable Pace</strong></td><td>No overtime — maintain a 40-hour week</td></tr>
</table>
<h2>Lean Principles</h2>
<ol>
<li><strong>Eliminate waste</strong> — Remove anything that doesn't add value</li>
<li><strong>Build quality in</strong> — Prevent defects rather than finding them</li>
<li><strong>Create knowledge</strong> — Learn through short feedback cycles</li>
<li><strong>Defer commitment</strong> — Make decisions at the last responsible moment</li>
<li><strong>Deliver fast</strong> — Short iterations, rapid feedback</li>
<li><strong>Respect people</strong> — Empower teams, trust their expertise</li>
<li><strong>Optimize the whole</strong> — Focus on the entire value stream, not local optimization</li>
</ol>
<h2>Scaled Agile (SAFe — High Level)</h2>
<p>SAFe is a framework for scaling agile across large organizations. Know these terms at a high level:</p>
<ul>
<li><strong>Agile Release Train (ART)</strong> — A team of agile teams (50-125 people)</li>
<li><strong>Program Increment (PI)</strong> — A timebox (typically 8-12 weeks) for planning and delivery</li>
<li><strong>PI Planning</strong> — A face-to-face event where all teams align on objectives</li>
</ul>
`
},
{
chapter: "Chapter 10: Agile & Hybrid",
title: "Hybrid Approaches & Agile Leadership",
html: `
<h1>Hybrid Project Management</h1>
<p>Hybrid approaches combine predictive and agile elements. This is the most common approach in real-world projects and is heavily tested on the exam.</p>
<h2>Common Hybrid Patterns</h2>
<table><tr><th>Pattern</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Waterfall governance + Agile execution</strong></td><td>Phase gates and formal reviews, but work within phases uses sprints</td><td>Government projects with regulatory milestones</td></tr>
<tr><td><strong>Predictive planning + Agile development</strong></td><td>Upfront scope/schedule planning, but development is iterative</td><td>Construction project with software component</td></tr>
<tr><td><strong>Component-based hybrid</strong></td><td>Different components use different approaches</td><td>Hardware (predictive) + Software (agile)</td></tr>
<tr><td><strong>Agile with predictive procurement</strong></td><td>Agile delivery but contracts follow predictive processes</td><td>Fixed-price contract with agile internal delivery</td></tr>
</table>
<h2>Tailoring the Approach</h2>
<p>PMBOK 7 Principle 7 (Tailoring) is central to hybrid. The PM must assess the project context and select the right mix:</p>
<table><tr><th>Factor</th><th>Leans Predictive</th><th>Leans Agile</th></tr>
<tr><td>Requirements clarity</td><td>Well-defined, stable</td><td>Unclear, evolving</td></tr>
<tr><td>Stakeholder availability</td><td>Limited</td><td>Highly available</td></tr>
<tr><td>Regulatory environment</td><td>Heavy documentation required</td><td>Flexible</td></tr>
<tr><td>Team experience</td><td>New to agile</td><td>Experienced with agile</td></tr>
<tr><td>Organizational culture</td><td>Traditional, hierarchical</td><td>Collaborative, flat</td></tr>
<tr><td>Risk tolerance</td><td>Low (risk-averse)</td><td>High (comfortable with uncertainty)</td></tr>
</table>
<hr>
<h1>Agile Leadership</h1>
<p>In agile environments, the PM's role shifts from directing to facilitating. The team is self-organizing; the PM removes impediments and creates the conditions for success.</p>
<h2>The Servant Leader in Agile</h2>
<table><tr><th>Traditional PM</th><th>Agile Servant Leader</th></tr>
<tr><td>Assigns tasks</td><td>Team self-selects work</td></tr>
<tr><td>Makes decisions</td><td>Facilitates team decision-making</td></tr>
<tr><td>Controls the plan</td><td>Adapts the plan based on feedback</td></tr>
<tr><td>Reports to management</td><td>Shields team from distractions</td></tr>
<tr><td>Manages scope tightly</td><td>Welcomes change through backlog management</td></tr>
<tr><td>Measures compliance</td><td>Measures value delivered</td></tr>
</table>
<h2>Agile Estimation Techniques</h2>
<table><tr><th>Technique</th><th>Description</th></tr>
<tr><td><strong>Planning Poker</strong></td><td>Team members independently estimate using cards, then discuss differences</td></tr>
<tr><td><strong>T-Shirt Sizing</strong></td><td>Relative sizing: XS, S, M, L, XL</td></tr>
<tr><td><strong>Affinity Estimation</strong></td><td>Group similar items together, then size the groups</td></tr>
<tr><td><strong>Ideal Days</strong></td><td>How many uninterrupted days would this take?</td></tr>
<tr><td><strong>Story Points</strong></td><td>Relative measure of effort, complexity, and uncertainty</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Agile estimation is <strong>relative</strong>, not absolute. Story points measure relative effort compared to other items, not hours or days. Velocity (average points per sprint) is used for forecasting, not for comparing teams.</div>
`
},

// ============================================================
// CHAPTER 11: EVM & CALCULATIONS
// ============================================================
{
chapter: "Chapter 11: EVM & Calculations",
title: "All Formulas Reference",
html: `
<h1>PMP Formulas — Complete Reference</h1>
<p>This page consolidates every formula you need to memorize for the exam. Practice these until they're automatic.</p>
<h2>Earned Value Management (EVM)</h2>
<table><tr><th>Formula</th><th>Calculation</th><th>Interpretation</th></tr>
<tr><td>SV</td><td>EV - PV</td><td>+ ahead, - behind schedule</td></tr>
<tr><td>CV</td><td>EV - AC</td><td>+ under, - over budget</td></tr>
<tr><td>SPI</td><td>EV / PV</td><td>&gt;1 ahead, &lt;1 behind</td></tr>
<tr><td>CPI</td><td>EV / AC</td><td>&gt;1 under budget, &lt;1 over</td></tr>
<tr><td>EAC (typical)</td><td>BAC / CPI</td><td>Projected total cost (trend continues)</td></tr>
<tr><td>EAC (atypical)</td><td>AC + (BAC - EV)</td><td>Projected total cost (one-time variance)</td></tr>
<tr><td>EAC (both)</td><td>AC + (BAC - EV) / (CPI × SPI)</td><td>Both cost and schedule factors</td></tr>
<tr><td>ETC</td><td>EAC - AC</td><td>Cost to finish remaining work</td></tr>
<tr><td>VAC</td><td>BAC - EAC</td><td>Projected budget variance at end</td></tr>
<tr><td>TCPI (to BAC)</td><td>(BAC - EV) / (BAC - AC)</td><td>Required efficiency to meet original budget</td></tr>
<tr><td>TCPI (to EAC)</td><td>(BAC - EV) / (EAC - AC)</td><td>Required efficiency to meet new estimate</td></tr>
</table>
<h2>PERT (Three-Point Estimating)</h2>
<table><tr><th>Formula</th><th>Calculation</th></tr>
<tr><td>Expected duration (tE)</td><td>(O + 4M + P) / 6</td></tr>
<tr><td>Standard deviation (σ)</td><td>(P - O) / 6</td></tr>
<tr><td>Variance (σ²)</td><td>((P - O) / 6)²</td></tr>
</table>
<p>Where O = Optimistic, M = Most Likely, P = Pessimistic</p>
<h2>Communication Channels</h2>
<p><strong>n(n-1) / 2</strong> where n = number of stakeholders</p>
<h2>Point of Total Assumption (PTA)</h2>
<p><strong>PTA = ((Ceiling Price - Target Price) / Buyer Share Ratio) + Target Cost</strong></p>
<p>Used only with Fixed Price Incentive Fee (FPIF) contracts.</p>
<h2>Expected Monetary Value (EMV)</h2>
<p><strong>EMV = Probability × Impact</strong></p>
<p>Used in decision tree analysis. Sum all EMVs to find the expected value of a decision path.</p>
<h2>Return on Investment (ROI)</h2>
<p><strong>ROI = (Net Profit / Cost of Investment) × 100</strong></p>
<h2>Benefit-Cost Ratio (BCR)</h2>
<p><strong>BCR = Total Benefits / Total Costs</strong></p>
<p>BCR &gt; 1.0 means benefits exceed costs.</p>
<h2>Practice Problems</h2>
<div class="callout"><div class="callout-title">📝 Problem 1</div>
<p>BAC = $500,000. EV = $200,000. AC = $250,000. PV = $225,000.</p>
<p>Calculate: CV, SV, CPI, SPI, EAC (typical), ETC, VAC</p>
<p><strong>Answers:</strong><br>
CV = 200K - 250K = <strong>-$50,000</strong> (over budget)<br>
SV = 200K - 225K = <strong>-$25,000</strong> (behind schedule)<br>
CPI = 200K / 250K = <strong>0.80</strong><br>
SPI = 200K / 225K = <strong>0.89</strong><br>
EAC = 500K / 0.80 = <strong>$625,000</strong><br>
ETC = 625K - 250K = <strong>$375,000</strong><br>
VAC = 500K - 625K = <strong>-$125,000</strong> (projected $125K over budget)</p>
</div>
<div class="callout"><div class="callout-title">📝 Problem 2</div>
<p>A project has 12 team members. Two more are added. How many new communication channels are created?</p>
<p><strong>Answer:</strong><br>
Before: 12(11)/2 = <strong>66</strong> channels<br>
After: 14(13)/2 = <strong>91</strong> channels<br>
New channels: 91 - 66 = <strong>25</strong></p>
</div>
<div class="callout"><div class="callout-title">📝 Problem 3</div>
<p>PERT estimate: O = 4 days, M = 6 days, P = 14 days.</p>
<p><strong>Answer:</strong><br>
tE = (4 + 4(6) + 14) / 6 = (4 + 24 + 14) / 6 = 42/6 = <strong>7 days</strong><br>
σ = (14 - 4) / 6 = 10/6 = <strong>1.67 days</strong></p>
</div>
`
},

// ============================================================
// CHAPTER 12: ETHICS & PROFESSIONAL CONDUCT
// ============================================================
{
chapter: "Chapter 12: Ethics",
title: "PMI Code of Ethics",
html: `
<h1>PMI Code of Ethics and Professional Conduct</h1>
<p>Ethics questions appear throughout the exam, not just in one section. PMI expects project managers to uphold the highest ethical standards. When in doubt, the ethical answer is always correct.</p>
<h2>The Four Values</h2>
<table><tr><th>Value</th><th>Definition</th><th>Aspirational Standard</th><th>Mandatory Standard</th></tr>
<tr><td><strong>Responsibility</strong></td><td>Ownership of decisions and consequences</td><td>Take ownership of decisions we make or fail to make</td><td>Report unethical or illegal conduct; uphold policies</td></tr>
<tr><td><strong>Respect</strong></td><td>Treating others with dignity</td><td>Learn about norms and customs of others; listen to diverse viewpoints</td><td>Negotiate in good faith; do not use your position to influence others for personal gain</td></tr>
<tr><td><strong>Fairness</strong></td><td>Making impartial decisions</td><td>Demonstrate transparency in decision-making; provide equal access to information</td><td>Disclose conflicts of interest; do not discriminate; do not engage in favoritism</td></tr>
<tr><td><strong>Honesty</strong></td><td>Truthfulness in all communications</td><td>Earnestly seek to understand the truth; be truthful in communications</td><td>Do not engage in or condone deceptive behavior; do not misrepresent qualifications</td></tr>
</table>
<h2>Common Ethics Scenarios on the Exam</h2>
<table><tr><th>Scenario</th><th>Correct Response</th><th>Why</th></tr>
<tr><td>You discover a team member falsified data</td><td>Report to management immediately</td><td>Honesty + Responsibility</td></tr>
<tr><td>A vendor offers you expensive gifts</td><td>Decline and disclose per organizational policy</td><td>Fairness + Honesty</td></tr>
<tr><td>You realize the project will miss its deadline</td><td>Inform the sponsor immediately with options</td><td>Honesty + Responsibility</td></tr>
<tr><td>A stakeholder asks you to hide a cost overrun</td><td>Refuse and report transparently</td><td>Honesty + Responsibility</td></tr>
<tr><td>You have a personal relationship with a vendor</td><td>Disclose the conflict of interest</td><td>Fairness + Honesty</td></tr>
<tr><td>You're asked to approve work that doesn't meet quality standards</td><td>Refuse; follow quality processes</td><td>Responsibility + Honesty</td></tr>
<tr><td>A colleague is padding their PMP application hours</td><td>Advise them to be accurate; report if they proceed</td><td>Honesty + Responsibility</td></tr>
<tr><td>You discover a safety violation on the project</td><td>Stop work and report immediately</td><td>Responsibility (safety first)</td></tr>
</table>
<h2>Conflict of Interest</h2>
<p>A conflict of interest exists when your personal interests could influence your professional judgment. PMI requires:</p>
<ul>
<li><strong>Proactive disclosure</strong> — Don't wait to be asked</li>
<li><strong>Recusal when appropriate</strong> — Remove yourself from decisions where you have a conflict</li>
<li><strong>Transparency</strong> — Let stakeholders know about potential conflicts</li>
</ul>
<h2>Cultural and Global Considerations</h2>
<ul>
<li>Respect cultural differences in communication styles, decision-making, and hierarchy</li>
<li>What's considered ethical may vary by culture — but PMI's Code of Ethics applies universally</li>
<li>When local customs conflict with PMI ethics, follow PMI's Code of Ethics</li>
<li>Be aware of bribery laws (FCPA, UK Bribery Act) — gifts that are customary in one culture may be illegal in another</li>
</ul>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Ethics questions often have an answer that seems "practical" or "diplomatic" but isn't fully ethical. <strong>Always choose the most ethical answer</strong>, even if it's uncomfortable. Report violations, disclose conflicts, be transparent, and never compromise honesty — even under pressure from sponsors or stakeholders.</div>
<h2>The Ethics Decision Framework</h2>
<ol>
<li>Is it legal?</li>
<li>Does it comply with PMI's Code of Ethics?</li>
<li>Does it comply with organizational policies?</li>
<li>Would you be comfortable if it were made public?</li>
<li>Does it treat all parties fairly and with respect?</li>
</ol>
<p>If the answer to any of these is "no," don't do it.</p>
`
},

// ============================================================
// CHAPTER 13: FINAL REVIEW
// ============================================================
{
chapter: "Chapter 13: Final Review",
title: "Complete Quick Reference",
html: `
<h1>Complete Quick Reference Card</h1>
<h2>Exam Structure</h2>
<table><tr><th>Detail</th><th>Value</th></tr>
<tr><td>Questions</td><td>180 (175 scored)</td></tr>
<tr><td>Time</td><td>230 minutes</td></tr>
<tr><td>Breaks</td><td>After Q60 and Q120 (10 min each)</td></tr>
<tr><td>Domains</td><td>People 42% · Process 50% · Business Environment 8%</td></tr>
</table>
<h2>The 12 Principles</h2>
<p>1. Stewardship · 2. Team · 3. Stakeholders · 4. Value · 5. Systems Thinking · 6. Leadership · 7. Tailoring · 8. Quality · 9. Complexity · 10. Risk · 11. Adaptability · 12. Change</p>
<h2>The 8 Performance Domains</h2>
<p>Stakeholders · Team · Development Approach · Planning · Project Work · Delivery · Measurement · Uncertainty</p>
<h2>PMI Code of Ethics</h2>
<p><strong>Responsibility · Respect · Fairness · Honesty</strong></p>
<h2>Conflict Resolution (PMI Preference Order)</h2>
<p>1. Collaborate ✅ · 2. Compromise · 3. Smooth · 4. Force · 5. Withdraw</p>
<h2>Tuckman's Stages</h2>
<p>Forming → Storming → Norming → Performing → Adjourning</p>
<h2>Risk Responses</h2>
<p><strong>Threats:</strong> Avoid · Transfer · Mitigate · Accept · Escalate</p>
<p><strong>Opportunities:</strong> Exploit · Share · Enhance · Accept · Escalate</p>
<h2>Contract Types (Buyer Risk: High → Low)</h2>
<p>CPPC → CPFF → CPIF → CPAF → T&M → FPIF → FFP</p>
<h2>Key Formulas</h2>
<table><tr><th>Formula</th><th>Calculation</th></tr>
<tr><td>SV / CV</td><td>EV - PV / EV - AC</td></tr>
<tr><td>SPI / CPI</td><td>EV / PV / EV / AC</td></tr>
<tr><td>EAC (typical)</td><td>BAC / CPI</td></tr>
<tr><td>ETC</td><td>EAC - AC</td></tr>
<tr><td>VAC</td><td>BAC - EAC</td></tr>
<tr><td>TCPI</td><td>(BAC - EV) / (BAC - AC)</td></tr>
<tr><td>PERT</td><td>(O + 4M + P) / 6</td></tr>
<tr><td>Std Dev</td><td>(P - O) / 6</td></tr>
<tr><td>Channels</td><td>n(n-1) / 2</td></tr>
<tr><td>PTA</td><td>((Ceiling - Target Price) / Buyer Share) + Target Cost</td></tr>
</table>
<h2>The PMI Mindset (Top 5 Rules)</h2>
<ol>
<li>Servant leadership is the default</li>
<li>Always follow the process (change control)</li>
<li>Assess before acting</li>
<li>Never gold plate</li>
<li>Ethics first, always</li>
</ol>
<div class="callout"><div class="callout-title">✅ Study Book Complete</div>
<p>You've covered all the core content. Your next steps:</p>
<ol>
<li>Take the diagnostic quiz to identify weak areas</li>
<li>Do 1,000+ practice questions across all domains</li>
<li>Take at least 3 full-length mock exams (180 questions, timed)</li>
<li>Review every wrong answer — understand WHY</li>
<li>Practice your brain dump (write all formulas in under 5 minutes)</li>
</ol>
<p><strong>You've got this.</strong></p>
</div>
`
},

]; // end of additional_pages
