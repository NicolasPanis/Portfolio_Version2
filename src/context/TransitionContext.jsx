import React, { createContext, useState } from "react";

const TransitionContext = createContext({ completed: false });

// eslint-disable-next-line react/prop-types
export function TransitionProvider({ children }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export default TransitionContext;
