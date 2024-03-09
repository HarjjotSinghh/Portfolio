"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';
import TypewriterComponent from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import { TypewriterState } from 'typewriter-effect';
import { FADE_IN_ANIMATION_DELAY, FADE_IN_ANIMATION_DURATION } from '@/lib/utils';
import { DoubleArrowDownIcon } from "@radix-ui/react-icons"
import Image from 'next/image';
import section1Image from "@/../public/portfolio-website-background.png"
import section1ImageLight from "@/../public/portfolio-website-background-light.png"
import Link from 'next/link';

export default function Section1() {
    const [hasMounted, setHasMounted] = useState(false);
    const [hidden, setHidden] = useState(false);
    useEffect(() => setHasMounted(true), []);
    if (!hasMounted) {
        return (
            <section className='flex justify-center items-center h-[100dvh]' id='main'>
                <div className=''>
                <h1 className="text-lg font-thin tracking-tighter sm:text-xl md:text-2xl lg:text-3xl">
                    Hey there,
                </h1>
                <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className='font-normal'>I am </span><span className='bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold'>Harjot Singh.</span>
                </h1>
                </div>
            </section>
        )
    }
    return (
    <section className='flex justify-center items-center h-screen antialiased' id='main'>
            <Fade duration={FADE_IN_ANIMATION_DURATION+1000} delay={FADE_IN_ANIMATION_DELAY+1000} className='absolute w-full h-full -z-50 select-none' triggerOnce>
                {/* <Image src={section1Image} alt='Section 1' className='w-full h-full visbile hue-rotate-180 contrast-100 invert dark:hue-rotate-0 dark:invert-0'></Image> */}
                <Image src={section1ImageLight} alt='Section 1' className='w-full h-full dark:contrast-[0.9] contrast-125 dark:invert dark:hue-rotate-[190deg] hue-rotate-[40deg] object-cover'></Image>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background" style={{opacity:1}}></div>
            </Fade>
            <div className='w-fit break-words'>
                <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
                    <div className="flex flex-row lg:gap-2 gap-1 text-lg font-thin tracking-tighter sm:text-xl md:text-2xl lg:text-3xl">
                        Hey there, 
                        {/* <span className='scale-90'>{"\u{1F44B}"}</span> */}
                        {/* <TypewriterComponent options={{strings: ["\u{1F44B}", "\u{1F4BB}"], autoStart:true, loop:true, cursor:""}}></TypewriterComponent> */}
                    </div>
                    <div className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl flex flex-row lg:gap-3 gap-2">
                        <span className='font-normal'>I am </span>
                        <TypewriterComponent onInit={(typewriter) => {
                            typewriter
                            
                            .typeString('Harjot Singh.')
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString('a Web Developer.')
                            .pauseFor(3000)
                            .deleteAll()
                            .start();
                        }} options=
                            {{
                                autoStart: false,
                                loop: true,
                                deleteSpeed: 60,
                                delay: 100,
                                wrapperClassName: "bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold",
                                cursor: "|",
                                cursorClassName: "text-primary animate-pulse"
                            }} />
                    </div>
                </Fade>
                
            </div>
            {/* <Link href='#about-me' className='absolute bottom-4 animate-bounce' onClick={() => {setHidden(!hidden)}}>
                {!hidden && (
                    <button className='hover:bg-primary transition-all ease-in-out duration-700 rounded-full bg-accent p-2 '>
                        <DoubleArrowDownIcon className='w-6 h-6 text-background'/>
                    </button>
                )}
            </Link> */}

    </section>
  )
}
