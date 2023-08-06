import React, { useContext, useEffect, useState } from "react";
// import "./header.css";
// import { MyContext } from "../MyContext";
import { useLanguage,useLanguageUpdate } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
export default function Header() {
  // const context = useContext(MyContext);
  // let { language, setLanguage, loading, setLoading } = context;
  let colors = ["rgb(246, 158, 31)", "rgb(53, 58, 156)", " rgb(253, 82, 9)"];
  // const [headerBackground, setHeaderBackground] = useState(colors[0]);
  // const []
  const [mobile, setMobile] = useState();
  let language = "हिन्दी"
  // useEffect(() => {
  //   // Simulating background color change after a certain time
  //   let i = 1;
  //   const interval = setInterval(() => {
  //     i = i % colors.length;
  //     setHeaderBackground(colors[i]);
  //     i = i + 1;
  //   }, 8400);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // const handleText = () => {
  //   setLoading(true);
  //   if (language === "हिन्दी") {
  //     setLanguage("English");
  //     localStorage.setItem("preferredLanguage", "English");
  //   } else if (language === "English") {
  //     setLanguage("हिन्दी");
  //     localStorage.setItem("preferredLanguage", "हिन्दी");
  //   }
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // };

  return (
    <header className="header_container">
      <ul className="header_ul desktop_header">
        <li>{language === "हिन्दी" ? "होम" : "Home"}</li>
        <li>{language === "हिन्दी" ? "अबाउट" : "About"}</li>
        <li>{language === "हिन्दी" ? "गतिविधियाँ" : "Activitites"}</li>
        <li>
          <Link to="/blogs" target="blank">
            {language === "हिन्दी" ? "ब्लॉग" : "Blog"}
          </Link>
        </li>
        <li className="logo_li">
          <img src="/logo.svg" />
        </li>
        <li>{language === "हिन्दी" ? "संपर्क" : "Contact"}</li>
        <li className="lagnuage_li">
          {language === "हिन्दी" ? "English" : "हिन्दी"}
        </li>
        <li className="header_button" style={{ color: "white" }}>
          {language === "हिन्दी" ? "अभी दान कीजिए" : "DONATE NOW"}
        </li>
      </ul>
      <div
        className="mobile_header"
        style={mobile ? { background: "#1d1d1db5" } : { background: "none" }}
      >
        <div className="logo_li">
          <img src="/logo.svg" />
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hamburger_icon"
            onClick={() => setMobile(!mobile)}

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>

          <ul
            className="header_ul"
            style={
              mobile
                ? { background: "#1d1d1db5", height: "auto" }
                : {
                    background: "none",
                    height: 0,
                    padding: 0,
                    overflow: "hidden",
                  }
            }
          >
            <li>{language === "हिन्दी" ? "होम" : "Home"}</li>
            <li>{language === "हिन्दी" ? "अबाउट" : "About"}</li>
            <li>{language === "हिन्दी" ? "गतिविधियाँ" : "Activitites"}</li>
            <li>
              <Link to="/blogs" target="blank">
                {language === "हिन्दी" ? "ब्लॉग" : "Blog"}
              </Link>
            </li>
            <li>{language === "हिन्दी" ? "संपर्क" : "Contact"}</li>
            <li className="lagnuage_li">
              {language === "हिन्दी" ? "English" : "हिन्दी"}
            </li>
            <li className="header_button" style={{ color: "white" }}>
              {language === "हिन्दी" ? "अभी दान कीजिए" : "DONATE NOW"}
            </li>
          </ul>
        </button>
      </div>
    </header>
  );
}
