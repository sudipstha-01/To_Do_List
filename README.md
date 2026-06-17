# 📝 Interactive To-Do List with Priority Tracking

A sleek, high-contrast, column-based task management web application. Featuring strict priority classification, persistent local storage state synchronization, and a custom tactile UI built entirely with semantic vanilla web technologies. Shipped as an open-ended project for the **Hack Club Stardance Challenge**!

🚀 **[Live Deployment Link](https://sudip-project-04.netlify.app/)**

---

## 🛠️ Built With

Component-driven vanilla web development utilizing zero heavy frameworks for raw performance and snappy rendering loops:

<p align="left">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</p>

---

## ✨ Key Features

- **🔴 Color-Coded Priority Hierarchy:** Label tasks seamlessly as `LOW`, `MEDIUM`, or `HIGH` with immediate inline visual emphasis.
- **🔄 State Synchronization:** Instantly toggle tasks between `Ongoing` and `Done` states via custom native input radios.
- **💾 LocalStorage Persistence:** Tasks map directly to a local JSON state array, preserving your list across browser sessions and hard refreshes.
- **🛑 Strict Input Validation:** Prevents empty data injection by firing clear structural warning layouts and auto-focusing elements when white-spaces are detected.
- **⌨️ Fluid Keyboard UX:** Fully integrated keyboard listeners allow rapid-fire task pushing using the standard `Enter` key.

---

## 🎨 Design System & Layout Highlights

The visual system layout leans heavily into structural alignment and modern high-contrast styling:
- **Synchronized Column Grids:** Uses an exact explicit fractional template column scheme (`0.13fr 0.7fr 1fr 0.3fr 0.3fr 0.2fr`) bridging both the table header row and injected list-wrapper DOM elements to guarantee flawless layout symmetry.
- **Custom UI Overrides:** Default radio configurations are wiped using `appearance: none` and substituted with custom centered scaling dots animated with clean transition delays.
- **Tactical UI Feedback:** Incorporates tactile downward shifts (`transform: translate(3px, 3px)`) and localized box-shadow manipulation on active button vectors to heighten click response feedback.

---
### 🛠️ Areas Where AI Assisted

* Explaining JavaScript concepts and browser APIs.
* Debugging issues related to task rendering and event handling.
* Suggesting approaches for Local Storage implementation.
* Helping understand CSS Grid, Flexbox, and custom form styling.
* Providing UI/UX improvement suggestions.
* Assisting with code organization and logic refinement.

### 📝 Transparency

All AI-assisted sections have been clearly acknowledged within the source code through comments wherever applicable.

While AI provided guidance and explanations, the project was built, tested, customized, and iteratively improved by me. AI was primarily used as a learning tool throughout the development process rather than as a replacement for development.

---

<div align="center">

**💡 Learn → Experiment → Debug → Build**

</div>


## 📁 Repository Structure

```text
├── index.html          # Core structural layout and data nodes
├── style_01.css        # Custom CSS Grid schemes, font-face maps, & pseudo-elements
├── script_01.js        # LocalStorage bindings, dynamic DOM rendering, and click delegation
├── README.md           # Documentation and showcase manual
└── Fonts/              # Dedicated custom typography assets
    ├── Marvin.otf
    ├── Marvin-Round.otf
    ├── Marvin-Shadow.otf
    ├── Matra-Regular.otf
    └── BoldKei-nRAWP.ttf
