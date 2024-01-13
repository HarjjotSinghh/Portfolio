"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FADE_IN_ANIMATION_DURATION } from "@/lib/utils";
import Link from "next/link";
import resumeSectionImage from "@/../public/portfolio-website-background-resume-section.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

export default function Section4() {
  return (
    <section
      className="min-w-screen max-w-screen relative flex justify-center items-start flex-col gap-0 xl:px-40 lg:px-32 md:px-24 px-8 py-24 overflow-hidden "
      id="resume"
    >
      <div className="flex justify-start items-start flex-col min-w-screen h-fit max-w-[1920px]">
        <Fade
          duration={FADE_IN_ANIMATION_DURATION}
          triggerOnce
          className="w-full"
        >
          <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold text-left w-full">
            My Resume
          </h1>
        </Fade>
        <Fade
          duration={FADE_IN_ANIMATION_DURATION}
          triggerOnce
          className="mt-6 z-10"
        >
          <div className="flex justify-start lg:items-start items-center lg:flex-col flex-col gap-8 w-full">
            
            <p className="leading-7 xl:text-lg text-base lg:w-3/5 ">
            Explore my career highlights and qualifications in my resume.<br/> Click the button below to download and discover my skills, experiences, and achievements. Let{"'"}s connect and explore potential collaborations!
            </p>
            <a href="/Harjot_Singh_Resume.pdf" download={"Harjot_Singh_Resume"}>
                <Button className="text-xl py-6 px-8" variant="outline">
                Download
                <FiDownload className="ml-2 h-6 w-6 " />
                </Button>
            </a>
            
          </div>
        </Fade>
      </div>
      <div className="absolute lg:min-w-screen lg:h-auto min-h-screen w-full select-none overflow-hidden -z-30  flex-0">
        {/* <Image src={section1Image} alt='Section 1' className='w-full h-full visbile hue-rotate-180 contrast-100 invert dark:hue-rotate-0 dark:invert-0'></Image> */}
        <Image
          src={resumeSectionImage}
          alt="About Section"
          className="lg:w-screen lg:h-auto h-screen w-full object-cover invert hue-rotate-[225deg] dark:invert-0 dark:hue-rotate-[25deg] dark:contrast-150 contrast-[1.75]"
        ></Image>
        {/* <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent to-background" style={{opacity:1}}></div> */}
        <div
          className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent
             to-background from-25% via-50% to-75%"
          style={{ opacity: 1 }}
        ></div>
        <div
          className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background "
          style={{ opacity: 0.1 }}
        ></div>
        <div
          className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background dark:bg-transparent"
          style={{ opacity: 0.5 }}
        ></div>
      </div>
    </section>
  );
}
