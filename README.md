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

## ✨ Features

1. **Interactive stack builder** — browse 15 technologies as cards and add or
   remove them from a live "Your Stack" sidebar, with duplicate-add
   protection and a one-click "Remove All".
2. **Data-driven UI** — every technology card is rendered dynamically from a
   local `technologies.json` file fetched with `useEffect`, complete with a
   loading state while the fetch is in flight.
3. **Fully responsive, on-brand design** — a single shared orange → pink →
   violet gradient theme (defined once in `tailwind.config.js`) powers the
   logo, hero heading, and buttons, and the layout adapts from 1 column on
   mobile to 3 columns on desktop, including a collapsible hamburger navbar.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

---

## 📚 React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension that lets us write HTML-like markup directly
inside our JavaScript code. It's used because it makes describing what the
UI should look like much easier to read and write than calling
`React.createElement()` by hand — under the hood, JSX is just compiled into
those function calls.

**2. What is the difference between props and state?**

Props are data passed **into** a component from its parent — the component
receiving them cannot change them, they're read-only. State is data that a
component **owns and manages itself**, and can change over time (usually in
response to user actions). In this project, `tech` is passed as a prop into
`TechCard`, while `stack` is state that lives in `App`.

**3. What does the useState hook do, and where did you use it in this project?**

`useState` lets a component create a piece of state that React remembers
between renders, and re-renders the component whenever that state changes.
I used it in `App.jsx` for `technologies` (the fetched data), `loading`
(whether the fetch is still running), and `stack` (the technologies the
user has added).

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

`useEffect` lets us run side effects — code that reaches outside of
rendering, like fetching data — after a component renders. I needed it
because fetching the JSON file is a side effect: it shouldn't run on every
render, only once when the app first loads, so I passed an empty
dependency array `[]` to make it run a single time.

**5. Why does every item in a .map() list need a unique key prop?**

React uses the `key` to tell items apart between re-renders, so it knows
exactly which item was added, removed, or changed instead of re-rendering
the whole list from scratch. Without a stable unique key, React can mix up
items and cause bugs or bad performance, especially in a list like the
stack sidebar where items are added and removed.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. In
`StackSidebar.jsx`, I check `count === 0` to decide whether to show the
"Your stack is empty." placeholder or the actual list of added
technologies:

```jsx
{count === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <ul>{/* stack items */}</ul>
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through **props** — for example,
`App` passes `tech` and `isAdded` down into `TechCard`. To send data back
**up**, the parent passes a **function** down as a prop (like `onAdd`), and
the child calls that function with the data it wants to send. So when a
card's button is clicked, `TechCard` calls `onAdd(tech)`, which runs the
`handleAddToStack` function that actually lives in `App`.
