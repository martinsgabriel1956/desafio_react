import { createContext, useState } from "react";
import { ThemeContextProviderTypes, ThemeContextType } from "./types";

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderTypes) {
  const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}