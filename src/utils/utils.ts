import { useState, useEffect } from "react";
import { setMobile } from "../redux/slices/baseSlice";

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

// Checks for mobile devices
export const setMobileMode = (dispatch: (arg0: { payload: any; type: "base/setMobile"; }) => void) => {

  /* Storing user's device details in a variable*/
  const details = navigator.userAgent;

  /* Creating a regular expression  
  containing some mobile devices keywords  
  to search it in details string*/
  const regexp = /android|iphone|kindle|ipad|iPod/i;

  /* Using test() method to search regexp in details 
  it returns boolean value*/
  const isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    dispatch(setMobile(true));
  } else {
    dispatch(setMobile(false));
  }
};
