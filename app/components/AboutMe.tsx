'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Problem-Solving</li>
        <li>Communication</li>
        <li>Time Management</li>
        <li>Ability to work independently or as part of a team.</li>
        <li>Strong work ethic and positive attitude</li>
      </ul>
    ),
  },
  {
    title: 'education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>
          New Zealand Certificate in Applied Software Development (Level 6)
        </li>
        <li>
          New Zealand Certificate in Information Technology Essentials (Level 4)
        </li>
      </ul>
    ),
  },
  {
    title: 'certificate',
    id: 'certificate',
    content: (
      <ul className="list-disc pl-2">
        <li>
        Microsoft Certified: Azure Fundamentals
        </li>
        
      </ul>
    ),
  },
  {
    title: 'experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2">
        <li>
          Customer Service Manager, Colliers International – Shenzhen, China.
          08/2018-03/2019
        </li>
        <li>
          Reception Supervisor, China Resources Property Limited – Shenzhen.
          05/2016-08/2018
        </li>
        <li>
          Guest Service Manager, Royal Suites and Towers Hotel – Shenzhen,
          China. 08/2012-09/2016
        </li>
      </ul>
    ),
  },
]

const AboutMe = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-6 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/coding.jpg"
          alt="computer with vscode"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="text-base lg:text-lg">
            <h4 className="mb-4">
              🚀 Passionate Full Stack Developer | Lifelong Learner
            </h4>

            <p className="mb-1">
              I&apos;m a dedicated full stack developer with a comprehensive
              skill set in both frontend and backend technologies. My journey
              into the world of coding began with a curiosity to understand how
              technology shapes our digital landscape, and it has evolved into a
              passion for creating seamless, user-centric web applications.
            </p>
            <p className="mb-1">
              I am proficient in TypeScript, React, Next.js, Node.js, and SQL
              database. I thrive on solving complex problems through innovative
              and efficient coding practices.
            </p>
            <p className="mb-2">
              I thrive in both team collaborations and working independently. My
              adaptable nature allows me to contribute effectively to a team
              environment while also being self-driven in solo projects.
            </p>
            <p>
              When not immersed in coding, you&apos;ll find me pursuing my
              passion for running and hiking, exploring the great outdoors. As a
              travel lover, I cherish learning about different cultures and
              connecting with people from diverse backgrounds.
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              isActive={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              isActive={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certificate')}
              isActive={tab === 'certificate'}
            >
              Certificate
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              isActive={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((data) => data.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
