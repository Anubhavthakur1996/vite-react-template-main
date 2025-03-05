import { useState, useEffect } from "react";

export const sysThemeSelector = (): void => {
  // On page load or when changing themes
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
  } else {
    document.querySelector("html")?.setAttribute("data-theme", "base");
  }
};

export const userThemeSelector = (theme: string): void => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const themeRemover = (): void => {
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
};

// Returns the scroll position on Y axis
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

// Joins classes
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
