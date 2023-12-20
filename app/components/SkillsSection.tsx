import React from 'react'

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
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {skillsData.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-xl font-bold">{skill.skill1}</h2>
              <p className="text-[#ADB7BE] text-base">{skill.skill2}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection
