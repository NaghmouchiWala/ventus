export type Theme = "dark" | "light";

const STORAGE_KEY = "ventus-theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable (private browsing, etc.) — theme still applies for this session
  }
}
