'use client'
import React from 'react'
import { HomeIcon, PersonIcon, StackIcon, ReaderIcon, EnvelopeClosedIcon} from "@radix-ui/react-icons"
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
    <Fade duration={FADE_IN_ANIMATION_DURATION} delay={FADE_IN_ANIMATION_DELAY} triggerOnce className='fixed top-0 z-[1000]'>
        <div>
            <div className='lg:min-h-screen lg:w-auto w-screen lg:fixed sticky lg:right-0 top-0 flex items-center z-[999] justify-center'>
                <div className='flex justify-center items-center lg:flex-col flex-row lg:pr-2 xl:gap-8 lg:gap-6 gap-4 dark:bg-background/60 bg-background/70  xl:py-12 lg:py-8 pt-2 pb-4 lg:pl-6 lg:rounded-l-3xl rounded-b-3xl lg:rounded-b-none lg:rounded-bl-3xl w-full  backdrop-blur-xl'>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                        <Link href={"#home"}>
                            <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                                <HomeIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                            </Button>
                        </Link>
                        <span className='w-2 h-2 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                        <Link href={"#about-me"}>
                            <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                                <PersonIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                            </Button>
                        </Link>
                        <span className='w-2 h-2 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                        <Link href={"#projects"}>
                            <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                                <StackIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                            </Button>
                        </Link>
                        <span className='w-2 h-2 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                        <Link href={"#resume"}>
                            <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                                <ReaderIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                            </Button>
                        </Link>
                        <span className='w-2 h-2 bg-foreground rounded-full'></span>
                    </div>
                    <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                        <Link href={"#contact-me"}>
                            <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                                <EnvelopeClosedIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                            </Button>
                        </Link>
                        <span className='w-2 h-2 bg-foreground rounded-full'></span>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
  )
}
