import React from 'react'

export default function Section2() {
  return (
    <section className='min-w-screen flex justify-start items-start flex-col gap-0 xl:px-32 lg:px-24 md:px-16 px-8 py-16'>
        <h1 className='text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-accent to-primary inline-block text-transparent bg-clip-text font-bold'>
            About Me
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 xl:text-lg max-w-1/2">
            I started my web development journey using the Flask web framework in Python, back in class 11th. Shortly after, I switched over to the MERN stack. As of now, I have knowledge of many web frameworks such as Flask, React, NextJs and Svelte. I have multiple projects using these 4 frameworks and I am always willing to learn a new and distinct web framework.
            <br/>
            <br/>
            Along with my web development skills, I have freelanced as a graphic designer for many years. I have knowledge of software like Adobe Photoshop, Adobe Lightroom, Adobe After Effects, Blender, etc. So I can also contribute to the design aspect of the respective project which I shall be assigned.
            <br/>
            <br/>
            I strongly believe in the concept of constructive criticism, so I am always open to feedback from the community and I would also give my honest feedback to our community.
        </p>
    </section>
  )
}
