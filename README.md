Project Name:

Dev Stack

Description:

Dev Stack is a web app that helps developers explore and compare frontend, backend, database, and tooling technologies.

Technologies Used:
  1. React (with TypeScript)
  2. Tailwind CSS
  3. Lucide React (icons)
  4. React Toastify (notifications)
  5. Vite
Features:
  1. Browse and explore technologies - View a list of tools across categories (frontend, backend, database, styling, DevOps) with      details like difficulty level, rating,         and description.
  2. Build your own stack - Add technologies to a personal "Your Stack" panel with a single click, with duplicate-prevention and instant visual feedback (disabled button +      checkmark once added).
  3. Manage your selections - Remove individual technologies or clear the entire stack at once, with toast notifications confirming every action.




Answer to the questions:
  1. JSX is a syntax that allows HTML like code to be written on JavaScript, which makes the code much easier to read and write.
  2. Props is data received by a component from its parent. State is data that the component creates and manages itself. Props cannot be edited by the component receiving it.
  3. useState is how a component remembers information and can update it over time. Every time that information changes, the component re-renders to show the new value on screen. I used it to track stack, the array of technologies the user has added, every time tech is added or removed setStack updates this array.
  4. useEffect is used to do something after the component renders, like fetching data, instead of doing it during render itself. Since fetching takes time, we need a way to load the data first and show it once it's ready.
  In my project I actually used React's use hook with a promise instead of useEffect, but the idea is the same — wait for the data before showing it, without blocking the rest of the UI. To be honest, I only used this method because our instructors used it.
  5. React uses the key to know which item changed, was added, or removed, so it can update the screen efficiently. Without a proper key, React can mix up items and cause bugs. I used tech.id as the key.
  6. Conditional rendering means showing different UI based on a condition. In my project, I show either the empty stack message or the actual stack list depending on if stack is empty. (In Tech.tsx)
  7. Parent to child is done using props, like passing stack data into YourStack. For child to parent, the parent passes a function as a prop, and the child calls  that function when something happens. Like onRemove, when the child calls it with the tech, it actually runs the parent's function handleRemoveFromStack.

