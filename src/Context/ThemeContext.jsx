import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider({ children }) {
  const [darktheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme(!darktheme);
    localStorage.setItem("theme-preference", darktheme);
    if (darktheme) {
        document.body.classList.remove("dark");
    } else {
          document.body.classList.add("dark");
      }
  }
  useEffect(() => {
    let preference = localStorage.getItem("theme-preference");
    preference = Boolean(preference);
    setDarkTheme(preference);
    console.log("ran", darktheme, "pref", preference);
    if (preference) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={darktheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
