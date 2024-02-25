"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FADE_IN_ANIMATION_DURATION } from "@/lib/utils";
import Link from "next/link";
import contactSectionImage from "@/../public/portfolio-website-background-contact-section.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaBehanceSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Section5() {
  return (
    <section
      className="min-w-screen max-w-screen relative flex justify-center items-start flex-col gap-0 xl:px-40 lg:px-32 md:px-24 px-8 py-24 overflow-hidden "
      id="contact-me"
    >
      <div className="flex justify-start items-start flex-col min-w-screen h-fit max-w-[1920px]">
        <Fade
          duration={FADE_IN_ANIMATION_DURATION}
          triggerOnce
          className="w-full"
        >
          <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold text-left w-full">
            Contact Me
          </h1>
        </Fade>
        <Fade
          duration={FADE_IN_ANIMATION_DURATION}
          triggerOnce
          className="mt-6 z-10"
        >
          <div className="flex justify-start lg:items-start items-start lg:flex-col flex-col gap-8 w-full">
            <p className="leading-7 xl:text-lg text-base lg:w-[60%] ">
              Ready to connect? Feel free to reach out via the provided contact
              information.
              <br /> Whether you have a project in mind, want to discuss
              potential collaborations, or just want to say hello, I{"'"}m all
              ears. I look forward to hearing from you soon!
            </p>
            <div className="flex flex-row flex-wrap justify-start items-start lg:w-3/5 w-full lg:gap-8 gap-4 ">
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <IoIosMail className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="mailto:harjjotsinghh@gmail.com"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    harjjotsinghh@gmail.com
                  </p>
                </a>
              </div>
              
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <IoLogoGithub className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="https://github.com/HarjjotSinghh"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    @HarjjotSinghh
                  </p>
                </a>
              </div>
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <FaLinkedin className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="https://linkedin.com/in/HarjjotSinghh"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    @HarjjotSinghh
                  </p>
                </a>
              </div>
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <FaXTwitter className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="https://x.com/HarjjotSinghh"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    @HarjjotSinghh
                  </p>
                </a>
              </div>
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <FaBehanceSquare className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="https://behance.net/harjjot"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    @harjjot
                  </p>
                </a>
              </div>
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <AiFillInstagram className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="https://instagram.com/harjotzlife"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    @harjotzlife
                  </p>
                </a>
              </div>
              <div className="lg:px-6 lg:py-3 px-4 py-2 flex gap-2 justify-center items-center rounded-md border-2 dark:border-accent border-primary lg:shadow-[0px_0px_25px_var(--primary)] shadow-[0px_0px_15px] shadow-primary/20 dark:shadow-primary/20 dark:hover:shadow-accent/50 hover:shadow-primary/40 transition-all duration-300 ease-in-out">
                <FaDiscord className="lg:w-10 lg:h-10 h-6 w-6 text-foreground" />

                <a
                  href="https://discord.com/users/826266498862415902"
                  target="_blank"
                  rel={"noopener norefferer"}
                >
                  <p className="lg:text-lg text-base text-foreground dark:hover:text-accent hover:text-primary transition-all ease-in-out duration-300">
                    @h4r.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="absolute lg:min-w-screen lg:h-auto min-h-screen w-full select-none overflow-hidden -z-30  flex-0">
        {/* <Image src={section1Image} alt='Section 1' className='w-full h-full visbile hue-rotate-180 contrast-100 invert dark:hue-rotate-0 dark:invert-0'></Image> */}
        <Image
          src={contactSectionImage}
          alt="Contact Section"
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
          style={{ opacity: 0.6 }}
        ></div>
      </div>
    </section>
  );
}
