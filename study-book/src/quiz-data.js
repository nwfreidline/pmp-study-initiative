// PMP Diagnostic Quiz Data
const quizQuestions = [
{q:"A project manager notices two team members disagreeing about the technical approach for a key deliverable. What should the PM do FIRST?",
o:["Tell both team members to follow the approach in the project plan","Escalate the disagreement to the project sponsor","Facilitate a collaborative discussion to understand both perspectives","Assign the decision to the more senior team member"],
a:2,d:"People",
e:"Servant leadership. The PM facilitates resolution, doesn't dictate, escalate prematurely, or defer to seniority. Collaborate/Problem Solve is PMI's preferred conflict resolution technique."},

{q:"A stakeholder requests a change to the project scope. The change would add two weeks to the schedule. What should the PM do FIRST?",
o:["Reject the change because it impacts the schedule","Implement the change since the stakeholder requested it","Assess the impact of the change on scope, schedule, cost, and risk","Ask the team to work overtime to absorb the change"],
a:2,d:"Process",
e:"Always assess before acting. Never reject without analysis, implement without assessment, or impose overtime without understanding impact. Follow the change control process."},

{q:"A project was initiated to develop a new customer portal. Midway through, a competitor launches a similar product. What should the PM do?",
o:["Cancel the project immediately","Ignore the competitor and continue as planned","Assess the impact on the project's business case and inform stakeholders","Fast-track the project to beat the competitor"],
a:2,d:"Business Environment",
e:"External business environment changes require assessment and stakeholder communication. Don't cancel without analysis, ignore changes, or react without assessment."},

{q:"Which leadership style does PMI most strongly advocate for project managers?",
o:["Autocratic","Laissez-faire","Servant leadership","Transactional"],
a:2,d:"People",
e:"PMI's preferred leadership model. The PM serves the team, removes impediments, and facilitates rather than directing."},

{q:"What document formally authorizes a project and gives the PM authority to apply organizational resources?",
o:["Project management plan","Project charter","Statement of work","Business case"],
a:1,d:"Process",
e:"The charter formally authorizes the project and the PM. The project management plan comes after. The SOW and business case are inputs to the charter."},

{q:"How many performance domains are defined in PMBOK 7th Edition?",
o:["5","8","10","12"],
a:1,d:"Process",
e:"PMBOK 7 defines 8 performance domains: Stakeholders, Team, Development Approach & Life Cycle, Planning, Project Work, Delivery, Measurement, Uncertainty."},

{q:"A team is experiencing frequent arguments and power struggles. According to Tuckman's model, which stage is the team in?",
o:["Forming","Storming","Norming","Performing"],
a:1,d:"People",
e:"Storming is characterized by conflicts, power struggles, and disagreements as team members push boundaries."},

{q:"Which of the following is NOT one of the 12 PMBOK 7 principles?",
o:["Stewardship","Tailoring","Earned Value","Systems Thinking"],
a:2,d:"Process",
e:"The 12 principles are: Stewardship, Team, Stakeholders, Value, Systems Thinking, Leadership, Tailoring, Quality, Complexity, Risk, Adaptability & Resilience, Change. Earned Value is a measurement technique."},

{q:"A project manager discovers that a team member has been falsifying test results. What should the PM do?",
o:["Give the team member a warning and monitor future behavior","Ignore it if the deliverable still meets quality standards","Report the issue to appropriate management immediately","Discuss it privately and ask the team member to correct the results"],
a:2,d:"People",
e:"Ethics first. Falsifying test results is a serious ethical violation. PMI's Code of Ethics requires honesty and responsibility."},

{q:"In an agile project, who is responsible for prioritizing the product backlog?",
o:["Scrum Master","Development Team","Product Owner","Project Manager"],
a:2,d:"Process",
e:"In Scrum, the Product Owner owns and prioritizes the product backlog."},

{q:"What is the primary difference between quality assurance and quality control?",
o:["QA is done by management; QC is done by the team","QA focuses on processes; QC focuses on deliverables","QA is done at the end; QC is done throughout","QA is optional; QC is mandatory"],
a:1,d:"Process",
e:"Quality Assurance audits processes to prevent defects. Quality Control inspects deliverables to detect defects."},

{q:"What is the primary purpose of a benefits management plan?",
o:["To track project costs","To define how project benefits will be realized and sustained","To manage team performance","To document project risks"],
a:1,d:"Business Environment",
e:"The benefits management plan documents how and when benefits will be delivered, measured, and sustained."},

{q:"A PM is working with a team that has never worked together before. Members are polite but uncertain about their roles. What should the PM do?",
o:["Let the team figure things out on their own","Provide clear direction, clarify roles, and establish ground rules","Immediately delegate all decisions to the team","Focus on building the project schedule"],
a:1,d:"People",
e:"The team is in the Forming stage. The PM should provide structure, clarify roles, and set expectations."},

{q:"Which of the following best describes 'gold plating'?",
o:["Adding extra features not requested by the customer","Using premium materials for deliverables","Exceeding the project budget","Delivering the project ahead of schedule"],
a:0,d:"Process",
e:"Gold plating is adding unrequested scope. PMI says never do this — it introduces risk and consumes resources without authorization."},

{q:"A project has a BAC of $100,000. After spending $60,000 (AC), the team has completed work worth $50,000 (EV). What is the CPI?",
o:["0.83","1.20","0.50","1.67"],
a:0,d:"Process",
e:"CPI = EV / AC = $50,000 / $60,000 = 0.83. For every dollar spent, only $0.83 of value was earned (over budget)."},

{q:"Which conflict resolution technique does PMI generally prefer?",
o:["Force/Direct","Withdraw/Avoid","Collaborate/Problem Solve","Smooth/Accommodate"],
a:2,d:"People",
e:"PMI prefers collaborative problem-solving (win-win) over all other conflict resolution techniques."},

{q:"In Scrum, what is the purpose of the Sprint Retrospective?",
o:["To demo the increment to stakeholders","To plan the next sprint's work","To reflect on the team's process and identify improvements","To refine the product backlog"],
a:2,d:"Process",
e:"The Retrospective is about the team's process, not the product. Sprint Review demos the product."},

{q:"What is the critical path in a project network diagram?",
o:["The shortest path through the network","The path with the most resources","The longest path, determining minimum project duration","The path with the highest cost"],
a:2,d:"Process",
e:"The critical path is the longest sequence of dependent activities. Activities on it have zero float."},

{q:"A new government regulation will affect your project's deliverables. What should you do FIRST?",
o:["Stop all project work until the regulation is clarified","Assess the impact of the regulation on the project scope and plan","Ignore it — regulations change frequently","Immediately modify the deliverables to comply"],
a:1,d:"Business Environment",
e:"Always assess before acting. Don't stop work, ignore it, or modify without assessment."},

{q:"What are the four values of PMI's Code of Ethics?",
o:["Quality, Scope, Time, Cost","Responsibility, Respect, Fairness, Honesty","Integrity, Transparency, Accountability, Trust","Leadership, Teamwork, Communication, Ethics"],
a:1,d:"People",
e:"These are the four values of PMI's Code of Ethics and Professional Conduct."},

{q:"Which development approach is best suited for a project with well-defined, stable requirements and regulatory documentation needs?",
o:["Agile","Predictive","Hybrid","Kanban"],
a:1,d:"Process",
e:"Stable requirements + regulatory documentation = predictive approach."},

{q:"How many questions are on the PMP exam, and how much time do you have?",
o:["200 questions in 240 minutes","180 questions in 230 minutes","150 questions in 180 minutes","175 questions in 210 minutes"],
a:1,d:"Process",
e:"The PMP exam has 180 questions (175 scored + 5 pretest) with 230 minutes total."},

{q:"A team member comes to you with a problem they're struggling to solve. As a servant leader, what should you do?",
o:["Solve the problem for them to save time","Tell them to figure it out on their own","Coach them through the problem-solving process","Escalate the problem to their functional manager"],
a:2,d:"People",
e:"Servant leadership means developing the team's capabilities through coaching."},

{q:"What is the formula for communication channels?",
o:["n × 2","n(n+1) / 2","n(n-1) / 2","n² / 2"],
a:2,d:"Process",
e:"Where n = number of stakeholders. Example: 10 stakeholders = 10(9)/2 = 45 channels."},

{q:"Which PMBOK 7 principle states that every project is unique and requires adaptation?",
o:["Adaptability and Resilience","Complexity","Tailoring","Systems Thinking"],
a:2,d:"Process",
e:"Tailoring means adapting the approach based on the specific project context."},

{q:"In Kanban, what is the primary mechanism for managing workflow?",
o:["Sprint timeboxes","Limiting Work in Progress (WIP)","Daily standups","Velocity tracking"],
a:1,d:"Process",
e:"WIP limits are the defining mechanism of Kanban. They prevent overloading and optimize flow."},

{q:"A stakeholder who was initially resistant is now actively supporting the project. They moved from which level to which?",
o:["Unaware to Neutral","Resistant to Supportive","Neutral to Leading","Supportive to Leading"],
a:1,d:"People",
e:"The engagement levels are: Unaware → Resistant → Neutral → Supportive → Leading."},

{q:"What is the difference between a risk and an issue?",
o:["Risks are positive; issues are negative","Risks are potential future events; issues are current problems","Risks are managed by the PM; issues are managed by the team","There is no difference"],
a:1,d:"Process",
e:"A risk is uncertain and may or may not occur. An issue has already occurred."},

{q:"Which of the following is NOT one of the 8 PMBOK 7 performance domains?",
o:["Stakeholders","Procurement","Uncertainty","Measurement"],
a:1,d:"Process",
e:"Procurement is a knowledge area from PMBOK 6, not a performance domain in PMBOK 7."},

{q:"Which emotional intelligence component involves managing your own emotional responses?",
o:["Empathy","Social skills","Self-regulation","Motivation"],
a:2,d:"People",
e:"Self-regulation is managing your own emotional responses. Self-awareness is understanding them."},

{q:"Crashing increases ___; fast-tracking increases ___.",
o:["risk; cost","cost; risk","cost; cost","risk; risk"],
a:1,d:"Process",
e:"Crashing adds resources (more cost). Fast-tracking runs activities in parallel (more risk of rework)."},

{q:"What does INVEST stand for in user stories?",
o:["Integrated, Negotiable, Valuable, Estimable, Scalable, Testable","Independent, Negotiable, Valuable, Estimable, Small, Testable","Iterative, Necessary, Viable, Efficient, Simple, Trackable","Independent, Necessary, Valuable, Executable, Small, Timely"],
a:1,d:"Process",
e:"INVEST is the criteria for well-written user stories."},

{q:"Which analysis technique examines Political, Economic, Social, Technological, Legal, and Environmental factors?",
o:["SWOT Analysis","PESTLE Analysis","Root Cause Analysis","Monte Carlo Analysis"],
a:1,d:"Business Environment",
e:"PESTLE examines external macro-environmental factors."},

{q:"According to PMBOK 7, what is the ultimate measure of project success?",
o:["On-time delivery","Budget compliance","Value delivered","Stakeholder satisfaction"],
a:2,d:"Process",
e:"Principle 4 (Value) states that value — outcomes and benefits — is the ultimate measure."},

{q:"A PM needs to influence a decision but has no formal authority. Which approach is most appropriate?",
o:["Escalate to the sponsor to force the decision","Use expert power and relationship-building to influence","Ignore the decision-maker and proceed independently","Document the disagreement and move on"],
a:1,d:"People",
e:"Without formal authority, influence through expertise, credibility, and relationships."},

{q:"Which Scrum event provides an opportunity for stakeholders to inspect the increment?",
o:["Sprint Planning","Daily Standup","Sprint Review","Sprint Retrospective"],
a:2,d:"Process",
e:"The Sprint Review is where stakeholders inspect the increment and provide feedback."},

{q:"A project has 10 stakeholders. How many communication channels exist?",
o:["20","45","55","100"],
a:1,d:"Process",
e:"n(n-1)/2 = 10(9)/2 = 45 communication channels."},

{q:"What is the primary purpose of a Work Breakdown Structure (WBS)?",
o:["To assign resources to tasks","To decompose the project scope into manageable components","To create the project schedule","To estimate project costs"],
a:1,d:"Process",
e:"The WBS breaks down the total scope of work into smaller, manageable pieces."},

{q:"During a sprint retrospective, a team member suggests a process improvement. What should the Scrum Master do?",
o:["Evaluate the suggestion and decide whether to implement it","Facilitate a team discussion about the suggestion","Add it to the product backlog for the PO to prioritize","Reject it if it doesn't align with Scrum guidelines"],
a:1,d:"People",
e:"The Scrum Master facilitates, doesn't decide. Process improvements belong to the team."},

{q:"What correctly describes the relationship between the 3 exam domains and the 8 performance domains?",
o:["They are the same thing with different names","The 3 exam domains structure the exam; the 8 performance domains organize PMBOK 7 activities","The 8 performance domains replaced the 3 exam domains","The 3 exam domains are subsets of the 8 performance domains"],
a:1,d:"Process",
e:"Different frameworks for different purposes."},

{q:"What is a Minimum Viable Product (MVP)?",
o:["The cheapest version of the product","The smallest deliverable that provides value to users","The first draft of the project plan","A prototype that doesn't need to work"],
a:1,d:"Process",
e:"MVP is the minimum product that delivers value to users and enables learning."},

{q:"Which motivation theory distinguishes between hygiene factors and motivators?",
o:["Maslow's Hierarchy of Needs","McGregor's Theory X and Theory Y","Herzberg's Two-Factor Theory","McClelland's Theory of Needs"],
a:2,d:"People",
e:"Herzberg distinguishes hygiene factors (prevent dissatisfaction) from motivators (create satisfaction)."},

{q:"A CPI of 0.85 indicates what?",
o:["The project is 85% complete","The project is under budget","For every dollar spent, only $0.85 of value has been earned","The project is 15% ahead of schedule"],
a:2,d:"Process",
e:"CPI < 1.0 means over budget. You're getting 85 cents of value for every dollar spent."},

{q:"Which PMBOK 7 principle emphasizes that projects exist within larger systems?",
o:["Stewardship","Systems Thinking","Complexity","Change"],
a:1,d:"Process",
e:"Systems Thinking recognizes that projects exist within larger systems and changes can ripple."},

{q:"A PM is working with a highly experienced, self-managing team. Which leadership style is most appropriate?",
o:["Directive","Coaching","Delegating / Laissez-faire","Autocratic"],
a:2,d:"People",
e:"Highly experienced, self-managing teams need minimal direction. Delegate and trust."},

{q:"What are the three pillars of Scrum?",
o:["Roles, Events, Artifacts","Transparency, Inspection, Adaptation","Planning, Execution, Review","Vision, Backlog, Increment"],
a:1,d:"Process",
e:"The three pillars of Scrum are Transparency, Inspection, and Adaptation."},

{q:"A project's deliverables no longer align with organizational strategy. What should the PM do?",
o:["Continue as planned — scope was approved","Cancel the project immediately","Inform the sponsor and reassess the business case","Modify deliverables without informing stakeholders"],
a:2,d:"Business Environment",
e:"If the project no longer aligns with strategy, the business case needs reassessment."},

{q:"Which risk response strategy shifts a threat's impact to a third party?",
o:["Avoid","Mitigate","Transfer","Accept"],
a:2,d:"Process",
e:"Transfer shifts the threat to a third party (e.g., insurance, outsourcing)."},

{q:"What is psychological safety in a project team?",
o:["Physical safety measures in the workplace","An environment where team members feel safe to speak up and admit mistakes","Insurance coverage for team members","A risk management technique"],
a:1,d:"People",
e:"Psychological safety means people can take interpersonal risks without fear of punishment."},

{q:"According to PMI, when should lessons learned be captured?",
o:["Only at the end of the project","Only at phase gates","Throughout the entire project lifecycle","Only when problems occur"],
a:2,d:"Process",
e:"PMI emphasizes continuous lessons learned capture, not just at the end."},

]; // end quizQuestions
