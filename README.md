# 🧩 Dev Stack

**Dev Stack** is a React web app that helps developers explore frontend,
backend, database, and tooling technologies, and build their own custom
"development stack" by adding technologies to a personal selection panel.

## 🛠️ Technology Used

- **React.js** — component-based UI
- **Vite** — build tool / dev server
- **Tailwind CSS** — utility-first styling
- **React-Toastify** — toast notifications
- **JSON** — technology data source (fetched, not hardcoded)

## Features

1. *Interactive stack builder* — browse 15 technologies as cards and add or
   remove them from a live "Your Stack" sidebar, with duplicate-add
   protection and a one-click "Remove All".
2. *Data-driven UI* — every technology card is rendered dynamically from a
   local `technologies.json` file fetched with `useEffect`, complete with a
   loading state while the fetch is in flight.
3. *Fully responsive, on-brand design* — a single shared orange → pink →
   violet gradient theme (defined once in `tailwind.config.js`) powers the
   logo, hero heading, and buttons, and the layout adapts from 1 column on
   mobile to 3 columns on desktop, including a collapsible hamburger navbar.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

---

## 📚 React Questions

**1. What is JSX, and why is it used in React?

And: JSX is a syntax extension that allows HTML-like markup within JavaScript. It improves readability compared to writing React.createElement() directly, into which it is ultimately compiled.

**2. What is the difference between props and state?**

And: Props are read-only data passed from a parent to a child component. State is data a component manages internally and can update over time. In this project, tech is passed as a prop, while stack is state managed within App.

**3. What does the useState hook do, and where did you use it in this project?**

And: `useState` allows a component to retain data across renders and re-render when that data changes. It is used in App.jsx for technologies, loading, and stack.

*4. What does the useEffect hook do, and why did you need it to load the JSON data?*

And: `useEffect` runs side effects, such as data fetching, after rendering. An empty dependency array [] was used to ensure the JSON data loads only once, when the component mounts.

*5. Why does every item in a .map() list need a unique key prop?*

And: The key prop allows React to identify which items were added, removed, or changed between renders. Without stable keys, list updates can lead to incorrect rendering or performance issues.

**6. What is conditional rendering? Show one place you used it.**

And: Conditional rendering displays different UI based on a condition. In StackSidebar.jsx:

jsx
{count === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <ul>{/* stack items */}</ul>
)}

**7. How do you pass data from a parent to a child, and how does a child send data back to a parent?**

And: Data is passed from parent to child using props (e.g., tech and isAdded passed into TechCard). To send data back, the parent provides a callback function as a prop (e.g., onAdd), which the child calls with the relevant data. Clicking a card invokes onAdd(tech), which triggers handleAddToStack in App.
