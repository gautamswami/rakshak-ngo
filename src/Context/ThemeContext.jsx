import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();
const LanguageContext = createContext();
const LanguagUpdateContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function useLanguage() {
  return useContext(LanguageContext);
}
export function useLanguageUpdate() {
  return useContext(LanguagUpdateContext);
}
export function ThemeProvider({ children }) {
  const [darktheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme(!darktheme);
  }
  const [language, setLanguage] = useState("english");
  const langOptions = ["english", "hindi"];
  function toggleLanguage(lang) {
    setLanguage(lang);
  }
  useEffect(() => {
    if (darktheme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darktheme]);
  return (
    <ThemeContext.Provider value={darktheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <LanguageContext.Provider value={{langOptions, language}}>
          <LanguagUpdateContext.Provider value={toggleLanguage}>
            {children}
          </LanguagUpdateContext.Provider>
        </LanguageContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
