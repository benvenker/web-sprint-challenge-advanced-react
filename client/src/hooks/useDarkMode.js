import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  useEffect(() => {
    const body = document.querySelector("body");
    const plantList = document.querySelector(".plant-list");

    JSON.stringify(window.localStorage.getItem(key))
      ? body.classList.toggle("dark-mode")
      : body.classList.remove("dark-mode");
    JSON.stringify(window.localStorage.getItem(key))
      ? plantList.classList.toggle("dark-mode")
      : plantList.classList.remove("dark-mode");
    return () => {};
  }, [setDarkMode]);

  return [darkMode, setDarkMode];
};
