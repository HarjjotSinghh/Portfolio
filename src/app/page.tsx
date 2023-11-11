'use client'
import { Flex, Text, Button } from '@radix-ui/themes';
import { Heading } from '@radix-ui/themes';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
export default function Home() {
  return (
    <>
      <main className='flex gap-4 flex-col w-screen'>
        <h1 className='font-sans font-light'>Hey there, I am Harjot.</h1>
        <ThemeSwitcher/>
      </main>
    </>
  );
}