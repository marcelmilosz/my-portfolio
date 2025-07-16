// ----- BORDER RADIUS -----
export type BORDER_RADIUSES_PROPS = "none" | "sm" | "md" | "lg" | "full";

export const BORDER_RADIUSES: Record<BORDER_RADIUSES_PROPS, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
    full: "rounded-full",
};

export const DEFAULT_BORDER_RADIUS: BORDER_RADIUSES_PROPS = "md";

// ----- PADDING -----
export type PADDINGS_PROPS = "none" | "sm" | "md" | "lg";

export const PADDINGS: Record<EQUAL_PADDINGS_PROPS, string> = {
    none: "px-0 py-0",
    sm: "px-2 py-1",
    md: "px-4 py-2",
    lg: "px-5 py-3",
};

export type EQUAL_PADDINGS_PROPS = "none" | "sm" | "md" | "lg";

export const EQUAL_PADDINGS: Record<EQUAL_PADDINGS_PROPS, string> = {
    none: "p-0",
    sm: "p-2",
    md: "p-4",
    lg: "p-5",
};
