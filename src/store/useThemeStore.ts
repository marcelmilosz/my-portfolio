// src/store/useThemeStore.ts
import { create } from "zustand";

type Theme = "dark" | "light";

interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "dark", // default
    setTheme: (theme) => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
        set({ theme });
    },
    toggleTheme: () => {
        set((state) => {
            const newTheme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
            return { theme: newTheme };
        });
    },
}));
