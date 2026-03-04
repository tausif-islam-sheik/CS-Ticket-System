## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.

### ✅ Why JSX is used:

- Makes UI code easier to read
- Combines HTML and JavaScript in one place
- Helps React create elements efficiently

### Example:

```jsx
const element = <h1>Hello, World!</h1>;
```

JSX is converted into regular JavaScript behind the scenes.

---

## 2. What is the difference between State and Props?

| Feature     | State            | Props            |
| ----------- | ---------------- | ---------------- |
| Managed By  | Component itself | Parent component |
| Can Change? | Yes              | No (Read-only)   |
| Purpose     | Dynamic data     | Pass data        |

### 🔹 State

- Local to a component
- Used for dynamic content
- Updated using setter functions

### 🔹 Props

- Short for "properties"
- Used to pass data to child components
- Immutable (cannot modify directly)

---

## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage state.

### Syntax:

```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

### Explanation:

- `count` → current state value
- `setCount` → function to update state
- `0` → initial value

When `setCount()` is called:

1. State updates
2. Component re-renders
3. UI updates automatically

---

## 4. How can you share state between components in React?

### ✅ 1. Lifting State Up

Move the state to the closest common parent and pass it down using props.

### ✅ 2. Context API

Share global state without passing props manually at every level.

### ✅ 3. State Management Libraries

For large applications:

- Redux
- Zustand
- Recoil

---

## 5. How is event handling done in React?

React uses **camelCase** event names and function references.

### Example:

```jsx
function handleClick() {
  alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>;
```

### Common Events:

- onClick
- onChange
- onSubmit
- onMouseOver

---

## 🎯 Conclusion

- JSX makes UI writing simple.
- State manages dynamic data.
- Props pass data between components.
- useState enables state in functional components.
- React events use camelCase and functions.
