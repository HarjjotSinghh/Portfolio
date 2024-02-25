"use client"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Limelight } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Fade } from 'react-awesome-reveal'
import { FADE_IN_ANIMATION_DELAY, FADE_IN_ANIMATION_DURATION } from '@/lib/utils';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      console.log("Error: theme = " + theme);
    };
  };

  if (!hasMounted) return (
    <div className='w-fit '> 
      <Button className='xl:px-6 xl:py-10 px-4 py-6 rounded-full lg:scale-90 bg-background/20 border-2 dark:border-accent border-primary text-foreground' variant={"link"} onClick={toggleTheme}>
          {(theme === "dark") ? <MoonIcon className='xl:w-8 xl:h-8 w-4 h-4'/> : <SunIcon className='xl:w-8 xl:h-8 w-4 h-4'/>}
        </Button>
    </div>
  );

  return (
    <Fade duration={FADE_IN_ANIMATION_DURATION} delay={FADE_IN_ANIMATION_DELAY} className='w-fit z-[10001]' triggerOnce>
      <div className='w-fit'>
        <Button className='xl:px-6 xl:py-10 px-4 py-6 rounded-full lg:scale-90 bg-background/20 border-2 dark:border-accent border-primary text-foreground' variant={"link"} onClick={toggleTheme}>
          {(theme === "dark") ? <MoonIcon className='xl:w-8 xl:h-8 w-4 h-4'/> : <SunIcon className='xl:w-8 xl:h-8 w-4 h-4'/>}
        </Button>
      </div>
    </Fade>
  )
}

export default ThemeSwitcher;