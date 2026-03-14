import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize dark mode from localStorage
if (typeof window !== "undefined") {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark = isDarkMode !== null ? isDarkMode : prefersDark;
  
  if (shouldBeDark) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
}

createRoot(document.getElementById("root")!).render(<App />);
