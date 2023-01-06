'use client';

import { createContext, useEffect, useState } from "react"
export const ThemeContext = createContext();

export default function ThemeWrapper({ children }) {

    const [darkTheme, setIsDarkTheme] = useState(true);

    function initialThemeHandle() {
        darkTheme && document.querySelector("body").classList.add("dark");
    }

    function toggleThemeHandler() {
        setIsDarkTheme(!darkTheme);
        document.querySelector("body").classList.toggle("dark");
    }

    const globalState = {
        darkTheme: true,
        toggleThemeHandler
    }

    useEffect(() => initialThemeHandle());

    return (
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}