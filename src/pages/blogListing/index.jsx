import React from "react";
import { useLanguage } from "../../Context/ThemeContext";

export default function BlogListing() {
  const { language } = useLanguage();

  return <div>BlogListing{language}</div>;
}
