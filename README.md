# 📝 Interactive To-Do List with Priority Tracking

Hey everyone! This is a super clean, high-contrast, column-based task manager I built entirely from scratch using vanilla web tech. I really wanted to create something snappy and full of personality for the **Hack Club Stardance Challenge**, focusing on solid state management, data persistence, and bold UI details.

🚀 **[Check out the Live Build here!](https://sudip-project-04.netlify.app/)**

---

## 🛠️ Built With

I wanted to keep things raw, fast, and lightweight, so I skipped the bulky frameworks and stuck to pure vanilla web fundamentals:

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Git](https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

---

## ✨ Cool Stuff It Does

- **🔴 Visual Priority Hierarchy:** Tag your tasks as `LOW`, `MEDIUM`, or `HIGH` to immediately color-code your agenda.
- **🔄 Snappy State Toggles:** Move your tasks smoothly between `Ongoing` and `Done` using completely custom native radio buttons.
- **💾 LocalStorage Tracking:** Your data saves instantly into a local JSON state array, meaning your list stays safe even if you refresh or close the tab.
- **🛑 Smart Input Guardrails:** If you accidentally try to hit submit on an empty box or a bunch of whitespaces, the app stops you with a flash of red error UI and forces focus right back onto the box so you can re-type.
- **⌨️ Keyboard Support:** No need to reach for the mouse every time—just slam the `Enter` key to rapidly add tasks to your queue.

---

## 🎨 Design Inspiration & Layout Highlights

- **Pinterest-Inspired Aesthetics:** The aesthetic design direction was heavily inspired by an incredible high-contrast layout concept I stumbled across on [Pinterest](https://www.pinterest.com/pin/302726406226831408/). I loved the bold lines and immediate readability, so I decided to adapt that vibe into a real web app!
- **Symmetric Grid Alignment:** Getting dynamic rows to line up perfectly with a static header can be a nightmare. I managed it by running an exact, identical fractional template column layout (`0.13fr 0.7fr 1fr 0.3fr 0.3fr 0.2fr`) across both the master titles and the dynamically generated task lists.
- **Wiping Native Controls:** Standard browser radio buttons are pretty boring, so I used `appearance: none` to totally override them. I built my own grid-centered, scaling check-dots using CSS `::before` pseudo-elements.
- **The "Tactical Click" Effect:** Making a UI feel alive is all about feedback. When you click the delete button, it uses `transform: translate(3px, 3px)` and box-shadow shifts to physically drop down on the screen so it feels like a real, tangible button press.

---

## 🧠 Learning Journey & Partnering with AI

I spent over 18 hours building this app, and it was honestly a massive learning curve. Along the way, I used AI as a smart pair-programmer to help me level up. It was a huge help for:

* Breaking down tricky logic bugs with rendering arrays and event bubbling.
* Deepening my understanding of standard browser APIs and `localStorage` JSON serialization.
* Brainstorming ways to clean up CSS pseudo-element targets and flex/grid boundaries.
* Refining my JavaScript loops so I could track elements cleanly using index values.

I made sure to drop clear comments directly into the source code to credit the specific logic breakthroughs where AI helped out! I used it to learn, experiment, and debug—but every single element, custom style tweak, and logic execution was curated, tested, and shipped by me.

---

## 📁 Project Setup

```text
├── index.html          # Core structure and layout nodes
├── style_01.css        # Layout parameters, custom key-frames, & Pinterest aesthetic rules
├── script_01.js        # State handling, data persistence, and DOM injection logic
├── README.md           # The manual you're reading right now
└── Fonts/              # Custom typography styles that give the project its character
    ├── Marvin.otf
    ├── Marvin-Round.otf
    ├── Marvin-Shadow.otf
    ├── Matra-Regular.otf
    └── BoldKei-nRAWP.ttf
