import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* stockage indisponible */
    }
  }, [theme]);

  const toggle = () => {
    const root = document.documentElement;
    root.classList.add("theme-anim"); // transition douce, retirée juste après
    setTheme((t) => (t === "dark" ? "light" : "dark"));
    setTimeout(() => root.classList.remove("theme-anim"), 400);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={isDark ? "Activer le mode jour" : "Activer le mode nuit"}
      title={isDark ? "Mode jour" : "Mode nuit"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}