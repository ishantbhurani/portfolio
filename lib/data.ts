import React from 'react'
import { LuCircuitBoard } from 'react-icons/lu'
import { SiArduino } from 'react-icons/si'
import { IoHardwareChipOutline } from 'react-icons/io5'
import moneytrackerImg from '@/public/moneytrackerImg.png'
import deluxxeImg from '@/public/deluxxeImg.png'
import superchatImg from '@/public/superchatImg.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  // {
  //   name: 'Experience',
  //   hash: '#experience',
  // },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Instructor',
    location: 'Delhi, IN',
    description:
      'I developed projects based on electronics and Arduino microcontrollers to aid with conducting educational workshops in different schools across Delhi. I also developed custom Arduino-based microcontroller boards.',
    icon: React.createElement(SiArduino),
    date: '2014 - 2018',
  },
  {
    title: 'Product Developer',
    location: 'Remote',
    description:
      'I developed an IoT (Internet of Things) Home Automation system. I was also involved in various product development life-cycle events including - PCB designing, hardware development, software development, testing, debugging, and installation.',
    icon: React.createElement(LuCircuitBoard),
    date: '2017 - 2018',
  },
  {
    title: 'Hardware & Software Developer',
    location: 'Remote',
    description:
      'Played role in crucial product development stages such as market research, initial circuit design, hardware development, firmware development, debugging, and testing. Worked with ESP8266, Mongoose OS, Firebase, and Arduino.',
    icon: React.createElement(IoHardwareChipOutline),
    date: '2017 - 2019',
  },
] as const

export const projectsData = [
  {
    title: 'Money Tracker',
    description:
      'A fully responsive MERN stack app to track your daily expenses. It supports JWT based email & password authentication.',
    tags: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind',
      'TypeScript',
    ],
    url: 'https://money-tracker-client.netlify.app',
    imageUrl: moneytrackerImg,
  },
  {
    title: 'DeLuxxe',
    description:
      'A fully responsive e-commerce app. It support Google authentication. It has a product carousel, products list, and slide-in cart modal.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    url: 'https://deluxxe.netlify.app',
    imageUrl: deluxxeImg,
  },
  {
    title: 'SuperChat',
    description:
      'A fully responsive single-room chat app. It support Google authentication. It scrolls automatically when a new message arrives.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    url: 'https://superchat-ishant.netlify.app',
    imageUrl: superchatImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind',
  'Redux',
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'Python',
  'Git',
  'Firebase',
  'Postman',
  'Axios',
  'Arduino',
  'Internet of Things (IoT)',
] as const
