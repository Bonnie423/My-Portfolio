'use client'
import React,{useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
{
  title: 'skills',
  id: 'skills',
  content: (
    <ul className='list-disc pl-2'>
      <li>HTML&CSS</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>SQL</li>
      <li>Jest</li>
      <li>Next.js</li>
    </ul>
  )
},
{
  title: 'education',
  id: 'education',
  content: (
    <ul className='list-disc pl-2'>
      <li>New Zealand Certificate in Applied Software Development (Level 6)</li>
      <li>New Zealand Certificate in Information Technology Essentials (Level 4)</li>
      
    </ul>
  )
},
{
  title: 'experience',
  id: 'experience',
  content: (
    <ul className='list-disc pl-2'>
      <li>Customer Service Manager, Colliers International – Shenzhen, China. 08/2018-03/2019</li>
      <li>Reception Supervisor, China Resources Property Management – Shenzhen. 05/2016-08/2018</li>
      <li>Guest Service Manager, Royal Suites and Towers Hotel – Shenzhen, China. 08/2012-09/2016</li>
      
    </ul>
  )
},
]

const AboutMe = () => {
  const [tab, setTab]= useState('skills')
  const [isPending, startTransition]=useTransition()
  const handleTabChange=(id:string)=>{
startTransition(()=>{
  setTab(id)
})
  }
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/dom.jpg"
          alt="computer with vscode"
          width={400}
          height={400}
        />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <div className='text-base lg:text-lg'>
          <p>
            I&apos;m a dedicated Full Stack Developer with a skill set in both
            frontend and backend technologies.
          </p>
          <p>
            I am proficient in TypeScript, React , node.js and SQL databases. I
            thrive on solving complex problems through innovative and efficient
            coding practices. I am committed to delivering highquality
            solutions.
          </p>
          </div>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={()=>handleTabChange('skills')} isActive={tab==='skills'}>Skills</TabButton>
            <TabButton selectTab={()=>handleTabChange('education')} isActive={tab==='education'}>Education</TabButton>
            <TabButton selectTab={()=>handleTabChange('experience')} isActive={tab==='experience'}>Experience</TabButton>
            
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((data)=>data.id===tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
