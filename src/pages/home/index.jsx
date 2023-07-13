import React from "react";
import { Helmet } from "react-helmet-async";
import {
  useLanguage,
  useTheme,
  useThemeUpdate,
  useLanguageUpdate,
} from "../../Context/ThemeContext";

import "./home.css";

import SimpleSlider from "./carousel";
import HomeHeader from "./header";

export default function Home() {
  const toggleTheme = useThemeUpdate();
  const darktheme = useTheme();
  const { language, langOptions } = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <div>
      <Helmet>
        <title>HOME</title>
        <meta name="description" content="home page" />
      </Helmet>
      <HomeHeader />
      <SimpleSlider />
    </div>
  );
}
