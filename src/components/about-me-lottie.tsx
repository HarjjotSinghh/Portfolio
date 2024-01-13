"use client"
import React from "react";
import Lottie from "lottie-react";
import aboutMeLottieAnimation from "@/../public/about_me_animation.json";

export default function AboutMeLottie(props: any) {
    return (<Lottie animationData={aboutMeLottieAnimation} loop={true} {...props} speed={0.5}/>)
};