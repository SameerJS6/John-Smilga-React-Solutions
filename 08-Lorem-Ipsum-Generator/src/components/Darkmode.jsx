import React, { useState, useEffect } from "react";

export default function Darkmode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    setIsDark(localTheme === "dark");
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [isDark]);

  const handleThemeChange = () => {
    const newTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("theme", newTheme);
    setIsDark((prevIsdark) => !prevIsdark);
  };
  return (
    <button
      onClick={handleThemeChange}
      className="transition-all duration-[350ms] ease-in-out hover:bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:shadow-md rounded-[50%] p-2"
    >
      {isDark && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="limegreen"
          className="w-5 sm:w-6 h-5 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}

      {!isDark && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#064e3b"
          className="w-5 sm:w-6 h-5 sm:h-6"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
