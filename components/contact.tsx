'use client'

import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import sendEmail from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

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
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a href='mailto:ishantbhurani@gmail.com' className='underline'>
          ishantbhurani@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async formData => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully!')
        }}
      >
        <input
          type='email'
          name='senderEmail'
          maxLength={500}
          placeholder='Your email'
          required
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <textarea
          name='message'
          maxLength={5000}
          placeholder='Your message'
          required
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
