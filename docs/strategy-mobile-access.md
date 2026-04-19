# Strategy: Mobile Access for the Study Book

## The Problem

The study book is split across four files:
- `index.html` — the main study reader
- `quiz.html` — the diagnostic quiz
- `pages.js` — all study content (loaded by index.html)
- `quiz-data.js` — all quiz questions (loaded by quiz.html)

On a phone, you can't open a local HTML file that references external `.js` files — the browser blocks those requests for security reasons. You'd need all four files in the same place, accessible together.

---

## Options (Ranked by Ease)

### Option 1: Self-Contained Single-File HTML ⭐ Recommended for Now
**Effort:** Low | **Cost:** Free | **Timeline:** 1–2 hours

Inline all JavaScript directly into the HTML files, eliminating the dependency on external `.js` files. Each HTML file becomes fully self-contained and can be opened from any device, including a phone, without a server.

**How it works:**
- Move the content of `pages.js` into a `<script>` tag inside `index.html`
- Move the content of `quiz-data.js` into a `<script>` tag inside `quiz.html`
- Result: two standalone `.html` files that work anywhere

**Pros:**
- Works offline, no internet needed
- Can be emailed, shared via AirDrop, saved to Files app on iPhone
- No hosting cost
- Instant — no setup required

**Cons:**
- Files get large as content grows
- Harder to maintain (content and UI in one file)
- Not shareable via link

**Best for:** Personal studying right now, before any hosting is set up.

---

### Option 2: GitHub Pages (Free Hosting) ⭐ Best Next Step
**Effort:** Low-Medium | **Cost:** Free | **Timeline:** 30 minutes to set up

Push the study book to a GitHub repository and enable GitHub Pages. The files are served as a real website with a URL you can open on any device.

**How it works:**
1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Upload the study book files
4. Enable GitHub Pages in repository settings
5. Access via `https://yourusername.github.io/pmp-study/`

**Pros:**
- Free forever for public repos
- Accessible from any device with a URL
- No server management
- Supports custom domains later
- Natural stepping stone to a real website

**Cons:**
- Requires a GitHub account
- Public repo means content is publicly visible (fine for now)
- No backend (no user accounts, no saved progress across devices)

**Best for:** Sharing with others, accessing from phone, Reddit distribution.

---

### Option 3: Netlify Drop (Instant Free Hosting)
**Effort:** Very Low | **Cost:** Free | **Timeline:** 5 minutes

Drag and drop the study book folder onto [netlify.com/drop](https://app.netlify.com/drop) and get an instant URL.

**Pros:**
- Literally drag and drop — no account needed initially
- Instant live URL
- Free tier is generous

**Cons:**
- Temporary URL unless you create an account
- Manual re-upload every time you update content

**Best for:** Quick demo or sharing a snapshot.

---

### Option 4: Self-Host on a VPS / Cloud Server
**Effort:** High | **Cost:** $5–10/month | **Timeline:** Several hours

Rent a small server (DigitalOcean, Linode, etc.) and serve the files with Nginx or Apache.

**Best for:** When you're ready to build the full website product.

---

## Recommended Path

```
Right now:     Option 1 (self-contained HTML) → study on phone immediately
Next step:     Option 2 (GitHub Pages) → shareable URL, Reddit-ready
Future:        Option 4 (VPS/cloud) → full website with backend
```

---

## Action Items

- [ ] Create self-contained versions of `index.html` and `quiz.html` (inline the JS)
- [ ] Set up GitHub repository for the project
- [ ] Enable GitHub Pages
- [ ] Test on mobile device
- [ ] Add GitHub Pages URL to README
