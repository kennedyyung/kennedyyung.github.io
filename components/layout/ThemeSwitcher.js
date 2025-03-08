import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';


const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" grid grid-flow-col">
    <input
      type="checkbox"
      className="toggle"
      checked={theme === "dark"}
      onChange={handleToggle}
    />
    {theme === "dark" ? (
        <MoonIcon className="w-6 h-6 ml-2" />
      ) : (
        <SunIcon className="w-6 h-6 ml-2" />
      )}
    </div>
  );
};

export default ThemeSwitcher;