import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useThemeUpdate } from "../../Context/ThemeContext";
export default function Home() {
  const toggleTheme = useThemeUpdate()
  return (
    <div>
      <Helmet>
        <title>HOME</title>
        <meta name="description" content="home page" />
      </Helmet>
      Home
      <Link to="/blogs">BLOG</Link>
      <button onClick={toggleTheme}>CHANGE</button>
    </div>
  );
}
