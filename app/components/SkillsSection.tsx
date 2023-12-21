"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const skillsData = [
  {
    skill1: 'Next.js',
    skill2: 'React',
  },
  {
    skill1: 'TypeScript',
    skill2: 'JavaScript',
  },
  {
    skill1: 'Node.js',
    skill2: 'Express.js',
  },
  {
    skill1: 'SQLite',
    skill2: 'Knex.js',
  },
  {
    skill1: 'Jest',
    skill2: 'Vitest',
  },
  {
    skill1: 'Tailwind',
    skill2: 'CSS',
  },
]
const SkillsSection = () => {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  const cardVariants ={
    initial: {y:50, opacity:0},
    animate: {y:0, opacity:1}
  }
  return (
    <div ref={ref} className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              key={index}
              variants={ cardVariants} initial='initial' animate={isInview? 'animate' : 'initial'}  transition={{duration:0.3 , delay: index * 0.4}}
              className="flex flex-col items-center justify-center mx-4 sm:my-0"
            >
              <h2 className="text-white text-xl font-bold flex flex-row">{skill.skill1}</h2>
              <p className="text-[#ADB7BE] text-base">{skill.skill2}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection
