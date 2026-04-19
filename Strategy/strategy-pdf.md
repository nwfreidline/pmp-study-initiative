# Strategy: Comprehensive PDF Study Guide

## Vision

A single, downloadable PDF that is the most comprehensive, well-organized, and accessible PMP study guide available for free (or low cost). Shareable on Reddit, LinkedIn, study groups, and forums. The kind of document people bookmark and share.

---

## Why a PDF First

- Zero friction — no app, no account, no subscription
- Works on every device
- Printable
- Shareable via any channel (Reddit, Discord, email, Google Drive)
- Builds credibility and audience before the paid product launches
- Can be updated and re-released as versions (v1.0, v1.1, etc.)
- Establishes the brand before the website/app

---

## Target Audience

- PMP exam candidates (primary)
- Project managers looking to refresh knowledge
- People deciding whether to pursue PMP certification

---

## Proposed PDF Structure

### Front Matter
- Cover page (branded, professional)
- Table of contents (clickable/linked)
- How to use this guide
- About the exam (quick reference card)

### Part 1: Exam Foundation
- Chapter 1: What Is the PMP? (exam overview, format, scoring, eligibility)
- Chapter 2: Study Strategy & Timeline
- Chapter 3: Key Terminology Reference

### Part 2: PMBOK 7 — Principles & Domains
- Chapter 4: The 12 Principles (all 12, with exam tips)
- Chapter 5: The 8 Performance Domains (all 8, with outcomes)

### Part 3: Exam Domain Deep Dives
- Chapter 6: People Domain (42%) — leadership, conflict, teams, stakeholders
- Chapter 7: Process Domain (50%) — planning, execution, monitoring, agile
- Chapter 8: Business Environment Domain (8%) — compliance, benefits, change

### Part 4: Agile & Hybrid
- Chapter 9: Agile Fundamentals (Scrum, Kanban, XP)
- Chapter 10: Hybrid Approaches
- Chapter 11: Agile Leadership & Servant Leadership

### Part 5: Key Processes & Calculations
- Chapter 12: EVM (Earned Value Management) — all formulas
- Chapter 13: Schedule Management (CPM, PERT, crashing, fast-tracking)
- Chapter 14: Risk Management (identification, analysis, response)
- Chapter 15: Procurement & Contracts

### Part 6: Ethics & Professional Conduct
- Chapter 16: PMI Code of Ethics
- Chapter 17: Situational Ethics on the Exam

### Part 7: Practice & Review
- Chapter 18: 200 Practice Questions (with explanations)
- Chapter 19: Quick Reference Cards (formulas, models, frameworks)
- Chapter 20: Final Exam Checklist

### Back Matter
- Glossary of key terms
- Index
- Resources and further reading

---

## Content Sources

- PMBOK Guide 7th Edition (already in workspace)
- PMP Exam Content Outline (already in workspace)
- PMI Certification Handbook (already in workspace)
- Study book content already written (pages.js)
- Quiz questions already written (quiz-data.js)
- Additional content to be written

---

## PDF Generation Approach

### Option A: Markdown → PDF (Recommended)
Write all content in Markdown files, then convert to PDF using a tool like:
- **Pandoc** (free, powerful, supports LaTeX for beautiful output)
- **md-to-pdf** (Node.js, simpler)
- **Typora** (GUI editor with PDF export)

**Pros:** Content is version-controlled, easy to edit, reusable for website
**Cons:** Requires some setup for custom styling

### Option B: HTML → PDF
Use the existing HTML study book as a base and print-to-PDF or use a headless browser (Puppeteer).

**Pros:** Reuses existing work, consistent styling
**Cons:** Web layouts don't always translate well to print

### Option C: Google Docs / Word → PDF
Write in a word processor and export.

**Pros:** Familiar, easy formatting
**Cons:** Hard to version control, not reusable for web

**Recommended:** Option A (Markdown → Pandoc → PDF) for maximum reusability and quality.

---

## Distribution Plan

### Free Distribution (v1.0)
- Reddit: r/pmp, r/projectmanagement, r/PMPExam
- LinkedIn posts and articles
- PMP Facebook groups
- Discord study servers
- Direct link from GitHub Pages

### Paid Distribution (v2.0+)
- Gumroad (pay-what-you-want or fixed price)
- Own website (with email capture)
- Bundle with website subscription

---

## Milestones

| Milestone | Description | Target |
|-----------|-------------|--------|
| v0.1 | Outline finalized, content plan locked | Week 1 |
| v0.5 | All chapters drafted (rough) | Week 4 |
| v0.8 | Full review, formatting, practice questions | Week 6 |
| v1.0 | Final PDF, cover design, published | Week 8 |
| v1.1 | Community feedback incorporated | Week 12 |
| v2.0 | Expanded, polished, monetized version | Month 6 |

---

## Action Items

- [ ] Finalize chapter outline and approve structure
- [ ] Set up Markdown-based content pipeline
- [ ] Convert existing study book content (pages.js) to Markdown
- [ ] Convert existing quiz questions to PDF format
- [ ] Write remaining chapters
- [ ] Design cover page
- [ ] Choose and configure PDF generation tool
- [ ] Create v1.0 and publish
