'use client'
import React from 'react'
import { FaHome, FaEnvelope, FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoReader } from "react-icons/io5";
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import SideNavbarStatic from '@/components/side-navbar-static'
import { Fade } from "react-awesome-reveal"
import { FADE_IN_ANIMATION_DELAY, FADE_IN_ANIMATION_DURATION } from '@/lib/utils'
import Link from 'next/link'

export default function SideNavbar() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);
    if (!hasMounted) {
        return <SideNavbarStatic/>
    }
  return (
    <Fade duration={FADE_IN_ANIMATION_DURATION} delay={FADE_IN_ANIMATION_DELAY} triggerOnce className='fixed lg:top-0 bottom-0 z-[1000]'>
        <div>
            <div className='lg:min-h-screen lg:w-auto w-screen lg:fixed sticky lg:right-0 flex items-center z-[999] justify-center'>
                <div className='flex justify-center items-center lg:flex-col flex-row lg:pr-2 xl:gap-4 lg:gap-4 gap-4 lg:dark:bg-background/60 lg:bg-background/70 bg-background/90 lg:border-y-2 lg:border-l-2 border-t-2 xl:py-12 lg:py-8 pt-4 pb-2 lg:pl-5 lg:rounded-l-3xl lg:rounded-tr-none rounded-t-3xl lg:rounded-b-none lg:rounded-bl-3xl w-full  backdrop-blur-xl dark:border-accent border-primary'>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col'>
                        <Link href={"#home"}>
                            <Button className='hover:scale-110 duration-200 transition-all ease-in-out xl:px-4 xl:py-7 px-3 py-5 rounded-full border-2 dark:border-accent border-primary' variant={"link"} >
                                <FaHome className='xl:w-6 xl:h-6 w-4 h-4 text-foreground opacity-95'/>
                            </Button>
                        </Link>
                        <span className='lg:w-2 lg:h-2 w-1.5 h-1.5 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col'>
                        <Link href={"#about-me"}>
                            <Button className='hover:scale-110 duration-200 transition-all ease-in-out xl:px-4 xl:py-7 px-3 py-5 rounded-full border-2 dark:border-accent border-primary' variant={"link"} >
                                <FaUser className='xl:w-6 xl:h-6 w-4 h-4 text-foreground opacity-95'/>
                            </Button>
                        </Link>
                        <span className='lg:w-2 lg:h-2 w-1.5 h-1.5 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col'>
                        <Link href={"#projects"}>
                            <Button className='hover:scale-110 duration-200 transition-all ease-in-out xl:px-4 xl:py-7 px-3 py-5 rounded-full border-2 dark:border-accent border-primary' variant={"link"} >
                                <BsStack className='xl:w-6 xl:h-6 w-4 h-4 text-foreground opacity-95'/>
                            </Button>
                        </Link>
                        <span className='lg:w-2 lg:h-2 w-1.5 h-1.5 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col'>
                        <Link href={"#resume"}>
                            <Button className='hover:scale-110 duration-200 transition-all ease-in-out xl:px-4 xl:py-7 px-3 py-5 rounded-full border-2 dark:border-accent border-primary' variant={"link"} >
                                <IoReader className='xl:w-6 xl:h-6 w-4 h-4 text-foreground opacity-95'/>
                            </Button>
                        </Link>
                        <span className='lg:w-2 lg:h-2 w-1.5 h-1.5 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col'>
                        <Link href={"#contact-me"}>
                            <Button className='hover:scale-110 duration-200 transition-all ease-in-out xl:px-4 xl:py-7 px-3 py-5 rounded-full border-2 dark:border-accent border-primary' variant={"link"} >
                                <FaEnvelope className='xl:w-6 xl:h-6 w-4 h-4 text-foreground opacity-95'/>
                            </Button>
                        </Link>
                        <span className='lg:w-2 lg:h-2 w-1.5 h-1.5 bg-foreground rounded-full'></span>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
  )
}
