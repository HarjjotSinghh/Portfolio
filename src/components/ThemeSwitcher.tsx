import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Limelight } from 'next/font/google';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      console.log("Error: theme = " + theme);
    };
  };
  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <button className='p-6' onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default ThemeSwitcher;