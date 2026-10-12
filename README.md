React Interview Questions & Answers
A structured collection of React.js interview questions and answers for freshers preparing for React Developer, Frontend Developer, and MERN Stack Developer interviews.
The notes focus on clear, interview-ready explanations of React fundamentals and Hooks, with code examples and a list of high-priority questions for revision.
📚 Topics Covered
1. React Fundamentals
- What is React?
- Main features of React
- JSX
- Virtual DOM
- Reconciliation
- One-way data flow
- Conditional rendering
- Rendering lists with map()
- Why keys are important
2. React Hooks
- What are Hooks?
- useState
- useEffect
- Dependency arrays in useEffect
- Cleanup functions
- useContext
- useRef
- useMemo
- useCallback
- useReducer
3. Component Data and State
- Props
- State
- Props vs. State
- Lifting state up
- Controlled components
- Uncontrolled components
- useState vs. useRef
4. Performance and Memoization
- React.memo()
- useMemo() vs. useCallback()
- When memoization can be useful
⭐ Important Questions to Prepare First
1. What is React, and why is it used?
2. What are React Hooks?
3. Explain useState() with an example.
4. Explain useEffect() and its dependency array.
5. What is cleanup in useEffect()?
6. What is the difference between useState() and useRef()?
7. What is the difference between useMemo() and useCallback()?
8. What is the difference between props and state?
9. What is the Virtual DOM?
10. Explain one of your React projects technically.
💻 Example: useState()
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
Key points:
- count stores the current state value.
- setCount requests a state update.
- 0 is the initial state.
- React re-renders the component when its state changes.
🧠 Quick Revision Table
Concept	Purpose
useState	Manage component state
useEffect	Synchronize with external systems and perform side effects
useContext	Read values from React Context
useRef	Keep a mutable reference between renders
useMemo	Cache a calculated value
useCallback	Cache a function reference
useReducer	Manage state with reducer logic
React.memo	Memoize a component based on its props


🗓️ Suggested Study Method
1. Read a question and understand the concept.
2. Explain the answer aloud in your own words.
3. Run and modify the code examples.
4. Practise common follow-up questions.
5. Revise the ten priority questions before an interview.
6. Prepare to explain the architecture, features, and technical decisions of your own React project.
🎯 Who Is This For?
- React.js beginners
- Freshers preparing for technical interviews
- Frontend Developer candidates
- MERN Stack Developer candidates
- Students revising React Hooks and fundamentals
📁 Repository Contents
Keep the interview notes in a Markdown file, for example:
react-interview-preparation/
├── README.md
└── react-interview-questions.md
- README.md — overview, topics, and preparation guide.
- react-interview-questions.md — the complete questions and answers from the notes.
🤝 Contributing
You can improve these notes by adding practical examples, interview follow-up questions, common mistakes, and explanations based on real project experience.
📄 Note
These notes are a study resource, not a guarantee of the exact questions an interviewer will ask. Verify details against the React documentation when using them for production development.