'use client'

import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 scroll-mt-28 w-[min(100%,38rem)] text-center sm:mb-28'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{' '}
        <a href='mailto:ishantbhurani@gmail.com' className='underline'>
          ishantbhurani@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form className='mt-10 flex flex-col'>
        <input
          type='email'
          placeholder='Your email'
          className='h-14 px-4 rounded-lg borderBlack'
        />
        <textarea
          placeholder='Your message'
          className='h-52 my-3 rounded-lg borderBlack p-4'
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  )
}
