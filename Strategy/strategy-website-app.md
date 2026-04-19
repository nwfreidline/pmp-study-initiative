# Strategy: Website & Mobile App

## Vision

A low-cost, high-value PMP study platform that is significantly more accessible and affordable than the current market (Prepcast, PMTraining, etc.). The goal is to democratize PMP prep — make it genuinely good, genuinely affordable, and genuinely better than what's out there.

---

## Market Context

### Current Competitors & Pricing
| Product | Price | Notes |
|---------|-------|-------|
| PMI PMBOK PDF | Free (with $139 membership) | Reference only, not a study tool |
| Prepcast Simulator | ~$139 | Question bank only |
| PMTraining | ~$299–$499 | Full course |
| Udemy courses | $15–$30 (sale) | Variable quality |
| Andrew Ramdayal (TIA) | ~$299 | Highly rated |
| Study Hall (PMI) | ~$179 | Official but dry |

### The Gap
- Most tools are either too expensive or too shallow
- No single free/cheap resource covers everything well
- Mobile experience is generally poor
- Community and gamification are largely absent
- No "just give me what I need" option

### Our Positioning
**"The best PMP study tool under $30"** — comprehensive, mobile-first, community-driven, and built by someone who actually took the exam.

---

## Product Tiers

### Tier 0: Free (Lead Generation)
- Full PDF study guide (downloadable)
- 50-question sample quiz
- Exam overview and study timeline
- No account required

### Tier 1: Basic — $9.99 one-time or $4.99/month
- Full study book (all chapters)
- 500+ question bank
- Domain-filtered practice mode
- Progress tracking
- Mobile-friendly

### Tier 2: Pro — $19.99 one-time or $9.99/month
- Everything in Basic
- Full 180-question timed mock exams
- Performance analytics by domain
- Flashcard mode
- Weak area identification
- Offline access (PWA or app)

### Tier 3: Premium — $29.99 one-time or $14.99/month
- Everything in Pro
- Community access (Discord or forum)
- Study group matching
- Monthly live Q&A sessions
- Personalized study plan generator

---

## Website MVP Feature Set (Phase 1)

### Must Have
- [ ] Study book reader (all chapters, progress tracking)
- [ ] Quiz engine (practice mode, timed mode)
- [ ] User accounts (email/password, Google OAuth)
- [ ] Progress persistence (saved to account, not just localStorage)
- [ ] Mobile-responsive design
- [ ] Payment processing (Stripe)
- [ ] Free tier with upgrade prompts

### Nice to Have (Phase 2)
- [ ] Flashcard mode
- [ ] Performance dashboard (by domain, over time)
- [ ] Bookmarking and notes
- [ ] Dark mode
- [ ] Offline mode (PWA)

### Future (Phase 3)
- [ ] Community forum or Discord integration
- [ ] Leaderboards and streaks
- [ ] Study group features
- [ ] AI-powered weak area recommendations
- [ ] Expand to CAPM, PMI-ACP, PgMP

---

## Tech Stack Recommendations

### Option A: Simple & Fast to Market (Recommended for MVP)
| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Next.js (React) | Fast, SEO-friendly, great ecosystem |
| Styling | Tailwind CSS | Rapid UI development |
| Backend | Next.js API routes | No separate server needed |
| Database | Supabase (PostgreSQL) | Free tier, auth built-in, real-time |
| Auth | Supabase Auth | Email, Google, GitHub — free |
| Payments | Stripe | Industry standard, easy integration |
| Hosting | Vercel | Free tier, auto-deploys from GitHub |
| Domain | Namecheap / Cloudflare | ~$10/year |

**Monthly cost at launch:** ~$0–10 (free tiers cover early traffic)
**Monthly cost at scale:** ~$25–50 (Supabase Pro + Vercel Pro)

### Option B: Mobile-First (React Native)
Build a React Native app that works on iOS, Android, and web simultaneously.

**Pros:** One codebase for all platforms
**Cons:** More complex, harder to iterate quickly

**Recommendation:** Start with Option A (web), add React Native later once content and revenue are validated.

---

## Mobile App Strategy

### Phase 1: Progressive Web App (PWA)
Convert the website to a PWA — users can "install" it on their phone home screen, it works offline, and it feels like a native app. Zero app store friction.

**Cost:** Minimal (add service worker and manifest to existing site)
**Timeline:** 1–2 days of work

### Phase 2: React Native App
Once the web product is validated and generating revenue, build a proper native app.

**Platforms:** iOS first (PMP candidates skew professional, iPhone-heavy), then Android
**Distribution:** App Store ($99/year) and Google Play ($25 one-time)
**Monetization:** In-app purchases mirroring web tiers

---

## Go-to-Market Plan

### Phase 1: Build Audience (Months 1–3)
- Publish free PDF on Reddit (r/pmp, r/projectmanagement)
- Post study tips and content on LinkedIn
- Build email list via free PDF download
- Launch GitHub Pages version for free access
- Engage in PMP communities (Reddit, Discord, Facebook groups)

### Phase 2: Launch MVP (Months 3–6)
- Launch website with free + paid tiers
- Announce to email list and Reddit communities
- Offer launch discount (50% off first month)
- Collect testimonials from early users
- Iterate based on feedback

### Phase 3: Scale (Months 6–12)
- SEO content strategy (blog posts targeting PMP search terms)
- YouTube channel (study tips, exam walkthroughs)
- Affiliate partnerships with PMP training providers
- Expand question bank to 1,000+ questions
- Launch mobile app

### Phase 4: Expand (Year 2+)
- Add CAPM, PMI-ACP, PgMP content
- Corporate/team licensing
- Explore PMI partnership or endorsement

---

## Revenue Projections (Conservative)

| Month | Users | Conversion | MRR |
|-------|-------|------------|-----|
| 3 | 500 | 2% | ~$100 |
| 6 | 2,000 | 3% | ~$600 |
| 12 | 5,000 | 5% | ~$2,500 |
| 24 | 15,000 | 5% | ~$7,500 |

*Based on $9.99/month average, conservative conversion rates*

---

## Legal & Compliance Considerations

- [ ] Terms of Service and Privacy Policy (required for payments)
- [ ] GDPR compliance (if targeting EU users)
- [ ] PMI trademark usage — cannot use "PMP" in domain name or imply PMI endorsement
- [ ] Content originality — all content must be original, not copied from PMBOK
- [ ] Stripe account and tax setup (collect sales tax where required)

---

## Domain Name Ideas

*(Cannot include "PMP" per PMI trademark rules)*
- projectprepkit.com
- pmprep.io
- examforge.io
- pmready.io
- certforge.io
- studypm.io

---

## Action Items

- [ ] Validate concept with Reddit post (gauge interest before building)
- [ ] Choose domain name
- [ ] Set up GitHub repository
- [ ] Deploy study book to GitHub Pages (free, immediate)
- [ ] Define MVP feature set and scope
- [ ] Choose tech stack and set up project
- [ ] Build and launch MVP
- [ ] Set up Stripe account
- [ ] Write Terms of Service and Privacy Policy
