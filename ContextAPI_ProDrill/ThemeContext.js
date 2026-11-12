import React, { createContext, useState } from 'react';

// 1. Create the Context
export const ThemeContext = createContext();

// 2. Create the Provider (Wraps around the components that need the data)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Dark Mode");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};