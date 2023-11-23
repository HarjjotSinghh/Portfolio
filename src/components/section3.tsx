"use client"
import React from 'react'
import { Fade } from "react-awesome-reveal"
import { FADE_IN_ANIMATION_DURATION } from '@/lib/utils'
import Link from 'next/link'
import eventopiaImage from "@/../public/eventopia-ss.png"
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
  import { ExternalLinkIcon } from "@radix-ui/react-icons"
  import MERNLogo from "@/../public/MERN-logo.png"
  import TailwindLogo from "@/../public/tailwind.png"
  import TopperHQImage from "@/../public/topperhq-ss.png"


export default function Section3() {
  return (
    <section className='min-w-screen max-w-screen relative flex justify-center items-cneter flex-col gap-0 xl:px-40 lg:px-32 md:px-24 px-8 py-24 overflow-hidden' id='projects'>
        
        <div className='flex justify-center items-start flex-col min-w-screen h-fit'>
            <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
                <h1 className='text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold' id='about-me'>
                    My Projects
                </h1>
            </Fade>
            <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
                
                <div className='pt-16 z-10 grid lg:grid-cols-2 grid-cols-1 place-content-center place-items-center lg:grid-flow-col grid-flow-row gap-16'>
                    <Card className='bg-background/20 backdrop-blur-2xl border-secondary hover:border-accent hover:bg-background/50 transition-all ease-in-out duration-300 shadow-[0px_15px_50px] shadow-secondary/70 hover:shadow-primary/20'>
                        <CardHeader>
                            <CardTitle className='xl:text-4xl text-2xl'>
                                <Link rel='noopener' target='_blank' href={"https://eventopia.vercel.app"} className='underline-offset-auto underline decoration-primary decoration-2 hover:decoration-accent transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3'>
                                    Eventopia <ExternalLinkIcon className='lg:w-6 lg:h-6 w-4 h-4 select-none' />
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src={eventopiaImage} alt='' className='object-contain select-none' draggable={false}></Image>
                            <CardDescription className='text-foreground/80 w-full mt-4 xl:text-lg'>A website that provides comprehensive listings of current, upcoming, and past college/university events taking place in New Delhi.</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <div className='flex justify-start items-start flex-row w-full'>
                                <div className='flex flex-col items-center justify-center gap-8 w-full'>
                                    <h1 className='xl:text-2xl text-xl w-full text-center'>Tech stack used</h1>
                                    <div className='flex gap-4 items-center'>
                                        <Image src={MERNLogo}  draggable={false} alt='MERN Stack Logo' className='select-none xl:h-[100px] h-[60px] w-auto hover:scale-105 transition-all duration-300 ease-in-out'></Image>
                                        <Image src={TailwindLogo}  draggable={false} alt='Tailwind CSS Logo' className='select-none xl:h-[50px] h-[30px] w-auto hover:scale-105 transition-all duration-300 ease-in-out'></Image>
                                    </div>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className='bg-background/20 backdrop-blur-2xl border-secondary hover:border-accent hover:bg-background/50 transition-all ease-in-out duration-300 shadow-[0px_15px_50px] shadow-secondary/70 hover:shadow-primary/20'>
                        <CardHeader>
                            <CardTitle className='xl:text-4xl text-2xl'>
                                <Link rel='noopener' target='_blank' href={"https://topper-hq.vercel.app"} className='underline-offset-auto underline decoration-primary decoration-2 hover:decoration-accent transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3'>
                                    TopperHQ <ExternalLinkIcon className='lg:w-6 lg:h-6 w-4 h-4 select-none' />
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src={TopperHQImage} alt='' className='object-contain select-none' draggable={false}></Image>
                            <CardDescription className='text-foreground/80 w-full mt-4 xl:text-lg'>A website which displays all important question/answers from each chapter of every subject in a summarised and easy to remember format.</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <div className='flex justify-start items-start flex-row w-full'>
                                <div className='flex flex-col items-center justify-center gap-8 w-full'>
                                    <h1 className='xl:text-2xl text-xl w-full text-center'>Tech stack used</h1>
                                    <div className='flex gap-4 items-center'>
                                        <Image src={MERNLogo}  draggable={false} alt='MERN Stack Logo' className='select-none xl:h-[100px] h-[60px] w-auto hover:scale-105 transition-all duration-300 ease-in-out'></Image>
                                        <Image src={TailwindLogo}  draggable={false} alt='Tailwind CSS Logo' className='select-none xl:h-[50px] h-[30px] w-auto hover:scale-105 transition-all duration-300 ease-in-out'></Image>
                                    </div>
                                </div>
                            </div>
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
