"use client"
import React from 'react'
import { Fade } from "react-awesome-reveal"
import { FADE_IN_ANIMATION_DURATION } from '@/lib/utils'
import Link from 'next/link'
import aboutSectionImage from "@/../public/portfolio-website-background-about-section.png"
import Image from 'next/image'

export default function Section2() {
  return (
    <section className='min-w-screen max-w-screen relative flex justify-center items-cneter flex-col gap-0 xl:px-40 lg:px-32 md:px-24 px-8 py-24 overflow-hidden '>
        
        <div className='flex justify-center items-start flex-col min-w-screen h-fit'>
            <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
                <h1 className='text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold' id='about-me'>
                    About Me
                </h1>
            </Fade>
            <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce className='mt-6 z-10'>
                <p className="leading-7 xl:text-lg">
                    I started my web development journey using the Flask web framework in Python, back in class 11th. Shortly after, I switched over to the MERN stack. As of now, I have knowledge of many web frameworks such as Flask, React, NextJs and Svelte. I have worked on <Link rel='noopener' target='_blank' href={"https://github.com/HarjjotSinghh?tab=repositories"} className='underline-offset-auto underline decoration-primary decoration-2 hover:decoration-accent transition-all duration-300 ease-in-out'>multiple projects</Link> using majorly these 4 frameworks and I am always willing to learn a new and distinct web framework.
                    <br/>
                    <br/>
                    Along with my web development skills, I have <Link rel='noopener' target='_blank' href={"https://behance.net/harjjot"} className='underline-offset-auto underline decoration-primary decoration-2 hover:decoration-accent transition-all duration-300 ease-in-out'> freelanced as a graphic designer</Link> and VFX editor for many years in the E-Sports industry. I have knowledge of software like Adobe Photoshop, Lightroom, After Effects, Blender, etc. Being a designer has always helped me in creating designs for various stuff, wheather that be my LinkedIn banner, or the UI design of this website!
                    <br/>
                    <br/>
                    In my free time, I love to <Link href={"#about-me"} className='underline-offset-auto underline decoration-primary decoration-2 hover:decoration-accent transition-all duration-300 ease-in-out'>play games</Link> like Valorant, GTA V, Fortnite, Minecraft and the list goes on. I strongly believe in the concept of constructive criticism, so I am always open to feedback from any individual, so if you want me to know something, feel free to <Link href={"#contact-me"} className='underline-offset-auto underline decoration-primary decoration-2 hover:decoration-accent transition-all duration-300 ease-in-out'>contact me</Link>!
                </p>
            </Fade>
        </div>
        <div className='absolute lg:min-w-screen lg:h-auto min-h-screen w-full select-none overflow-hidden -z-30'>
            {/* <Image src={section1Image} alt='Section 1' className='w-full h-full visbile hue-rotate-180 contrast-100 invert dark:hue-rotate-0 dark:invert-0'></Image> */}
            <Image src={aboutSectionImage} alt='About Section' className='lg:w-screen lg:h-auto h-screen w-full object-cover rotate-[180deg] invert hue-rotate-[185deg] dark:invert-0 dark:hue-rotate-[42deg] contrast-150'></Image>
            {/* <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent to-background" style={{opacity:1}}></div> */}
            <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent
             to-background from-25% via-50% to-75%" style={{opacity:1}}></div>
            <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background " style={{opacity:0.6}}></div>
            <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background dark:bg-transparent" style={{opacity:0.2}}></div>
        </div>
    </section>
  )
}
