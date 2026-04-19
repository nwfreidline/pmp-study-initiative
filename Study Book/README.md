# Study Book

## Folder Structure

```
study-book/
├── src/              ← Source files (multi-file version, for development)
│   ├── index.html    ← Main study reader
│   ├── quiz.html     ← Diagnostic quiz
│   ├── pages.js      ← All study content
│   └── quiz-data.js  ← All quiz questions
│
└── standalone/       ← Self-contained single-file versions (for mobile/sharing)
    ├── index.html    ← Study reader with all JS inlined (no external dependencies)
    └── quiz.html     ← Quiz with all JS inlined (no external dependencies)
```

## How to Use

### On Desktop (Development)
Open `src/index.html` in a browser. All files must be in the same folder.

### On Mobile / Phone
Use the files in `standalone/` — each is a single self-contained HTML file.
You can email these to yourself, save to Files app, or open directly in Safari/Chrome.

### Via URL (Recommended)
Once deployed to GitHub Pages, access via the shared URL from any device.
See `docs/strategy-mobile-access.md` for setup instructions.

## Content Status

| Chapter | Title | Status |
|---------|-------|--------|
| 1 | Exam Overview | ✅ Complete |
| 2 | The 12 Principles | ✅ Complete |
| 3 | Performance Domains | ✅ Complete (partial) |
| 4 | People Domain Deep Dive | 🔲 Not started |
| 5 | Process Domain Deep Dive | 🔲 Not started |
| 6 | Business Environment | 🔲 Not started |
| 7 | Agile & Hybrid | 🔲 Not started |
| 8 | EVM & Calculations | 🔲 Not started |
| 9 | Ethics | 🔲 Not started |

## Quiz Status

| Quiz | Questions | Status |
|------|-----------|--------|
| Week 1 Diagnostic | 50 | ✅ Complete |
| Domain: People | 0 | 🔲 Not started |
| Domain: Process | 0 | 🔲 Not started |
| Domain: Business Environment | 0 | 🔲 Not started |
| Full Mock Exam | 0 | 🔲 Not started |
