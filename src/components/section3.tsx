"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FADE_IN_ANIMATION_DURATION } from "@/lib/utils";
import Link from "next/link";
import eventopiaImage from "@/../public/eventopia-ss.png";
import brainchantImage from "@/../public/brainchant.png";
import newYearCountdownImage from "@/../public/new_year_countdown.png";
import projectsSectionImage from "@/../public/portfolio-website-background-any-section.png";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import MERNLogo from "@/../public/MERN-logo.png";
import TailwindLogo from "@/../public/tailwind.png";
import TopperHQImage from "@/../public/topperhq-ss.png";
import TaskHuntImage from "@/../public/taskhunt-ss.png";
import CredChainImage from "@/../public/credchain-ss.png";
import StudyFlissImage from "@/../public/studyfliss-ss.png";
import { TbBrandMongodb } from "react-icons/tb";
import { SiCloudflare, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJinja } from "react-icons/si";
import { BiMath } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { SiMantine } from "react-icons/si";

export default function Section3() {
  return (
    <section
      className="min-w-screen max-w-screen relative flex justify-center items-cneter flex-col gap-0 xl:px-40 lg:px-32 md:px-24 px-8 py-24 overflow-hidden"
      id="projects"
    >
      <div className="flex justify-center items-start flex-col min-w-screen h-fit">
        <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
          <h1
            className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold"
            id="about-me"
          >
            My Projects
          </h1>
        </Fade>
        <Fade duration={FADE_IN_ANIMATION_DURATION} triggerOnce>
          <div className="pt-16 z-10 flex flex-row flex-wrap items-start justify-start gap-16 xl:[&_div]:max-w-[480px] lg:[&_div]:max-w-full">
            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://studyfliss.com"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    StudyFliss{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={StudyFlissImage}
                  alt="StudyFliss"
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  StudyFliss is a platform consisting of all the resources a
                  student might need in order to live their college years to the
                  fullest.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <RiSupabaseFill className="text-foreground hover:dark:text-primary lg hover:text-accent:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Supabase</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiNextdotjs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">NextJS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoLogoNodejs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Node.JS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiTailwindcss className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Tailwind CSS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiCloudflare className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">
                              Cloudflare R2
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://brainchant.harjot.pro/"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    Brainchant{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={brainchantImage}
                  alt=""
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  Brainchant is a one stop solution for all GGSIPU university
                  students providing useful resources and study material.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <RiSupabaseFill className="text-foreground hover:dark:text-primary lg hover:text-accent:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Supabase</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiNextdotjs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">NextJS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoLogoNodejs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Node.JS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiTailwindcss className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Tailwind CSS</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://credchain.vercel.app"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    CredChain{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={CredChainImage}
                  alt="CredChain"
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  A website where organizations can issue certificates to their
                  users, securely on the blockchain for verification and to
                  prevent fraud.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <RiSupabaseFill className="text-foreground hover:dark:text-primary lg hover:text-accent:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Supabase</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiNextdotjs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">NextJS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoLogoNodejs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Node.JS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiTailwindcss className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Tailwind CSS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <svg
                              className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out fill-foreground dark:hover:fill-primary hover:fill-accent"
                              id="a"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 500 500"
                            >
                              <defs>
                                <style></style>
                              </defs>
                              <path
                                className="b"
                                d="M400.14,163.42h-42.4c-4.94,0-9.64-2.12-12.91-5.81l-17.2-19.43c-2.56-2.9-6.25-4.55-10.11-4.55s-7.55,1.66-10.11,4.55l-14.75,16.67c-4.83,5.45-11.76,8.58-19.04,8.58H41.53c-6.61,18.84-10.92,38.74-12.64,59.38H247.99c3.85,0,7.54-1.57,10.2-4.35l20.4-21.29c2.55-2.66,6.07-4.16,9.75-4.16h.84c3.87,0,7.55,1.66,10.11,4.56l17.19,19.43c3.27,3.7,7.97,5.81,12.91,5.81h178.84c-1.72-20.65-6.03-40.55-12.64-59.38h-95.46Z"
                              />
                              <path
                                className="b"
                                d="M161.48,347.67c3.85,0,7.54-1.57,10.2-4.35l20.4-21.29c2.55-2.66,6.07-4.16,9.75-4.16h.84c3.87,0,7.55,1.66,10.11,4.55l17.19,19.43c3.27,3.7,7.97,5.81,12.91,5.81h242.36c9.08-18.76,15.73-38.89,19.69-59.98h-232.63c-4.94,0-9.64-2.12-12.91-5.81l-17.19-19.43c-2.56-2.9-6.25-4.55-10.11-4.55s-7.55,1.66-10.11,4.55l-14.75,16.67c-4.83,5.45-11.76,8.58-19.05,8.58H32.19c3.96,21.09,10.62,41.22,19.69,59.98h109.59Z"
                              />
                              <path
                                className="b"
                                d="M333.42,98.52c3.85,0,7.54-1.57,10.2-4.35l20.4-21.29c2.55-2.66,6.07-4.16,9.75-4.16h.84c3.87,0,7.55,1.66,10.11,4.56l17.19,19.43c3.27,3.7,7.97,5.81,12.91,5.81h46.09C417.02,40.18,347.21,2.44,268.57,2.44S120.12,40.18,76.22,98.52H333.42Z"
                              />
                              <path
                                className="b"
                                d="M240.84,407.11h-63.03c-4.94,0-9.64-2.12-12.91-5.81l-17.19-19.43c-2.56-2.9-6.25-4.55-10.11-4.55s-7.55,1.66-10.11,4.55l-14.75,16.67c-4.83,5.45-11.76,8.58-19.05,8.58h-.98c43.91,47.05,106.44,76.5,175.87,76.5s131.95-29.45,175.87-76.5H240.84Z"
                              />
                            </svg>
                            {/* <Image src={"/aptos.svg"} alt="Aptos logo" width={40} height={40} className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" /> */}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">
                              Aptos Network
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://taskhunt-frontend.vercel.app"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    TaskHunt{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={TaskHuntImage}
                  alt=""
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  A website where students hunt real-world experience by
                  tackling tasks posted from businesses and earn bounties.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <TbBrandMongodb className="text-foreground hover:dark:text-primary lg hover:text-accent:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">MongoDB</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiExpress className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Express</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <FaReact className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">React</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoLogoNodejs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Node.JS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiTailwindcss className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Tailwind CSS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiMantine className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">MantineUI</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://eventopia.vercel.app"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    Eventopia{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={eventopiaImage}
                  alt=""
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  A website that provides comprehensive listings of current,
                  upcoming, and past college/university events taking place in
                  New Delhi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <TbBrandMongodb className="text-foreground hover:dark:text-primary lg hover:text-accent:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">MongoDB</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiExpress className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Express</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <FaReact className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">React</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoLogoNodejs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Node.JS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiTailwindcss className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Tailwind CSS</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://topper-hq.vercel.app"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    TopperHQ{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={TopperHQImage}
                  alt=""
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  A website which displays all important QnA from each chapter
                  of every subject in a summarised and easy to remember format.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiFlask className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Flask</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiJinja className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">
                              Jinja Templates
                            </p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <FaHtml5 className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">HTML</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <FaCss3Alt className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">CSS</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger>
                            <BiMath className="text-foreground hover:dark:text-primary lg hover:text-accent:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">MathJAX</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-background/20 backdrop-blur-2xl dark:border-accent/60 border-2 border-primary/50 hover:border-primary dark:hover:border-accent hover:shadow-primary/40 dark:hover:bg-background/50 transition-all ease-in-out duration-300 dark:shadow-[0px_15px_50px] shadow-[0px_15px_50px] shadow-primary/20 dark:shadow-secondary/70 dark:hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="xl:text-4xl text-2xl">
                  <Link
                    rel="noopener"
                    target="_blank"
                    href={"https://new-year-countdown-harjot.vercel.app/"}
                    className="underline-offset-2 dark:hover:text-primary hover:text-accent decoration-accent decoration-2 transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:gap-3"
                  >
                    New Year Countdown{" "}
                    <ExternalLinkIcon className="lg:w-6 lg:h-6 w-4 h-4 select-none" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={newYearCountdownImage}
                  alt=""
                  className="object-contain select-none rounded-md"
                  draggable={false}
                ></Image>
                <CardDescription className="text-foreground/80 w-full mt-4 xl:text-lg">
                  A simple new year countdown website which displays the time
                  remaining until the next year arrives.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-start items-start flex-row w-full">
                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="xl:text-3xl text-2xl font-semibold">
                      Tech{" "}
                      <span className="dark:text-primary text-foreground">
                        Stack
                      </span>
                    </h1>
                    <div className="flex flex-row flex-wrap lg:gap-6 gap-4 items-center mt-4">
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger>
                            <FaReact className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">React</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoLogoNodejs className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Node.JS</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <SiTailwindcss className="text-foreground dark:hover:text-primary hover:text-accent lg:w-10 lg:h-10 w-8 h-8 hover:scale-110 transition-all duration-300 ease-in-out" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="lg:text-base text-sm">Tailwind CSS</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </Fade>
      </div>
      <div className="absolute lg:min-w-screen lg:h-auto min-h-screen w-full select-none overflow-hidden -z-30">
        {/* <Image src={section1Image} alt='Section 1' className='w-full h-full visbile hue-rotate-180 contrast-100 invert dark:hue-rotate-0 dark:invert-0'></Image> */}
        <Image
          src={projectsSectionImage}
          alt="Projects Section"
          className="lg:w-screen lg:h-auto h-screen w-full lg:object-cover object-contain invert hue-rotate-[220deg] dark:invert-0 dark:hue-rotate-[20deg] dark:contrast-200 contrast-150 brightness-150"
        ></Image>
        {/* <div className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent to-background" style={{opacity:1}}></div> */}
        <div
          className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-gradient-to-b from-background via-transparent
             to-background from-25% via-50% to-75%"
          style={{ opacity: 1 }}
        ></div>
        <div
          className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background "
          style={{ opacity: 0.6 }}
        ></div>
        <div
          className="absolute inset-0 lg:w-screen lg:h-auto h-screen w-full bg-background dark:bg-transparent"
          style={{ opacity: 0.2 }}
        ></div>
      </div>
    </section>
  );
}
