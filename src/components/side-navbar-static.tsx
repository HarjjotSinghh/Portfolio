import React from 'react'
import { HomeIcon, PersonIcon, StackIcon, ReaderIcon, EnvelopeClosedIcon} from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button'

export default function SideNavbarStatic() {
  return (
    <div className='lg:min-h-screen lg:w-auto w-screen fixed lg:right-0 top-0 flex items-center justify-center z-20 lg:px-0 px-2'>
        <div className='flex justify-center items-center lg:flex-col flex-row lg:pr-2 xl:gap-8 lg:gap-6 gap-4 dark:bg-foreground/[3%] bg-primary/5 xl:py-12 lg:py-8 pt-2 pb-4 lg:pl-6 lg:rounded-l-3xl rounded-b-3xl w-full'>
            <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                    <HomeIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                </Button>
                <span className='w-2 h-2 bg-foreground rounded-full'></span>
            </div>
            <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                    <PersonIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                </Button>
                <span className='w-2 h-2 bg-foreground rounded-full'></span>
            </div>
            <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                    <StackIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                </Button>
                <span className='w-2 h-2 bg-foreground rounded-full'></span>
            </div>
            <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                    <ReaderIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                </Button>
                <span className='w-2 h-2 bg-foreground rounded-full'></span>
            </div>
            <div className='flex justify-center items-center gap-2 lg:flex-row flex-col-reverse'>
                <Button className='hover:scale-110 transition-all ease-in-out xl:px-4 xl:py-8 px-3 py-6 rounded-full shadow-[0px_4px_15px] dark:shadow-secondary/40 shadow-primary/10' variant={"secondary"} >
                    <EnvelopeClosedIcon className='xl:w-8 xl:h-8 w-6 h-6 text-foreground'/>
                </Button>
                <span className='w-2 h-2 bg-foreground rounded-full'></span>
            </div>
        </div>
    </div >
  )
}
