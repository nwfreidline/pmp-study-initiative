// PMP Study Book — Page Content
// Each page: { chapter, title, html }

const defined_pages = [

// ============================================================
// CHAPTER 1: EXAM OVERVIEW
// ============================================================
{
chapter: "Chapter 1: Exam Overview",
title: "What Is the PMP?",
html: `
<h1>What Is the PMP?</h1>
<p>The <strong>Project Management Professional (PMP)</strong> certification is administered by the <strong>Project Management Institute (PMI)</strong>. It is the most widely recognized project management credential globally.</p>
<p>It validates that you have the knowledge, skills, and experience to lead and direct projects across any industry, methodology, or approach.</p>
<div class="callout"><div class="callout-title">💡 Why It Matters</div>PMP-certified professionals earn a median salary 33% higher than non-certified project managers, according to PMI's salary survey. The certification signals to employers that you can lead complex projects effectively.</div>
<h2>What the Exam Tests</h2>
<p>The PMP exam is <strong>scenario-based</strong>. You won't be asked to recite definitions. Instead, you'll be given a project situation and asked what the project manager should do. The exam tests your ability to <em>apply</em> project management knowledge, not just recall it.</p>
<p>Approximately <strong>50% of questions involve agile or hybrid approaches</strong> — this is not a waterfall-only exam.</p>
<h2>The Exam Content Outline (ECO)</h2>
<p>The ECO is the official blueprint for what the exam tests. It defines three domains:</p>
<table><tr><th>Domain</th><th>Weight</th><th>Focus</th></tr>
<tr><td><strong>People</strong></td><td>42%</td><td>Leadership, team management, conflict resolution, stakeholder engagement</td></tr>
<tr><td><strong>Process</strong></td><td>50%</td><td>Planning, execution, monitoring, scope, schedule, cost, quality, risk, procurement</td></tr>
<tr><td><strong>Business Environment</strong></td><td>8%</td><td>Benefits realization, compliance, organizational change</td></tr>
</table>
<div class="key-point"><strong>Key insight:</strong> People is the largest domain at 42%. The exam cares deeply about <em>how you lead</em>, not just what you manage.</div>
`
},
{
chapter: "Chapter 1: Exam Overview",
title: "Exam Format & Scoring",
html: `
<h1>Exam Format & Scoring</h1>
<h2>Format at a Glance</h2>
<table><tr><th>Detail</th><th>Value</th></tr>
<tr><td>Total Questions</td><td>180</td></tr>
<tr><td>Scored Questions</td><td>175 (5 are unscored pretest items — you won't know which)</td></tr>
<tr><td>Time Limit</td><td>230 minutes (3 hours, 50 minutes)</td></tr>
<tr><td>Breaks</td><td>Two optional 10-minute breaks (after Q60 and Q120)</td></tr>
<tr><td>Question Types</td><td>Multiple choice, multiple response, matching, hotspot, fill-in-the-blank</td></tr>
<tr><td>Delivery</td><td>Pearson VUE test center OR online proctored</td></tr>
<tr><td>Exam Fee</td><td>$405 (PMI members) / $555 (non-members)</td></tr>
<tr><td>PMI Membership</td><td>$139/year (includes free PMBOK PDF)</td></tr>
<tr><td>Validity</td><td>3 years (renew with 60 PDUs)</td></tr>
</table>
<h2>Question Types</h2>
<ul>
<li><strong>Situational judgment</strong> — most common. "What should the PM do?"</li>
<li><strong>Calculation</strong> — EVM, communication channels, PERT</li>
<li><strong>Matching / drag-and-drop</strong> — less common</li>
<li><strong>Hotspot</strong> — click on the correct area of a diagram</li>
</ul>
<h2>How Scoring Works</h2>
<p>PMI does <strong>not</strong> use a fixed passing percentage. Your performance is evaluated across each domain using proficiency levels:</p>
<table><tr><th>Level</th><th>Meaning</th></tr>
<tr><td><strong>Above Target (AT)</strong></td><td>Superior understanding — exceeds expectations</td></tr>
<tr><td><strong>Target (T)</strong></td><td>Sufficient knowledge to manage projects effectively</td></tr>
<tr><td><strong>Below Target (BT)</strong></td><td>Gaps in knowledge that need improvement</td></tr>
<tr><td><strong>Needs Improvement (NI)</strong></td><td>Significant deficiencies</td></tr>
</table>
<p>You receive a rating for each of the three domains. Community estimates suggest roughly <strong>60-65% correct</strong> on scored questions to pass, but the exact algorithm is proprietary.</p>
<div class="key-point"><strong>Goal:</strong> Aim for Above Target (AT) or Target (T) in all three domains.</div>
`
},
{
chapter: "Chapter 1: Exam Overview",
title: "Eligibility & Logistics",
html: `
<h1>Eligibility & Exam Day Logistics</h1>
<h2>Eligibility Requirements</h2>
<h3>Path 1: With a 4-Year Degree</h3>
<ul><li>36 months (3 years) leading and directing projects</li><li>35 contact hours of project management education/training</li></ul>
<h3>Path 2: With a High School Diploma or Associate Degree</h3>
<ul><li>60 months (5 years) leading and directing projects</li><li>35 contact hours of project management education/training</li></ul>
<div class="callout"><div class="callout-title">⚠️ Important</div>
<ul><li>"Leading projects" means directing tasks, managing team members, overseeing deliverables — not just being a team member</li>
<li>The 35 contact hours can come from PMI-approved providers, university courses, employer training, or online courses</li>
<li>PMI audits ~10-20% of applications — be accurate and keep documentation</li></ul></div>
<h2>Exam Day — Before</h2>
<ul><li>Schedule through Pearson VUE (online or test center)</li><li>Bring two forms of valid, non-expired ID (one with photo + signature)</li><li>Arrive 30 minutes early</li><li>Online proctored: clear desk, clear room, stable internet, working webcam/mic</li></ul>
<h2>Exam Day — During</h2>
<ul><li>You get scratch paper or a digital whiteboard</li><li>Use the first few minutes for your <strong>"brain dump"</strong> of formulas</li><li>Two 10-minute breaks after Q60 and Q120 — <strong>TAKE THEM</strong></li><li>You can flag questions and return to them</li></ul>
<h2>Time Management</h2>
<table><tr><th>Metric</th><th>Value</th></tr>
<tr><td>Time per question</td><td>~76 seconds (1 min 16 sec)</td></tr>
<tr><td>Flag threshold</td><td>If a question takes &gt; 2 minutes, flag and move on</td></tr>
<tr><td>Per block target</td><td>~76 minutes per 60-question block</td></tr>
<tr><td>Break usage</td><td>Deep breathing and a snack — NOT reviewing questions</td></tr>
</table>
`
},
{
chapter: "Chapter 1: Exam Overview",
title: "Key Terminology",
html: `
<h1>Key Terminology</h1>
<p>These terms appear constantly throughout PMP study materials and the exam itself. Internalize them now.</p>
<table><tr><th>Term</th><th>Definition</th></tr>
<tr><td><strong>ECO</strong></td><td>Exam Content Outline — the official blueprint for what the exam tests</td></tr>
<tr><td><strong>PMBOK</strong></td><td>Project Management Body of Knowledge — PMI's reference standard</td></tr>
<tr><td><strong>Domain</strong></td><td>A high-level area of exam content (People, Process, Business Environment)</td></tr>
<tr><td><strong>Task</strong></td><td>A specific responsibility within a domain (35 total)</td></tr>
<tr><td><strong>Enabler</strong></td><td>An illustrative example of how a task might be performed</td></tr>
<tr><td><strong>Performance Domain</strong></td><td>One of 8 areas from PMBOK 7 (different from exam domains!)</td></tr>
<tr><td><strong>Principle</strong></td><td>One of 12 guiding beliefs from PMBOK 7</td></tr>
<tr><td><strong>Predictive</strong></td><td>Traditional/waterfall — sequential, plan-driven</td></tr>
<tr><td><strong>Adaptive</strong></td><td>Agile — iterative, incremental, feedback-driven</td></tr>
<tr><td><strong>Hybrid</strong></td><td>Combination of predictive and adaptive elements</td></tr>
<tr><td><strong>Servant Leadership</strong></td><td>Leadership style where the PM serves the team's needs</td></tr>
<tr><td><strong>CCB</strong></td><td>Change Control Board — reviews and approves/rejects change requests</td></tr>
<tr><td><strong>WBS</strong></td><td>Work Breakdown Structure — hierarchical decomposition of scope</td></tr>
<tr><td><strong>EVM</strong></td><td>Earned Value Management — technique for measuring project performance</td></tr>
</table>
<h2>What NOT to Waste Time On</h2>
<ol>
<li>Reading the PMBOK cover-to-cover (use it as a reference)</li>
<li>Memorizing all 49 processes from PMBOK 6 (exam is based on PMBOK 7)</li>
<li>Memorizing every ITTO (understand them conceptually)</li>
<li>Studying only waterfall/predictive (half the exam is agile/hybrid)</li>
<li>Taking fewer than 1,000 practice questions</li>
</ol>
`
},

// ============================================================
// CHAPTER 2: THE 12 PRINCIPLES
// ============================================================
{
chapter: "Chapter 2: The 12 Principles",
title: "Principles Overview",
html: `
<h1>The 12 Principles of Project Management</h1>
<p>PMBOK 7th Edition replaced the prescriptive 49-process framework with <strong>12 guiding principles</strong>. These are not step-by-step instructions — they are foundational beliefs that shape how project professionals should think and act, regardless of methodology, industry, or project type.</p>
<h2>The Shift from Processes to Principles</h2>
<table><tr><th>PMBOK 6 (Old)</th><th>PMBOK 7 (Current)</th></tr>
<tr><td>Process-based (49 processes)</td><td>Principle-based (12 principles)</td></tr>
<tr><td>Prescriptive steps</td><td>Guidance for behavior</td></tr>
<tr><td>10 Knowledge Areas</td><td>8 Performance Domains</td></tr>
<tr><td>Inputs, Tools, Outputs</td><td>Mindsets and approaches</td></tr>
</table>
<h2>Three Natural Groupings</h2>
<p><strong>People-Focused</strong> (How you lead and interact):</p>
<ul><li>1. Stewardship</li><li>2. Team</li><li>3. Stakeholders</li><li>6. Leadership</li></ul>
<p><strong>Approach-Focused</strong> (How you structure and adapt):</p>
<ul><li>5. Systems Thinking</li><li>7. Tailoring</li><li>9. Complexity</li><li>11. Adaptability and Resilience</li></ul>
<p><strong>Outcome-Focused</strong> (What you deliver):</p>
<ul><li>4. Value</li><li>8. Quality</li><li>10. Risk</li><li>12. Change</li></ul>
<div class="key-point"><strong>Exam relevance:</strong> You won't be asked "List the 12 principles." Instead, you'll get a scenario and need to choose the answer that best reflects these principles.</div>
`
},
{
chapter: "Chapter 2: The 12 Principles",
title: "Stewardship & Team",
html: `
<h1>Principle 1: Stewardship</h1>
<blockquote>Be a diligent, respectful, and caring steward.</blockquote>
<p>You are a <strong>custodian, not an owner</strong>. The project's resources — budget, people, materials, time — belong to the organization. You are trusted to use them responsibly.</p>
<table><tr><th>Behavior</th><th>Example</th></tr>
<tr><td>Integrity</td><td>Report project status honestly, even when it's bad news</td></tr>
<tr><td>Care</td><td>Consider team well-being, not just deadlines</td></tr>
<tr><td>Trustworthiness</td><td>Honor commitments and follow through</td></tr>
<tr><td>Compliance</td><td>Follow regulations even when inconvenient</td></tr>
<tr><td>Holistic view</td><td>Consider impact on the broader organization</td></tr>
</table>
<p>Stewardship directly maps to PMI's Code of Ethics: <strong>Responsibility, Respect, Fairness, Honesty</strong>.</p>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>When a question involves resource allocation, ethical dilemmas, or organizational policy, the answer that demonstrates responsible, transparent, ethical behavior is correct.</div>
<hr>
<h1>Principle 2: Team</h1>
<blockquote>Create a collaborative project team environment.</blockquote>
<p>Build a team culture based on <strong>trust, psychological safety, and shared purpose</strong>.</p>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td>Shared purpose</td><td>Everyone understands and is aligned on project goals</td></tr>
<tr><td>Psychological safety</td><td>Team members feel safe to speak up, ask questions, admit mistakes</td></tr>
<tr><td>Trust</td><td>Built through consistency, transparency, and follow-through</td></tr>
<tr><td>Diversity & inclusion</td><td>Different perspectives improve decision-making</td></tr>
<tr><td>Self-organizing teams</td><td>Especially in agile — the team decides HOW to do the work</td></tr>
</table>
<h3>Tuckman's Team Development Model</h3>
<table><tr><th>Stage</th><th>What Happens</th><th>PM's Role</th></tr>
<tr><td><strong>Forming</strong></td><td>Team assembles, polite, uncertain</td><td>Provide direction, clarify goals</td></tr>
<tr><td><strong>Storming</strong></td><td>Conflicts emerge, power struggles</td><td>Facilitate resolution, coach</td></tr>
<tr><td><strong>Norming</strong></td><td>Team establishes norms, cohesion builds</td><td>Support, step back slightly</td></tr>
<tr><td><strong>Performing</strong></td><td>High performance, self-managing</td><td>Delegate, remove impediments</td></tr>
<tr><td><strong>Adjourning</strong></td><td>Team disbands after project ends</td><td>Celebrate, capture lessons learned</td></tr>
</table>
`
},
{
chapter: "Chapter 2: The 12 Principles",
title: "Stakeholders & Value",
html: `
<h1>Principle 3: Stakeholders</h1>
<blockquote>Effectively engage with stakeholders.</blockquote>
<p>Identify stakeholders <strong>early and continuously</strong> throughout the project. Understand each stakeholder's interests, influence, expectations, and potential impact.</p>
<h3>Stakeholder Analysis Tools</h3>
<table><tr><th>Tool</th><th>What It Does</th></tr>
<tr><td>Power/Interest Grid</td><td>Maps stakeholders by their power and interest level</td></tr>
<tr><td>Power/Influence Grid</td><td>Maps stakeholders by their power and influence</td></tr>
<tr><td>Salience Model</td><td>Classifies by power, urgency, and legitimacy</td></tr>
<tr><td>Engagement Matrix</td><td>Tracks current vs desired engagement level</td></tr>
</table>
<h3>Engagement Levels</h3>
<table><tr><th>Level</th><th>Description</th></tr>
<tr><td>Unaware</td><td>Doesn't know about the project</td></tr>
<tr><td>Resistant</td><td>Aware but opposed</td></tr>
<tr><td>Neutral</td><td>Aware but neither supportive nor resistant</td></tr>
<tr><td>Supportive</td><td>Aware and supportive</td></tr>
<tr><td>Leading</td><td>Actively engaged and driving success</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Stakeholder engagement is a recurring theme across ALL three exam domains. When in doubt, the answer that involves more communication, more engagement, and more transparency is usually correct.</div>
<hr>
<h1>Principle 4: Value</h1>
<blockquote>Focus on value — outcomes and benefits, not just outputs.</blockquote>
<p>The purpose of every project is to deliver value. If a project isn't delivering value, question whether it should continue.</p>
<ul>
<li><strong>Outcomes over outputs</strong> — Business results matter more than deliverables</li>
<li><strong>Continuous assessment</strong> — Regularly evaluate whether value is being delivered</li>
<li><strong>Incremental delivery</strong> — In agile, deliver value each iteration, don't wait until the end</li>
<li><strong>MVP</strong> — Minimum Viable Product: the smallest deliverable that provides value</li>
</ul>
<div class="key-point"><strong>Key concept:</strong> Value is defined by the stakeholders and the business case, not by the PM. The PM's job is to maximize value delivery.</div>
`
},
{
chapter: "Chapter 2: The 12 Principles",
title: "Systems Thinking & Leadership",
html: `
<h1>Principle 5: Systems Thinking</h1>
<blockquote>Recognize, evaluate, and respond to system interactions.</blockquote>
<p>Projects don't exist in isolation. They are part of larger organizational, social, and environmental systems. A change in one part can ripple through others.</p>
<table><tr><th>Scenario</th><th>Systems Thinking Response</th></tr>
<tr><td>Scope change requested</td><td>Assess impact on schedule, cost, quality, risk, AND other projects</td></tr>
<tr><td>Team member leaves</td><td>Consider impact on knowledge, morale, dependencies, AND succession</td></tr>
<tr><td>New regulation announced</td><td>Evaluate impact on compliance, scope, timeline, AND stakeholders</td></tr>
<tr><td>Technology decision</td><td>Consider integration with existing systems, maintenance, AND training</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>When a question describes a change or decision, look for the answer that considers the <em>broader impact</em>, not just the immediate effect.</div>
<hr>
<h1>Principle 6: Leadership</h1>
<blockquote>Demonstrate leadership behaviors.</blockquote>
<p>Leadership is not about title or authority — it's about <strong>influence, vision, and service</strong>.</p>
<table><tr><th>Style</th><th>When to Use</th><th>Description</th></tr>
<tr><td><strong>Servant</strong></td><td>Most situations (PMI default)</td><td>Serve the team, remove impediments</td></tr>
<tr><td><strong>Transformational</strong></td><td>When change is needed</td><td>Inspire and motivate toward a vision</td></tr>
<tr><td><strong>Transactional</strong></td><td>Routine, stable work</td><td>Reward/consequence based</td></tr>
<tr><td><strong>Laissez-faire</strong></td><td>Highly experienced teams</td><td>Hands-off, team self-manages</td></tr>
<tr><td><strong>Directive</strong></td><td>Emergencies only</td><td>Tell people what to do</td></tr>
<tr><td><strong>Coaching</strong></td><td>Developing team members</td><td>Guide through questions and support</td></tr>
</table>
<h3>Servant Leadership Behaviors</h3>
<ul>
<li>Listen actively and empathetically</li>
<li>Remove impediments and blockers</li>
<li>Shield the team from distractions</li>
<li>Facilitate rather than dictate</li>
<li>Promote team self-organization</li>
<li>Put the team's needs before your own</li>
</ul>
`
},
{
chapter: "Chapter 2: The 12 Principles",
title: "Tailoring, Quality & Complexity",
html: `
<h1>Principle 7: Tailoring</h1>
<blockquote>Tailor based on context.</blockquote>
<p>There is no one-size-fits-all approach. Adapt your methodology, processes, tools, and techniques to fit the specific project's needs.</p>
<table><tr><th>Factor</th><th>Consider</th></tr>
<tr><td>Project size</td><td>Scale processes up or down</td></tr>
<tr><td>Complexity</td><td>More rigor for complex projects</td></tr>
<tr><td>Industry/regulations</td><td>Compliance requirements may dictate approach</td></tr>
<tr><td>Organizational culture</td><td>Align with how the organization works</td></tr>
<tr><td>Team experience</td><td>Experienced teams need less oversight</td></tr>
<tr><td>Risk level</td><td>Higher risk = more planning and controls</td></tr>
</table>
<hr>
<h1>Principle 8: Quality</h1>
<blockquote>Build quality into processes and deliverables.</blockquote>
<p>Quality is not an afterthought — it's built into every phase.</p>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td>Quality Assurance (QA)</td><td>Process audits — are we following the right processes?</td></tr>
<tr><td>Quality Control (QC)</td><td>Inspecting deliverables — do they meet standards?</td></tr>
<tr><td>Cost of Quality (CoQ)</td><td>Prevention + Appraisal + Internal Failure + External Failure</td></tr>
<tr><td>PDCA Cycle</td><td>Plan-Do-Check-Act (continuous improvement)</td></tr>
<tr><td>Gold plating</td><td>Adding unrequested features — PMI says NEVER do this</td></tr>
</table>
<div class="key-point"><strong>PMI always prefers prevention over inspection.</strong> The answer that builds quality into the process is preferred over catching defects after the fact.</div>
<hr>
<h1>Principle 9: Complexity</h1>
<blockquote>Navigate complexity.</blockquote>
<p>Complexity arises from human behavior, system interactions, ambiguity, and technological uncertainty. Recognize it early, break problems into smaller pieces, and use iterative approaches when complexity is high.</p>
<table><tr><th>Source</th><th>Example</th></tr>
<tr><td>Human behavior</td><td>Stakeholder politics, team dynamics, resistance to change</td></tr>
<tr><td>System interactions</td><td>Integration with multiple systems, dependencies</td></tr>
<tr><td>Ambiguity</td><td>Unclear requirements, undefined success criteria</td></tr>
<tr><td>Technological uncertainty</td><td>New or unproven technology</td></tr>
</table>
`
},
{
chapter: "Chapter 2: The 12 Principles",
title: "Risk, Adaptability & Change",
html: `
<h1>Principle 10: Risk</h1>
<blockquote>Optimize risk responses.</blockquote>
<p>Risk management is <strong>proactive, not reactive</strong>. Risk includes both threats (negative) and opportunities (positive).</p>
<table><tr><th>For Threats</th><th>For Opportunities</th></tr>
<tr><td><strong>Avoid</strong> — Eliminate the threat</td><td><strong>Exploit</strong> — Ensure the opportunity happens</td></tr>
<tr><td><strong>Transfer</strong> — Shift to a third party</td><td><strong>Share</strong> — Allocate to a third party</td></tr>
<tr><td><strong>Mitigate</strong> — Reduce probability/impact</td><td><strong>Enhance</strong> — Increase probability/impact</td></tr>
<tr><td><strong>Accept</strong> — Acknowledge and prepare</td><td><strong>Accept</strong> — Acknowledge and be ready</td></tr>
<tr><td><strong>Escalate</strong> — Beyond PM's authority</td><td><strong>Escalate</strong> — Beyond PM's authority</td></tr>
</table>
<hr>
<h1>Principle 11: Adaptability and Resilience</h1>
<blockquote>Embrace adaptability and resilience.</blockquote>
<table><tr><th>Concept</th><th>Definition</th><th>Example</th></tr>
<tr><td><strong>Adaptability</strong></td><td>Ability to adjust to changing conditions</td><td>Reprioritizing backlog when market shifts</td></tr>
<tr><td><strong>Resilience</strong></td><td>Ability to recover from setbacks</td><td>Recovering from a key team member leaving</td></tr>
</table>
<p>Change is inevitable. Build flexibility into plans. Learn from setbacks and apply lessons quickly.</p>
<hr>
<h1>Principle 12: Change</h1>
<blockquote>Enable change to achieve the envisioned future state.</blockquote>
<p>Projects ARE change. Every project exists to move the organization from a current state to a desired future state.</p>
<h3>Change Management Models</h3>
<table><tr><th>Model</th><th>Key Idea</th></tr>
<tr><td><strong>Kotter's 8 Steps</strong></td><td>Create urgency → Build coalition → Form vision → Communicate → Empower → Quick wins → Build on change → Anchor in culture</td></tr>
<tr><td><strong>ADKAR</strong></td><td>Awareness → Desire → Knowledge → Ability → Reinforcement</td></tr>
<tr><td><strong>Lewin's 3 Stages</strong></td><td>Unfreeze → Change → Refreeze</td></tr>
</table>
<div class="key-point"><strong>The PM's role:</strong> Help stakeholders adopt and sustain the changes the project delivers. Address resistance constructively — understand the root cause.</div>
`
},

// ============================================================
// CHAPTER 3: PERFORMANCE DOMAINS
// ============================================================
{
chapter: "Chapter 3: Performance Domains",
title: "Domains Overview",
html: `
<h1>The 8 Performance Domains</h1>
<p>PMBOK 7 replaced the 10 Knowledge Areas with <strong>8 Performance Domains</strong>. These represent interconnected areas of focus that run concurrently throughout a project — they are NOT sequential phases.</p>
<div class="callout"><div class="callout-title">⚠️ Critical Distinction</div>
<p>Do NOT confuse the <strong>8 Performance Domains</strong> (from PMBOK 7) with the <strong>3 Exam Domains</strong> (People, Process, Business Environment). They are completely different frameworks.</p>
<table><tr><th>PMBOK 7 Performance Domains (8)</th><th>PMP Exam Domains (3)</th></tr>
<tr><td>How PMBOK 7 organizes PM activities</td><td>How the ECO structures the exam</td></tr>
<tr><td>Conceptual framework for doing PM</td><td>Blueprint for what the exam tests</td></tr>
</table></div>
<h2>All 8 domains are:</h2>
<ul>
<li><strong>Interactive</strong> — They influence each other constantly</li>
<li><strong>Concurrent</strong> — All are active throughout the project lifecycle</li>
<li><strong>Outcome-focused</strong> — Each has specific outcomes indicating success</li>
<li><strong>Adaptable</strong> — Applied differently based on project context</li>
</ul>
<table><tr><th>#</th><th>Domain</th><th>Focus</th></tr>
<tr><td>1</td><td>Stakeholders</td><td>Engagement and relationships</td></tr>
<tr><td>2</td><td>Team</td><td>Leadership and team dynamics</td></tr>
<tr><td>3</td><td>Development Approach & Life Cycle</td><td>Methodology selection</td></tr>
<tr><td>4</td><td>Planning</td><td>Organizing the work</td></tr>
<tr><td>5</td><td>Project Work</td><td>Executing and managing work</td></tr>
<tr><td>6</td><td>Delivery</td><td>Creating value and outcomes</td></tr>
<tr><td>7</td><td>Measurement</td><td>Assessing performance</td></tr>
<tr><td>8</td><td>Uncertainty</td><td>Risk, ambiguity, complexity</td></tr>
</table>
`
},
{
chapter: "Chapter 3: Performance Domains",
title: "Stakeholders, Team & Approach",
html: `
<h1>Domain 1: Stakeholders</h1>
<p><strong>Focus:</strong> Engaging with those who affect or are affected by the project.</p>
<table><tr><th>Activity</th><th>Description</th></tr>
<tr><td>Identify</td><td>Determine who has interest in the project</td></tr>
<tr><td>Analyze</td><td>Understand expectations, influence, power, impact</td></tr>
<tr><td>Prioritize</td><td>Focus engagement efforts on key stakeholders</td></tr>
<tr><td>Build relationships</td><td>Develop trust and collaborative partnerships</td></tr>
<tr><td>Manage expectations</td><td>Align what stakeholders expect with reality</td></tr>
</table>
<hr>
<h1>Domain 2: Team</h1>
<p><strong>Focus:</strong> Creating an effective project team environment.</p>
<table><tr><th>Activity</th><th>Description</th></tr>
<tr><td>Build the team</td><td>Acquire members, develop skills, build cohesion</td></tr>
<tr><td>Define culture</td><td>Establish norms, working agreements, ground rules</td></tr>
<tr><td>Develop capabilities</td><td>Grow team skills through training and mentoring</td></tr>
<tr><td>Empower</td><td>Enable autonomous decision-making</td></tr>
<tr><td>Recognize</td><td>Acknowledge contributions and celebrate achievements</td></tr>
</table>
<hr>
<h1>Domain 3: Development Approach & Life Cycle</h1>
<p><strong>Focus:</strong> Selecting and applying the appropriate development approach.</p>
<table><tr><th>Approach</th><th>Characteristics</th><th>Best When</th></tr>
<tr><td><strong>Predictive</strong></td><td>Sequential, plan-driven</td><td>Requirements are stable and well-understood</td></tr>
<tr><td><strong>Adaptive</strong></td><td>Iterative, incremental</td><td>Requirements are unclear or changing</td></tr>
<tr><td><strong>Hybrid</strong></td><td>Combines both</td><td>Some parts stable, others uncertain</td></tr>
</table>
<h3>Generic Life Cycle Phases</h3>
<table><tr><th>Phase</th><th>Activities</th></tr>
<tr><td>Starting</td><td>Authorization, initial planning, project charter</td></tr>
<tr><td>Organizing</td><td>Team setup, detailed planning, approach selection</td></tr>
<tr><td>Performing</td><td>Execution, delivery, monitoring</td></tr>
<tr><td>Ending</td><td>Transition, closure, lessons learned</td></tr>
</table>
`
},
{
chapter: "Chapter 3: Performance Domains",
title: "Planning, Work & Delivery",
html: `
<h1>Domain 4: Planning</h1>
<p><strong>Focus:</strong> Organizing and elaborating project work.</p>
<table><tr><th>Element</th><th>What It Covers</th></tr>
<tr><td>Scope</td><td>What will be delivered (WBS, backlog)</td></tr>
<tr><td>Schedule</td><td>When work will be completed (CPM, sprints)</td></tr>
<tr><td>Cost</td><td>Budget and financial resources</td></tr>
<tr><td>Resources</td><td>People, materials, equipment</td></tr>
<tr><td>Risk</td><td>Threats and opportunities</td></tr>
<tr><td>Quality</td><td>Standards and acceptance criteria</td></tr>
</table>
<div class="key-point"><strong>Planning characteristics:</strong> Progressive elaboration (details increase over time), adaptability (plans adjust), just enough (appropriate detail for context), living documents (plans evolve).</div>
<hr>
<h1>Domain 5: Project Work</h1>
<p><strong>Focus:</strong> Establishing processes and performing project work.</p>
<table><tr><th>Work Type</th><th>Description</th></tr>
<tr><td>New work</td><td>Planned activities and deliverables</td></tr>
<tr><td>Implicit work</td><td>Overhead, supporting tasks, admin</td></tr>
<tr><td>Unplanned work</td><td>Issues, defects, emergent requirements</td></tr>
<tr><td>Rework</td><td>Correcting defects or quality issues</td></tr>
</table>
<hr>
<h1>Domain 6: Delivery</h1>
<p><strong>Focus:</strong> Delivering the intended value and outcomes.</p>
<table><tr><th>Approach</th><th>How Value Is Delivered</th></tr>
<tr><td>Predictive</td><td>Value delivered at the end (big bang)</td></tr>
<tr><td>Agile</td><td>Value delivered incrementally each iteration</td></tr>
<tr><td>Hybrid</td><td>Mix of incremental and end-of-phase delivery</td></tr>
</table>
<div class="key-point"><strong>Key outcome:</strong> Projects contribute to business objectives. Value is delivered throughout the project, not just at the end.</div>
`
},
{
chapter: "Chapter 3: Performance Domains",
title: "Measurement & Uncertainty",
html: `
<h1>Domain 7: Measurement</h1>
<p><strong>Focus:</strong> Assessing project performance and taking appropriate actions.</p>
<table><tr><th>Indicator Type</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Leading</strong></td><td>Predicts future performance</td><td>Team velocity trend, risk exposure</td></tr>
<tr><td><strong>Lagging</strong></td><td>Measures past performance</td><td>Defect count, cost variance</td></tr>
<tr><td><strong>KPIs</strong></td><td>Key performance indicators</td><td>SPI, CPI, customer satisfaction</td></tr>
</table>
<h3>Measurement by Approach</h3>
<table><tr><th>Approach</th><th>Key Metrics</th></tr>
<tr><td>Predictive</td><td>EVM (SV, CV, SPI, CPI, EAC), milestone completion</td></tr>
<tr><td>Agile</td><td>Velocity, burn-down/burn-up, cycle time, lead time</td></tr>
<tr><td>Hybrid</td><td>Combination of both</td></tr>
</table>
<hr>
<h1>Domain 8: Uncertainty</h1>
<p><strong>Focus:</strong> Addressing risk, ambiguity, and unpredictability.</p>
<table><tr><th>Type</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Risk</strong></td><td>Known unknowns — identifiable events</td><td>"The vendor might deliver late"</td></tr>
<tr><td><strong>Ambiguity</strong></td><td>Lack of understanding</td><td>"We're not sure what the customer wants"</td></tr>
<tr><td><strong>Complexity</strong></td><td>Multiple interconnected elements</td><td>"This integrates with 12 other systems"</td></tr>
<tr><td><strong>Volatility</strong></td><td>Rapid or unpredictable change</td><td>"Market conditions shift weekly"</td></tr>
</table>
<h3>How Different Approaches Handle Uncertainty</h3>
<table><tr><th>Approach</th><th>Strategy</th></tr>
<tr><td>Predictive</td><td>Detailed risk planning, contingency reserves, risk register</td></tr>
<tr><td>Agile</td><td>Short iterations, frequent feedback, adaptation</td></tr>
<tr><td>Hybrid</td><td>Risk planning for known areas, agile for uncertain areas</td></tr>
</table>
`
},

// ============================================================
// CHAPTER 4: DELIVERY APPROACHES
// ============================================================
{
chapter: "Chapter 4: Delivery Approaches",
title: "Predictive vs Agile vs Hybrid",
html: `
<h1>The Three Delivery Approaches</h1>
<p>Understanding when to use each approach is critical. ~50% of exam questions involve agile or hybrid scenarios.</p>
<h2>Side-by-Side Comparison</h2>
<table><tr><th>Characteristic</th><th>Predictive</th><th>Agile</th><th>Hybrid</th></tr>
<tr><td>Requirements</td><td>Fixed upfront</td><td>Evolving</td><td>Mix</td></tr>
<tr><td>Planning</td><td>Detailed upfront</td><td>Just-in-time</td><td>Both</td></tr>
<tr><td>Delivery</td><td>End of project</td><td>Each iteration</td><td>Incremental + end-of-phase</td></tr>
<tr><td>Change handling</td><td>Formal change control (CCB)</td><td>Backlog reprioritization</td><td>Both mechanisms</td></tr>
<tr><td>Customer involvement</td><td>Beginning and end</td><td>Continuous</td><td>Varies</td></tr>
<tr><td>Documentation</td><td>Comprehensive</td><td>Lightweight</td><td>Varies</td></tr>
<tr><td>Team structure</td><td>Defined roles, hierarchy</td><td>Self-organizing, cross-functional</td><td>Varies</td></tr>
<tr><td>Best for</td><td>Stable requirements, regulated</td><td>Uncertain requirements, innovation</td><td>Mixed certainty</td></tr>
</table>
<h2>Decision Framework</h2>
<ol>
<li><strong>How well-defined are the requirements?</strong> Well-defined → Predictive. Unclear → Agile. Mix → Hybrid.</li>
<li><strong>How much uncertainty exists?</strong> Low → Predictive. High → Agile. Moderate → Hybrid.</li>
<li><strong>How involved can the customer be?</strong> Limited → Predictive. Highly available → Agile.</li>
<li><strong>What does the organization support?</strong> Traditional → Predictive. Agile-mature → Agile. Transitioning → Hybrid.</li>
<li><strong>Regulatory requirements?</strong> Heavy documentation → Predictive or Hybrid.</li>
</ol>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>PMI does NOT favor one approach over another. The "right" answer depends on the scenario context. The answer "tailor the approach to the project context" is almost always strong.</div>
`
},
{
chapter: "Chapter 4: Delivery Approaches",
title: "Predictive (Waterfall)",
html: `
<h1>Predictive (Waterfall) Approach</h1>
<p>A sequential approach where the project progresses through distinct phases. Scope, schedule, and cost are determined early and changes are managed through formal change control.</p>
<h2>Project Life Cycle Phases</h2>
<ol>
<li><strong>Initiating</strong> — Define the project, get authorization (project charter)</li>
<li><strong>Planning</strong> — Define scope, schedule, cost, quality, risk, procurement</li>
<li><strong>Executing</strong> — Perform the work, manage the team</li>
<li><strong>Monitoring & Controlling</strong> — Track performance, manage changes</li>
<li><strong>Closing</strong> — Formal acceptance, lessons learned, release resources</li>
</ol>
<h2>Key Artifacts</h2>
<table><tr><th>Artifact</th><th>Purpose</th></tr>
<tr><td>Project Charter</td><td>Authorizes the project and the PM</td></tr>
<tr><td>Project Management Plan</td><td>Master plan with all subsidiary plans</td></tr>
<tr><td>Scope Baseline</td><td>Scope statement + WBS + WBS dictionary</td></tr>
<tr><td>Schedule Baseline</td><td>Approved project schedule</td></tr>
<tr><td>Cost Baseline</td><td>Approved time-phased budget</td></tr>
<tr><td>Risk Register</td><td>Log of identified risks and responses</td></tr>
<tr><td>Change Log</td><td>Record of all change requests and status</td></tr>
<tr><td>Lessons Learned Register</td><td>Captured knowledge for future projects</td></tr>
</table>
<h2>Change Control Process</h2>
<ol>
<li>Change is identified</li>
<li>Change request is submitted</li>
<li>Impact analysis is performed (scope, schedule, cost, quality, risk)</li>
<li>Change Control Board (CCB) reviews and approves/rejects</li>
<li>If approved: update project management plan and baselines</li>
<li>If rejected: document the decision and communicate</li>
</ol>
<div class="key-point"><strong>Exam tip:</strong> PMI NEVER wants you to skip this process. Even if the change seems small, the answer is always "follow the change control process."</div>
`
},
{
chapter: "Chapter 4: Delivery Approaches",
title: "Agile Essentials",
html: `
<h1>Agile Approach</h1>
<h2>The Agile Manifesto — 4 Values</h2>
<ol>
<li><strong>Individuals and interactions</strong> over processes and tools</li>
<li><strong>Working software</strong> over comprehensive documentation</li>
<li><strong>Customer collaboration</strong> over contract negotiation</li>
<li><strong>Responding to change</strong> over following a plan</li>
</ol>
<p><em>The items on the right still have value — but the items on the left are valued MORE.</em></p>
<h2>12 Agile Principles (Summarized)</h2>
<ol>
<li>Satisfy the customer through early and continuous delivery</li>
<li>Welcome changing requirements, even late in development</li>
<li>Deliver working product frequently (prefer shorter timescales)</li>
<li>Business people and developers work together daily</li>
<li>Build projects around motivated individuals; give them trust</li>
<li>Face-to-face conversation is the most effective communication</li>
<li>Working product is the primary measure of progress</li>
<li>Maintain a sustainable pace</li>
<li>Continuous attention to technical excellence</li>
<li>Simplicity — maximize the amount of work NOT done</li>
<li>Self-organizing teams produce the best results</li>
<li>Regularly reflect and adjust (retrospectives)</li>
</ol>
<h2>Key Agile Concepts</h2>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td>User Story</td><td>"As a [role], I want [feature] so that [benefit]"</td></tr>
<tr><td>INVEST</td><td>Independent, Negotiable, Valuable, Estimable, Small, Testable</td></tr>
<tr><td>Story Points</td><td>Relative sizing of effort/complexity</td></tr>
<tr><td>Velocity</td><td>Average story points completed per sprint</td></tr>
<tr><td>Definition of Done</td><td>Team agreement on what "complete" means</td></tr>
<tr><td>MVP</td><td>Minimum Viable Product — smallest thing that delivers value</td></tr>
<tr><td>Spike</td><td>Time-boxed research to reduce uncertainty</td></tr>
</table>
`
},
{
chapter: "Chapter 4: Delivery Approaches",
title: "Scrum Framework",
html: `
<h1>Scrum Framework</h1>
<p>Scrum is the most tested agile framework on the PMP exam. Know it thoroughly.</p>
<h2>Scrum Roles</h2>
<table><tr><th>Role</th><th>Responsibility</th></tr>
<tr><td><strong>Product Owner</strong></td><td>Owns the product backlog, prioritizes by value, represents stakeholders</td></tr>
<tr><td><strong>Scrum Master</strong></td><td>Servant leader, removes impediments, facilitates Scrum events, coaches the team</td></tr>
<tr><td><strong>Development Team</strong></td><td>Self-organizing, cross-functional, delivers the increment</td></tr>
</table>
<h2>Scrum Events</h2>
<table><tr><th>Event</th><th>Purpose</th><th>Timebox</th></tr>
<tr><td><strong>Sprint</strong></td><td>Fixed iteration for delivering an increment</td><td>1-4 weeks (typically 2)</td></tr>
<tr><td><strong>Sprint Planning</strong></td><td>Define sprint goal, select backlog items</td><td>2-4 hours (2-week sprint)</td></tr>
<tr><td><strong>Daily Standup</strong></td><td>Synchronize, identify impediments</td><td>15 minutes</td></tr>
<tr><td><strong>Sprint Review</strong></td><td>Demo increment to stakeholders, gather feedback</td><td>1-2 hours</td></tr>
<tr><td><strong>Sprint Retrospective</strong></td><td>Team reflects on process, identifies improvements</td><td>1-1.5 hours</td></tr>
<tr><td><strong>Backlog Refinement</strong></td><td>Clarify and estimate upcoming items</td><td>~10% of sprint capacity</td></tr>
</table>
<h2>Scrum Artifacts</h2>
<table><tr><th>Artifact</th><th>Description</th></tr>
<tr><td><strong>Product Backlog</strong></td><td>Ordered list of everything needed (owned by PO)</td></tr>
<tr><td><strong>Sprint Backlog</strong></td><td>Items selected for current sprint + plan to deliver</td></tr>
<tr><td><strong>Increment</strong></td><td>Sum of all completed items — must meet Definition of Done</td></tr>
</table>
<h2>Three Pillars of Scrum</h2>
<ol>
<li><strong>Transparency</strong> — All aspects of the process are visible</li>
<li><strong>Inspection</strong> — Regular checks on progress and artifacts</li>
<li><strong>Adaptation</strong> — Adjust based on what inspection reveals</li>
</ol>
<h2>Kanban (Quick Reference)</h2>
<ul>
<li>Visualize the workflow on a board</li>
<li><strong>Limit Work in Progress (WIP)</strong> — the key differentiator from Scrum</li>
<li>Manage flow — optimize throughput</li>
<li>Make policies explicit</li>
<li>Implement feedback loops</li>
<li>Improve collaboratively</li>
</ul>
<h2>Agile Metrics</h2>
<table><tr><th>Metric</th><th>What It Measures</th></tr>
<tr><td>Velocity</td><td>Story points completed per sprint (forecasting)</td></tr>
<tr><td>Burn-down Chart</td><td>Work remaining vs time in a sprint</td></tr>
<tr><td>Burn-up Chart</td><td>Work completed vs total scope (shows scope changes)</td></tr>
<tr><td>Cycle Time</td><td>Time from work started to work completed</td></tr>
<tr><td>Lead Time</td><td>Time from request to delivery</td></tr>
<tr><td>Cumulative Flow Diagram</td><td>WIP and flow over time (Kanban)</td></tr>
</table>
`
},

// ============================================================
// CHAPTER 5: THE PMI MINDSET
// ============================================================
{
chapter: "Chapter 5: The PMI Mindset",
title: "The Golden Rules",
html: `
<h1>The PMI Mindset</h1>
<p>This is arguably the most important chapter. The PMP exam tests what PMI says you <strong>SHOULD</strong> do, which sometimes differs from real-world practice.</p>
<div class="callout"><div class="callout-title">🏆 The Golden Rule</div><strong>Always ask: "What would PMI want me to do?"</strong><br>Not what you would do in real life. Not what's fastest. What does PMI's framework say is the RIGHT thing to do?</div>
<h2>Rule 1: Servant Leadership Is the Default</h2>
<table><tr><th>Instead of...</th><th>PMI wants you to...</th></tr>
<tr><td>Tell the team what to do</td><td>Facilitate a team discussion</td></tr>
<tr><td>Make decisions for the team</td><td>Empower the team to decide</td></tr>
<tr><td>Solve problems yourself</td><td>Coach the team to find solutions</td></tr>
<tr><td>Direct work assignments</td><td>Let the team self-organize</td></tr>
</table>
<h2>Rule 2: Always Follow the Process</h2>
<p><strong>The Change Control Mantra:</strong></p>
<ol>
<li>A change is identified</li>
<li>Assess the impact (scope, schedule, cost, quality, risk)</li>
<li>Submit a change request</li>
<li>The CCB reviews and decides</li>
<li>Update plans if approved</li>
<li>Communicate the decision</li>
</ol>
<div class="key-point">The answer is almost NEVER "make the change immediately." It's always "assess the impact" or "submit a change request."</div>
<h2>Rule 3: Assess Before Acting</h2>
<p>When a problem arises, PMI wants you to <strong>understand it before you fix it</strong>.</p>
<ol>
<li>Identify/recognize the problem</li>
<li>Gather information and analyze</li>
<li>Determine root cause</li>
<li>Evaluate options</li>
<li>Take action</li>
<li>Monitor results</li>
</ol>
`
},
{
chapter: "Chapter 5: The PMI Mindset",
title: "More Rules & Exam Traps",
html: `
<h1>PMI Mindset Rules (Continued)</h1>
<h2>Rule 4: Never Gold Plate</h2>
<p>Gold plating = adding extra features NOT requested by the customer. PMI says <strong>NEVER</strong> do this, even if you think it would be beneficial. It introduces risk and consumes resources without authorization.</p>
<h2>Rule 5: Communicate Proactively</h2>
<table><tr><th>Instead of...</th><th>PMI wants you to...</th></tr>
<tr><td>Hide bad news</td><td>Report status honestly and early</td></tr>
<tr><td>Wait for stakeholders to ask</td><td>Proactively share information</td></tr>
<tr><td>Use one method for all</td><td>Tailor communication to each stakeholder</td></tr>
</table>
<h2>Rule 6: Engage Stakeholders Continuously</h2>
<p>Stakeholder engagement is not a one-time activity. It's continuous throughout the entire project lifecycle.</p>
<h2>Rule 7: Ethics First, Always</h2>
<p><strong>PMI Code of Ethics — Four Values:</strong> Responsibility, Respect, Fairness, Honesty</p>
<table><tr><th>Scenario</th><th>PMI's Expected Response</th></tr>
<tr><td>Team member falsified test results</td><td>Report immediately</td></tr>
<tr><td>Vendor offers a gift to influence a decision</td><td>Decline and report</td></tr>
<tr><td>Project can't meet its deadline</td><td>Inform the sponsor immediately</td></tr>
<tr><td>Stakeholder asks you to hide a cost overrun</td><td>Refuse and report transparently</td></tr>
</table>
<h2>Rule 8: The Project Charter Is Sacred</h2>
<p>The charter formally authorizes the project and the PM. No charter = no project = no PM authority. Issued by the sponsor, not the PM.</p>
<h2>Rule 9: Risk Management Is Proactive</h2>
<p>Identify and plan for risks BEFORE they become issues. Risk = potential future event. Issue = current problem.</p>
<h2>Rule 10: Document Everything</h2>
<p>Lessons learned, risk registers, issue logs, change logs — documentation is always part of the correct answer.</p>
<hr>
<h2>Common Exam Traps</h2>
<table><tr><th>Trap</th><th>How to Avoid</th></tr>
<tr><td><strong>The "Real World" Answer</strong></td><td>Choose the PMI answer, not the practical one</td></tr>
<tr><td><strong>The "Immediate Action" Answer</strong></td><td>Assess first, then act</td></tr>
<tr><td><strong>The "Authority" Answer</strong></td><td>Facilitate and collaborate, don't command</td></tr>
<tr><td><strong>The "Skip the Process" Answer</strong></td><td>Always follow formal processes</td></tr>
<tr><td><strong>Multiple "correct" answers</strong></td><td>Pick the MOST correct — usually assesses first, communicates, follows process, uses servant leadership</td></tr>
</table>
`
},
{
chapter: "Chapter 5: The PMI Mindset",
title: "Mindset Decision Tree",
html: `
<h1>The PMI Mindset Decision Tree</h1>
<p>When you encounter a scenario question, run through this mental checklist:</p>
<div class="callout"><div class="callout-title">🧠 Decision Tree</div>
<p><strong>Step 1:</strong> Is there an ethical issue?<br>→ YES: Choose the ethical path (report, disclose, refuse)<br>→ NO: Continue</p>
<p><strong>Step 2:</strong> Is there a process to follow?<br>→ YES: Follow the process (change control, risk management, etc.)<br>→ NO: Continue</p>
<p><strong>Step 3:</strong> Does the situation require assessment first?<br>→ YES: Assess/analyze before taking action<br>→ NO: Continue</p>
<p><strong>Step 4:</strong> Does the situation involve the team?<br>→ YES: Facilitate, collaborate, empower (servant leadership)<br>→ NO: Continue</p>
<p><strong>Step 5:</strong> Does the situation involve stakeholders?<br>→ YES: Communicate, engage, manage expectations<br>→ NO: Continue</p>
<p><strong>Step 6:</strong> Among remaining options, which delivers the most value?<br>→ Choose that one</p>
</div>
<h2>Practice Scenarios</h2>
<table><tr><th>Scenario</th><th>What PMI Wants</th></tr>
<tr><td>Stakeholder requests a scope change</td><td>Assess impact → submit change request → CCB review</td></tr>
<tr><td>Two team members in conflict</td><td>Facilitate a collaborative discussion (win-win)</td></tr>
<tr><td>Project is 10% over budget</td><td>Analyze the cause → inform the sponsor → evaluate options</td></tr>
<tr><td>Team member underperforming</td><td>Private conversation → understand root cause → provide coaching</td></tr>
<tr><td>Customer asks for free extra feature</td><td>Submit a change request → assess impact</td></tr>
<tr><td>A risk you identified has occurred</td><td>Implement planned risk response → update issue log</td></tr>
<tr><td>Vendor offers sporting event tickets</td><td>Decline (or check policy) → disclose if required</td></tr>
<tr><td>Sponsor wants to skip testing</td><td>Explain risks → recommend against → document decision</td></tr>
</table>
`
},

// ============================================================
// CHAPTER 6: WEEK 1 REVIEW
// ============================================================
{
chapter: "Chapter 6: Week 1 Review",
title: "Quick Reference Card",
html: `
<h1>Week 1 Quick Reference Card</h1>
<h2>The 12 Principles</h2>
<table><tr><th>#</th><th>Principle</th><th>One-Liner</th></tr>
<tr><td>1</td><td>Stewardship</td><td>Be a responsible, ethical custodian</td></tr>
<tr><td>2</td><td>Team</td><td>Build collaborative, trusting teams</td></tr>
<tr><td>3</td><td>Stakeholders</td><td>Engage early, often, effectively</td></tr>
<tr><td>4</td><td>Value</td><td>Outcomes over outputs</td></tr>
<tr><td>5</td><td>Systems Thinking</td><td>Consider broader impact</td></tr>
<tr><td>6</td><td>Leadership</td><td>Serve, inspire, influence</td></tr>
<tr><td>7</td><td>Tailoring</td><td>Adapt to context</td></tr>
<tr><td>8</td><td>Quality</td><td>Prevent, don't just inspect</td></tr>
<tr><td>9</td><td>Complexity</td><td>Navigate proactively</td></tr>
<tr><td>10</td><td>Risk</td><td>Manage threats AND opportunities</td></tr>
<tr><td>11</td><td>Adaptability</td><td>Be flexible, bounce back</td></tr>
<tr><td>12</td><td>Change</td><td>Enable transformation</td></tr>
</table>
<h2>Key Distinctions</h2>
<table><tr><th>A</th><th>vs</th><th>B</th><th>Difference</th></tr>
<tr><td>3 Exam Domains</td><td>vs</td><td>8 Performance Domains</td><td>Exam structure vs PMBOK 7 framework</td></tr>
<tr><td>Risk</td><td>vs</td><td>Issue</td><td>Potential future event vs current problem</td></tr>
<tr><td>QA</td><td>vs</td><td>QC</td><td>Process audits vs deliverable inspection</td></tr>
<tr><td>Leading indicator</td><td>vs</td><td>Lagging indicator</td><td>Predicts future vs measures past</td></tr>
<tr><td>Crashing</td><td>vs</td><td>Fast-tracking</td><td>Add resources (cost↑) vs parallel work (risk↑)</td></tr>
<tr><td>Gold plating</td><td>vs</td><td>Scope creep</td><td>Team adds unrequested features vs unauthorized scope growth</td></tr>
<tr><td>Sprint Review</td><td>vs</td><td>Retrospective</td><td>Demo to stakeholders vs team process improvement</td></tr>
</table>
<h2>PMI Code of Ethics</h2>
<p><strong>Responsibility</strong> · <strong>Respect</strong> · <strong>Fairness</strong> · <strong>Honesty</strong></p>
<h2>Formula Preview</h2>
<table><tr><th>Formula</th><th>Expression</th></tr>
<tr><td>Communication Channels</td><td>n(n-1) / 2</td></tr>
<tr><td>CPI</td><td>EV / AC</td></tr>
<tr><td>SPI</td><td>EV / PV</td></tr>
<tr><td>EAC (typical)</td><td>BAC / CPI</td></tr>
<tr><td>PERT</td><td>(O + 4M + P) / 6</td></tr>
</table>
<div class="callout"><div class="callout-title">✅ Week 1 Complete</div>You now have the foundation. Take the diagnostic quiz (in the quiz app) to identify your baseline, then move to Week 2: People Domain deep dive.</div>
`
},

// ============================================================
// CHAPTER 7: PEOPLE DOMAIN DEEP DIVE (42% of Exam)
// ============================================================
{
chapter: "Chapter 7: People Domain",
title: "Managing Conflict",
html: `
<h1>Managing Conflict</h1>
<p>Conflict is natural and, when managed well, can lead to better outcomes. PMI views conflict as potentially constructive — it surfaces issues, drives innovation, and strengthens team dynamics when handled through collaboration.</p>
<h2>Sources of Conflict (Ranked by Frequency)</h2>
<ol>
<li><strong>Schedules</strong> — Disagreements about timelines and deadlines</li>
<li><strong>Priorities</strong> — Competing views on what matters most</li>
<li><strong>Resources</strong> — Competition for people, budget, or equipment</li>
<li><strong>Technical opinions</strong> — Disagreements on approach or design</li>
<li><strong>Administrative procedures</strong> — Process and policy disputes</li>
<li><strong>Cost</strong> — Budget allocation disagreements</li>
<li><strong>Personality</strong> — Interpersonal friction (least common, hardest to resolve)</li>
</ol>
<h2>The Five Conflict Resolution Techniques</h2>
<table><tr><th>Technique</th><th>Also Called</th><th>Description</th><th>When to Use</th><th>Outcome</th></tr>
<tr><td><strong>Collaborate / Problem Solve</strong></td><td>Confronting</td><td>Work together to find a win-win solution that addresses everyone's concerns</td><td>When the relationship and the issue both matter; when there's time to explore</td><td>Win-Win ✅</td></tr>
<tr><td><strong>Compromise / Reconcile</strong></td><td>—</td><td>Each party gives up something to reach a mutually acceptable solution</td><td>When both parties have equal power; when a temporary settlement is needed</td><td>Lose-Lose (partial)</td></tr>
<tr><td><strong>Smooth / Accommodate</strong></td><td>—</td><td>Emphasize areas of agreement, de-emphasize differences</td><td>When preserving the relationship is more important than the issue</td><td>Lose-Win</td></tr>
<tr><td><strong>Force / Direct</strong></td><td>Competing</td><td>Push one viewpoint at the expense of others</td><td>Emergencies only; when a quick decision is critical</td><td>Win-Lose</td></tr>
<tr><td><strong>Withdraw / Avoid</strong></td><td>—</td><td>Retreat from the conflict; postpone the issue</td><td>When the issue is trivial; when emotions need to cool down first</td><td>Lose-Lose</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>PMI almost always prefers <strong>Collaborate/Problem Solve</strong>. If you see it as an option, it's usually the answer unless the scenario specifically describes an emergency (Force) or a trivial issue (Withdraw). Compromise is a common distractor — it sounds reasonable but PMI considers it a partial loss for both sides.</div>
<h2>Conflict Resolution in Agile</h2>
<p>In agile environments, the team is expected to resolve conflicts themselves first. The Scrum Master facilitates but does not impose solutions. Escalation to the PM or management happens only when the team cannot resolve it internally.</p>
<div class="key-point"><strong>PMBOK 7 alignment:</strong> This maps to Principle 2 (Team) — creating a collaborative environment where conflicts are addressed constructively, and Principle 6 (Leadership) — facilitating rather than directing.</div>
`
},
{
chapter: "Chapter 7: People Domain",
title: "Leadership & Team Building",
html: `
<h1>Leading a Team</h1>
<p>The PM's role is to set a clear vision, support diversity, and determine the appropriate leadership style for the situation. PMI emphasizes that effective leaders adapt their style to the team's needs and maturity.</p>
<h2>Situational Leadership (Hersey & Blanchard)</h2>
<p>The right leadership style depends on the team's competence and commitment level:</p>
<table><tr><th>Team Maturity</th><th>Style</th><th>PM Behavior</th></tr>
<tr><td>Low competence, high commitment (new team)</td><td><strong>Directing</strong> (S1)</td><td>High task, low relationship — tell them what to do</td></tr>
<tr><td>Some competence, low commitment</td><td><strong>Coaching</strong> (S2)</td><td>High task, high relationship — explain and persuade</td></tr>
<tr><td>High competence, variable commitment</td><td><strong>Supporting</strong> (S3)</td><td>Low task, high relationship — facilitate and encourage</td></tr>
<tr><td>High competence, high commitment</td><td><strong>Delegating</strong> (S4)</td><td>Low task, low relationship — hand off and trust</td></tr>
</table>
<h2>Power Types</h2>
<p>Project managers often lack formal authority. Understanding power types helps you influence effectively:</p>
<table><tr><th>Power Type</th><th>Source</th><th>Example</th><th>Effectiveness</th></tr>
<tr><td><strong>Expert</strong></td><td>Knowledge and skills</td><td>"I've done this before and here's what works"</td><td>High ✅</td></tr>
<tr><td><strong>Referent</strong></td><td>Personal charisma, respect</td><td>People follow you because they admire you</td><td>High ✅</td></tr>
<tr><td><strong>Legitimate</strong></td><td>Formal position/title</td><td>"I'm the PM, so..."</td><td>Medium</td></tr>
<tr><td><strong>Reward</strong></td><td>Ability to give rewards</td><td>Bonuses, recognition, good assignments</td><td>Medium</td></tr>
<tr><td><strong>Coercive</strong></td><td>Ability to punish</td><td>Threats, negative consequences</td><td>Low ❌</td></tr>
</table>
<div class="key-point"><strong>PMI prefers Expert and Referent power.</strong> These are earned through competence and relationships, not imposed through authority. Coercive power is almost never the right answer on the exam.</div>
<h2>Building a Team</h2>
<h3>Tuckman's Model (Revisited with PM Actions)</h3>
<table><tr><th>Stage</th><th>Team Behavior</th><th>PM Action</th></tr>
<tr><td><strong>Forming</strong></td><td>Polite, cautious, dependent on leader</td><td>Orient the team, clarify goals and roles, establish ground rules</td></tr>
<tr><td><strong>Storming</strong></td><td>Conflict, resistance, frustration</td><td>Facilitate conflict resolution, coach, remain patient</td></tr>
<tr><td><strong>Norming</strong></td><td>Cohesion, trust, established norms</td><td>Support the team, encourage collaboration, step back</td></tr>
<tr><td><strong>Performing</strong></td><td>High productivity, self-managing</td><td>Delegate, remove impediments, celebrate wins</td></tr>
<tr><td><strong>Adjourning</strong></td><td>Disbanding, possible sadness</td><td>Recognize contributions, capture lessons learned, transition</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>If a question describes a team that's arguing and struggling with roles, they're in <strong>Storming</strong>. The PM should facilitate and coach — NOT punish, reorganize, or escalate.</div>
`
},
{
chapter: "Chapter 7: People Domain",
title: "Motivation Theories",
html: `
<h1>Motivation Theories</h1>
<p>The PMP exam tests your knowledge of several motivation theories. You need to know the key idea of each and how it applies to managing project teams.</p>
<h2>Maslow's Hierarchy of Needs</h2>
<p>People must satisfy lower-level needs before higher-level needs become motivating:</p>
<table><tr><th>Level</th><th>Need</th><th>Project Example</th></tr>
<tr><td>5 (highest)</td><td><strong>Self-Actualization</strong></td><td>Challenging work, creativity, growth opportunities</td></tr>
<tr><td>4</td><td><strong>Esteem</strong></td><td>Recognition, respect, achievement, responsibility</td></tr>
<tr><td>3</td><td><strong>Social / Belonging</strong></td><td>Team camaraderie, inclusion, collaboration</td></tr>
<tr><td>2</td><td><strong>Safety</strong></td><td>Job security, safe working conditions, stable project</td></tr>
<tr><td>1 (lowest)</td><td><strong>Physiological</strong></td><td>Adequate salary, reasonable hours, basic comfort</td></tr>
</table>
<div class="key-point"><strong>Exam application:</strong> A team member worried about layoffs (safety need) won't be motivated by challenging assignments (self-actualization) until their job security concern is addressed.</div>
<h2>Herzberg's Two-Factor Theory (Motivation-Hygiene)</h2>
<table><tr><th>Factor Type</th><th>Examples</th><th>Effect</th></tr>
<tr><td><strong>Hygiene Factors</strong> (prevent dissatisfaction)</td><td>Salary, working conditions, company policies, job security, relationships with peers</td><td>Their absence causes dissatisfaction, but their presence does NOT motivate</td></tr>
<tr><td><strong>Motivators</strong> (create satisfaction)</td><td>Achievement, recognition, the work itself, responsibility, growth, advancement</td><td>Their presence creates motivation and job satisfaction</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Herzberg says: <strong>Paying someone more won't motivate them</strong> — it just prevents dissatisfaction. To truly motivate, give them meaningful work, recognition, and growth opportunities. This is a common exam question.</div>
<h2>McGregor's Theory X and Theory Y</h2>
<table><tr><th>Theory</th><th>Assumption About Workers</th><th>Management Style</th></tr>
<tr><td><strong>Theory X</strong></td><td>People are lazy, avoid work, need to be controlled and directed</td><td>Authoritarian, micromanagement, punishment-based</td></tr>
<tr><td><strong>Theory Y</strong></td><td>People are self-motivated, enjoy work, seek responsibility</td><td>Participative, empowering, trust-based</td></tr>
</table>
<p><strong>PMI aligns with Theory Y.</strong> The exam expects you to treat team members as capable, self-motivated professionals who thrive with empowerment and trust.</p>
<h2>McClelland's Theory of Needs (Acquired Needs)</h2>
<table><tr><th>Need</th><th>Description</th><th>How to Motivate</th></tr>
<tr><td><strong>Achievement (nAch)</strong></td><td>Drive to excel, accomplish, succeed</td><td>Challenging but achievable goals, feedback, recognition</td></tr>
<tr><td><strong>Affiliation (nAff)</strong></td><td>Desire for friendly relationships, belonging</td><td>Team activities, collaborative work, social interaction</td></tr>
<tr><td><strong>Power (nPow)</strong></td><td>Desire to influence and lead others</td><td>Leadership roles, decision-making authority, visibility</td></tr>
</table>
<h2>Vroom's Expectancy Theory</h2>
<p>Motivation = <strong>Expectancy × Instrumentality × Valence</strong></p>
<ul>
<li><strong>Expectancy</strong>: "If I try, can I do it?" (belief in ability)</li>
<li><strong>Instrumentality</strong>: "If I do it, will I be rewarded?" (belief in reward)</li>
<li><strong>Valence</strong>: "Do I value the reward?" (desirability of reward)</li>
</ul>
<p>If any factor is zero, motivation is zero. All three must be present.</p>
`
},
{
chapter: "Chapter 7: People Domain",
title: "Emotional Intelligence & Stakeholders",
html: `
<h1>Emotional Intelligence (EI)</h1>
<p>Emotional intelligence is the ability to recognize, understand, and manage your own emotions and those of others. PMI considers EI a critical competency for project managers.</p>
<h2>Daniel Goleman's Five Components</h2>
<table><tr><th>Component</th><th>Definition</th><th>Project Application</th></tr>
<tr><td><strong>Self-Awareness</strong></td><td>Understanding your own emotions, strengths, weaknesses</td><td>Recognizing when you're frustrated and not letting it affect decisions</td></tr>
<tr><td><strong>Self-Regulation</strong></td><td>Managing your emotional responses</td><td>Staying calm when a stakeholder is angry; not reacting impulsively</td></tr>
<tr><td><strong>Motivation</strong></td><td>Internal drive to achieve beyond expectations</td><td>Maintaining optimism and persistence through project challenges</td></tr>
<tr><td><strong>Empathy</strong></td><td>Understanding others' emotions and perspectives</td><td>Recognizing a team member is struggling before they say so</td></tr>
<tr><td><strong>Social Skills</strong></td><td>Managing relationships and building networks</td><td>Navigating stakeholder politics, building consensus, resolving conflict</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>When a question describes a PM who needs to handle a difficult interpersonal situation, the answer that demonstrates empathy, self-regulation, and social skills is correct. PMI wants emotionally intelligent leaders, not reactive ones.</div>
<hr>
<h1>Collaborating with Stakeholders</h1>
<p>Stakeholder management is woven throughout the entire exam. The PM must continuously identify, analyze, engage, and manage stakeholder expectations.</p>
<h2>Stakeholder Engagement Process</h2>
<ol>
<li><strong>Identify</strong> — Who are the stakeholders? (continuous, not one-time)</li>
<li><strong>Analyze</strong> — What are their interests, influence, expectations, impact?</li>
<li><strong>Plan</strong> — How will you engage each stakeholder?</li>
<li><strong>Engage</strong> — Execute the engagement strategy</li>
<li><strong>Monitor</strong> — Are engagement strategies working? Adjust as needed.</li>
</ol>
<h2>Stakeholder Classification Models</h2>
<table><tr><th>Model</th><th>Axes</th><th>Strategy</th></tr>
<tr><td><strong>Power/Interest Grid</strong></td><td>Power (high/low) × Interest (high/low)</td><td>High power + high interest = Manage closely<br>High power + low interest = Keep satisfied<br>Low power + high interest = Keep informed<br>Low power + low interest = Monitor</td></tr>
<tr><td><strong>Salience Model</strong></td><td>Power, Urgency, Legitimacy</td><td>Stakeholders with all three attributes get highest priority</td></tr>
<tr><td><strong>Influence/Impact Grid</strong></td><td>Influence × Impact</td><td>Focus on high-influence, high-impact stakeholders</td></tr>
</table>
<h2>Dealing with Resistant Stakeholders</h2>
<ol>
<li>Understand the root cause of resistance (fear, loss of control, lack of information)</li>
<li>Listen actively and empathetically</li>
<li>Address concerns directly and transparently</li>
<li>Involve them in decision-making where appropriate</li>
<li>Communicate benefits and value from their perspective</li>
<li>Build trust through consistent follow-through</li>
</ol>
<div class="key-point"><strong>PMI's stance:</strong> Never ignore resistant stakeholders. Engage them, understand their concerns, and work to move them toward support. Avoidance is never the right answer.</div>
`
},
{
chapter: "Chapter 7: People Domain",
title: "Virtual Teams & Ground Rules",
html: `
<h1>Engaging Virtual Teams</h1>
<p>Virtual and distributed teams are increasingly common. The PMP exam tests your ability to lead teams that may never meet face-to-face.</p>
<h2>Virtual Team Challenges</h2>
<table><tr><th>Challenge</th><th>Mitigation Strategy</th></tr>
<tr><td>Time zone differences</td><td>Rotate meeting times; use asynchronous communication; record meetings</td></tr>
<tr><td>Cultural differences</td><td>Cultural awareness training; respect local customs; avoid idioms</td></tr>
<tr><td>Communication barriers</td><td>Over-communicate; use video when possible; establish communication norms</td></tr>
<tr><td>Isolation and disengagement</td><td>Regular check-ins; virtual social events; recognize contributions publicly</td></tr>
<tr><td>Trust building</td><td>Face-to-face kickoff if possible; consistent follow-through; transparency</td></tr>
<tr><td>Technology issues</td><td>Standardize tools; provide training; have backup communication channels</td></tr>
</table>
<h2>Best Practices for Virtual Teams</h2>
<ul>
<li>Establish a team charter with communication norms early</li>
<li>Use video calls over audio-only when possible (builds connection)</li>
<li>Create shared digital workspaces (wikis, boards, shared drives)</li>
<li>Schedule regular one-on-ones, not just group meetings</li>
<li>Be mindful of "meeting fatigue" — not everything needs a meeting</li>
<li>Celebrate milestones and achievements visibly</li>
</ul>
<hr>
<h1>Defining Team Ground Rules</h1>
<p>Ground rules (also called working agreements or team norms) establish expected behaviors and processes for the team.</p>
<h2>What Ground Rules Should Cover</h2>
<ul>
<li>Communication expectations (response times, preferred channels)</li>
<li>Meeting norms (punctuality, cameras on/off, agenda required)</li>
<li>Decision-making process (consensus, majority, PM decides)</li>
<li>Conflict resolution approach (address directly, escalation path)</li>
<li>Work hours and availability expectations</li>
<li>Definition of Done (in agile teams)</li>
<li>Code of conduct and respect norms</li>
</ul>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Ground rules should be created <strong>by the team</strong>, not imposed by the PM. The PM facilitates the discussion, but the team owns the rules. This aligns with servant leadership and self-organizing team principles.</div>
<h2>Enforcing Ground Rules</h2>
<p>When a team member violates ground rules:</p>
<ol>
<li>Address it privately first (not publicly)</li>
<li>Refer back to the agreed-upon rules</li>
<li>Understand the root cause (was the rule unclear? personal issue?)</li>
<li>If persistent, involve the team in revisiting the rules</li>
<li>Escalate to management only as a last resort</li>
</ol>
`
},

// ============================================================
// CHAPTER 8: PROCESS DOMAIN DEEP DIVE (50% of Exam)
// ============================================================
{
chapter: "Chapter 8: Process Domain",
title: "Integration Management",
html: `
<h1>Integration Management</h1>
<p>Integration management is the "glue" that holds all other knowledge areas together. It's about making trade-offs, coordinating activities, and ensuring the project works as a unified whole.</p>
<h2>Key Integration Processes</h2>
<table><tr><th>Process</th><th>Purpose</th><th>Key Output</th></tr>
<tr><td><strong>Develop Project Charter</strong></td><td>Formally authorize the project and the PM</td><td>Project Charter</td></tr>
<tr><td><strong>Develop Project Management Plan</strong></td><td>Define, prepare, and coordinate all subsidiary plans</td><td>Project Management Plan</td></tr>
<tr><td><strong>Direct and Manage Project Work</strong></td><td>Lead and perform the work defined in the plan</td><td>Deliverables, work performance data</td></tr>
<tr><td><strong>Manage Project Knowledge</strong></td><td>Use existing knowledge and create new knowledge</td><td>Lessons learned register</td></tr>
<tr><td><strong>Monitor and Control Project Work</strong></td><td>Track, review, and report overall progress</td><td>Work performance reports, change requests</td></tr>
<tr><td><strong>Perform Integrated Change Control</strong></td><td>Review all change requests and manage changes</td><td>Approved/rejected change requests</td></tr>
<tr><td><strong>Close Project or Phase</strong></td><td>Finalize all activities and formally close</td><td>Final product, lessons learned, archived documents</td></tr>
</table>
<h2>The Project Charter</h2>
<p>The charter is the most important initiating document. It:</p>
<ul>
<li>Formally authorizes the project</li>
<li>Gives the PM authority to apply organizational resources</li>
<li>Is issued by the <strong>project sponsor</strong> (not the PM)</li>
<li>Contains: high-level scope, objectives, success criteria, milestones, budget summary, key stakeholders, PM authority level</li>
</ul>
<div class="key-point"><strong>No charter = no project = no PM authority.</strong> If a question describes a PM being asked to start work without a charter, the answer is always "get the charter first."</div>
<h2>Integrated Change Control</h2>
<p>This is one of the most tested processes on the exam. ALL changes — scope, schedule, cost, quality — must go through this process.</p>
<ol>
<li>Change is identified (by anyone)</li>
<li>Change request is documented</li>
<li>Impact analysis is performed across ALL areas</li>
<li>CCB reviews and approves/rejects/defers</li>
<li>If approved: update baselines, plans, and documents</li>
<li>Communicate the decision to all affected parties</li>
</ol>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>Even "small" or "beneficial" changes must go through change control. The answer is NEVER "just make the change." It's always "assess the impact and submit a change request."</div>
`
},
{
chapter: "Chapter 8: Process Domain",
title: "Scope Management",
html: `
<h1>Scope Management</h1>
<p>Scope management ensures the project includes all the work required — and only the work required — to complete the project successfully.</p>
<h2>Key Concepts</h2>
<table><tr><th>Concept</th><th>Definition</th></tr>
<tr><td><strong>Product Scope</strong></td><td>Features and functions of the product/deliverable</td></tr>
<tr><td><strong>Project Scope</strong></td><td>The work that must be done to deliver the product</td></tr>
<tr><td><strong>Scope Baseline</strong></td><td>Scope statement + WBS + WBS dictionary (approved, formal)</td></tr>
<tr><td><strong>Scope Creep</strong></td><td>Uncontrolled expansion of scope without adjusting time, cost, or resources</td></tr>
<tr><td><strong>Gold Plating</strong></td><td>Adding unrequested features — PMI says NEVER do this</td></tr>
</table>
<h2>Work Breakdown Structure (WBS)</h2>
<p>The WBS is a hierarchical decomposition of the total scope of work. It breaks the project into manageable components called <strong>work packages</strong> (the lowest level).</p>
<ul>
<li><strong>100% Rule</strong>: The WBS must capture 100% of the project scope — nothing more, nothing less</li>
<li>Work packages are small enough to be estimated, scheduled, and assigned</li>
<li>The WBS is scope-focused (what), not schedule-focused (when)</li>
<li>The WBS dictionary provides detailed descriptions of each element</li>
</ul>
<h2>Requirements Gathering Techniques</h2>
<table><tr><th>Technique</th><th>Description</th></tr>
<tr><td>Interviews</td><td>One-on-one conversations with stakeholders</td></tr>
<tr><td>Focus Groups</td><td>Facilitated group discussions with stakeholders</td></tr>
<tr><td>Workshops</td><td>Cross-functional sessions to define requirements</td></tr>
<tr><td>Questionnaires/Surveys</td><td>Written questions distributed to large groups</td></tr>
<tr><td>Prototyping</td><td>Working models to gather feedback</td></tr>
<tr><td>Benchmarking</td><td>Comparing to similar projects or industry standards</td></tr>
<tr><td>Document Analysis</td><td>Reviewing existing documentation</td></tr>
</table>
<h2>Scope in Agile</h2>
<p>In agile, scope is managed through the <strong>product backlog</strong>:</p>
<ul>
<li>The Product Owner prioritizes the backlog by business value</li>
<li>Scope is refined iteratively through backlog refinement</li>
<li>Changes are welcomed — the backlog is reprioritized, not change-controlled</li>
<li>Each sprint delivers a potentially shippable increment</li>
</ul>
<div class="key-point"><strong>Key distinction:</strong> In predictive, scope changes go through formal change control. In agile, scope changes are managed through backlog reprioritization. The exam tests both approaches.</div>
`
},
]; // end of defined_pages
