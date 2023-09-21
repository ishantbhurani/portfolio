'use client'

import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        My journey into tech started back in 2014 when I was first exposed to
        the <span className='font-bold'>Arduino microcontrollers</span>. Within
        the next 1 year, I was{' '}
        <span className='font-bold'>
          teaching basic electronics and Arduino
        </span>
        , working on{' '}
        <span className='font-bold'>IoT products (Home Automation)</span>, and
        learning some <span className='italic'>Java</span>. I have been a
        part-time <span className='italic'>freelancer</span> for a few years
        now. I have worked in different fields within tech, such as{' '}
        <span className='font-bold'>embedded systems</span> development,{' '}
        <span className='font-bold'>Internet of Things (IoT)</span> development,
        native <span className='font-bold'>Android</span> development, technical{' '}
        <span className='font-bold'>teaching</span>, and{' '}
        <span className='font-bold'>Python</span> development. I have been
        exploring <span className='italic'>web development</span> for the past
        two years. My <span className='italic'>core stack</span> is{' '}
        <span className='font-bold'>
          MERN (MongoDB, Express, React, Node.js)
        </span>
        . I'm also familiar with{' '}
        <span className='font-bold'>
          TypeScript, Tailwind, Redux, and Firebase.
        </span>
      </p>

      <p className='mb-3'>
        I am a <span className='italic'>self-taught</span> developer and I enjoy
        conquering complex challenges. After working with different
        technologies, I can say that my{' '}
        <span className='font-bold'>most important skill</span> is the ability
        to <span className='font-bold'>look at the bigger picture</span> of the
        development process and understand how things fit together at the end.
      </p>
      <p>
        When I'm not coding, I enjoy watching movies, vibing to old songs, and
        annoying my little brother.
      </p>
    </motion.section>
  )
}
