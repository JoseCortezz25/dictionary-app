import { createContext, useState } from "react";

const defaultTheme = {
  darkMode: false,
};

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(defaultTheme.darkMode);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
