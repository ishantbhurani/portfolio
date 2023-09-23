'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { Chrono } from 'react-chrono'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

export default function Experience() {
  // const { ref } = useSectionInView('Experience', 0.5)

  return (
    <section
      id='experience'
      // ref={ref}
      className='mb-28 scroll-mt-28 sm:mb-40'
    >
      <SectionHeading>My experience</SectionHeading>
      <Chrono
        items={experiencesData
          .map(item => ({
            title: item.date,
            cardTitle: item.title,
            cardSubtitle: item.location,
            cardDetailedText: item.description,
          }))
          .reverse()}
        mode='VERTICAL_ALTERNATING'
        theme={{
          primary: '#e5e7eb',
          secondary: 'white',
          cardBgColor: '#f3f4f6',
          titleColor: '#374151',
          titleColorActive: '#374151',
          cardTitleColor: 'black',
        }}
      >
        <div className='chrono-icons'>
          {experiencesData.map((item, index) => (
            <div key={index} className='text-2xl bg-white'>
              {item.icon}
            </div>
          ))}
        </div>
      </Chrono>
    </section>
  )
}
