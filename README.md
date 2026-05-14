# 🏴‍☠️ Quova — Learn Smarter

A lightweight, browser-based quiz application for focused subject practice with real-time feedback, streak tracking, and detailed analytics.

---

## 📁 Project Structure

```
quova/
├── index.html    # App shell & four-screen layout
├── style.css     # Theming, layout, and component styles
└── script.js     # Question bank, game logic, charts, audio
```

---

## ✨ Features

### 🎯 Quiz Engine
- Multiple-choice questions drawn from a chunked question bank (50 questions per session by default)
- Answer feedback with per-question explanations
- Streak tracking — correct answers in a row build a visible streak badge
- Point scoring displayed live during the quiz
- "Retry incorrect" option at the end of each session

### 📊 Analytics & Charts
All charts are powered by **Chart.js 4.4**.

| Chart | Where | What it shows |
|---|---|---|
| Doughnut | Results screen | Session accuracy (%) |
| Bar (per-question) | Results screen | Correct / incorrect per question |
| Pie | Results screen | Correct vs incorrect breakdown |
| Stacked bar | Analytics screen | All-time correct & incorrect by subject |
| Radar | Analytics screen | Subject mastery percentages |
| Doughnut | Analytics screen | Attempt distribution by subject |
| Line | Analytics screen | Session accuracy trend (last 10 sessions) |
| Progress bars | Analytics screen | Per-subject accuracy breakdown |

### 🌙 Theming
- Light and dark mode with a single toggle
- Theme preference persisted via `localStorage`

### 🔊 Sound Effects
- Web Audio API used for lightweight synthesised sound effects (no external audio files required)

### 💾 Persistence
- All progress (scores, session history, per-subject stats) saved to `localStorage` — no backend needed

---

## 📚 Subjects

| # | Subject | Emoji |
|---|---|---|
| 1 | Internet of Things | 📡 |
| 2 | E-Commerce | 🛒 |
| 3 | Data Science and ML | 🤖 |
| 4 | Information & Cyber Security | 🔐 |

---

## 🖥️ Screens

| Screen | ID | Description |
|---|---|---|
| Home | `#screenHome` | Subject selection grid and quick stats |
| Quiz | `#screenQuiz` | Active quiz with navigation, streak, score |
| Results | `#screenResults` | Post-quiz score cards and charts |
| Analytics | `#screenAnalytics` | All-time progress overview across subjects |

---

## 🚀 Getting Started

No build step or server required.

```bash
# Clone or download the project
git clone https://github.com/your-username/quova.git
cd quova

# Open directly in a browser
open index.html
```

Or simply drag `index.html` into any modern browser.

### Dependencies (CDN — no install needed)
- [Chart.js 4.4](https://www.chartjs.org/) — loaded via jsDelivr
- [Sora + JetBrains Mono](https://fonts.google.com/) — loaded via Google Fonts

---

## 🔧 Customisation

### Adding questions
Open `script.js` and add entries to the `QUESTION_BANK` array:

```js
{
  subject: "My Subject",
  emoji: "🧪",
  color: "#10b981",
  questions: [
    {
      question: "What is 2 + 2?",
      options: { A: "3", B: "4", C: "5", D: "6" },
      answer: "B",
      explanation: "Basic arithmetic — 2 + 2 equals 4."
    }
  ]
}
```

### Changing chunk size
Find the `chunkSize` property in the `state` object (default: `50`) and adjust:

```js
chunkSize: 25,   // 25 questions per quiz session
```

---

## 🌐 Browser Support

Works in any modern browser that supports ES6+ and the Web Audio API (Chrome, Firefox, Safari, Edge).

---

## 📄 License

MIT — free to use, modify, and distribute.
