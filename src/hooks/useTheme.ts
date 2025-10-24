import { useState, useEffect } from "react";

export type Theme = 'light' | 'dark';
export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem('theme') as Theme | null;
        if (stored) return stored;
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            return "dark"
        }
        return "light";
    })


    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : 'dark'))
    }

    return { theme, toggleTheme, setTheme };

}