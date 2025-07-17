// src/store/useScrollStore.ts
import { create } from "zustand";

type ScrollStore = {
    scrollToAnchor: (id: string, offset?: number) => void;
};

export const useScrollStore = create<ScrollStore>((set) => ({
    scrollToAnchor: (id: string, offset = -100) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    },
}));
