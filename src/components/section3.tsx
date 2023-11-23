"use client"
import React from 'react'
import { Fade } from "react-awesome-reveal"
import { FADE_IN_ANIMATION_DURATION } from '@/lib/utils'
import Link from 'next/link'
import projectsSectionImage from "@/../public/portfolio-website-background-any-section.png"
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Section3() {
  return (
    <section className='min-w-screen max-w-screen relative flex justify-center items-cneter flex-col gap-0 xl:px-40 lg:px-32 md:px-24 px-8 py-24 overflow-hidden' id='projects'>
        
        <div className='flex justify-center items-start flex-col min-w-screen h-fit'>
            <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
                <h1 className='text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold' id='about-me'>
                    My Projects
                </h1>
            </Fade>
            <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce className='mt-8 z-10 grid lg:grid-cols-2 grid-cols-1 place-content-center place-items-center'>
                <div className='w-full'>
                    <Card className='bg-background/60 backdrop-blur-2xl border-secondary hover:border-accent hover:bg-background/80 transition-all ease-in-out duration-300'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>Eventopia</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src={projectsSectionImage} alt='' className='aspect-video'></Image>
                            <CardDescription className='text-foreground/60 w-full mt-4'>A website that provides comprehensive listings of current, upcoming, and past college/university events taking place in New Delhi.</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
                
            </Fade>
        </div>
        <div className='absolute lg:min-w-screen lg:h-auto min-h-screen w-full select-none overflow-hidden -z-30'>
            {/* <Image src={section1Image} alt='Section 1' className='w-full h-full visbile hue-rotate-180 contrast-100 invert dark:hue-rotate-0 dark:invert-0'></Image> */}
            <Image src={projectsSectionImage} alt='Projects Section' className='lg:w-screen lg:h-auto h-screen w-full object-cover invert hue-rotate-[160deg] dark:invert-0 dark:hue-rotate-[20deg] contrast-150'></Image>
            {/* <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent to-background" style={{opacity:1}}></div> */}
            <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent
             to-background from-25% via-50% to-75%" style={{opacity:1}}></div>
            <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background " style={{opacity:0.6}}></div>
            <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background dark:bg-transparent" style={{opacity:0.2}}></div>
        </div>
    </section>
  )
}
