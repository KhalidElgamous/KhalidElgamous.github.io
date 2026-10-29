// Joins class names and skips falsy values: cn("a", cond && "b", className)
export const cn = (...classes) => classes.filter(Boolean).join(" ");
