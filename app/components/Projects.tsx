'use client'
import React, { useState, useRef } from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTags from './ProjectTags'
import { motion, useInView } from 'framer-motion'
const projectsData = [
  {
    id: 1,
    title: 'My Portfolio Website',
    description:
      'My portfolio website that showcases my skills, experiences, and projects that reflect my journey in IT industry.',
    image: '/images/projects/portfolio.png',
    tag: ['All', 'Solo'],
    gitUrl: 'https://github.com/Bonnie423/My-Portfolio',
    previewUrl: '/',
    tech_stack: 'Next.js, React, Tailwind, TypeScript.',
  },
  {
    id: 2,
    title: 'Rolly Animal Shelter',
    description:
      'This website enables users to browse and adopt animals. It offers detailed animal profiles, including images and descriptions, allowing users to complete adoption applications via the website.',
    image: '/images/projects/animal-shelter.png',
    tag: ['All', 'Solo'],
    gitUrl: 'https://github.com/Bonnie423/Rolly-Animal-Shelter',
    previewUrl: 'https://rolly-animal-shelter-2023.pushed.nz/',
    tech_stack: 'React, TypeScript, CSS, Node.js, Express.js, knex.js, SQLite.',
  },
  {
    id: 3,
    title: 'VibesVault',
    description:
      'a collaborative music platform where users can create and share playlists with friends, family, or colleagues.',
    image: '/images/projects/playlist.png',
    tag: ['All', 'Group'],
    gitUrl: 'https://github.com/Bonnie423/VIBESVAULT',
    previewUrl: null,
    tech_stack:
      'React, TypeScript, Redix, Node.js, Express.js, knex.js, SQLite, Spotify API, React-Spotify-web-playback.',
  },
  {
    id: 4,
    title: 'Virtual Desk Calendar',
    description:
      'Offering a dynamic display of the date, weather updates, captivating images, and uplifting affirmations',
    image: '/images/projects/calendar.png',
    tag: ['All', 'Group'],
    gitUrl: 'https://github.com/Bonnie423/Virtual-Desk-Calendar',
    previewUrl: null,
    tech_stack: 'React, TypeScript, CSS, Node.js, Express.js, knex.js, WebAPI.',
  },
  {
    id: 5,
    title: 'Todos',
    description: 'A platform designed to help you manage your tasks.',
    image: '/images/projects/todos.png',
    tag: ['All', 'Solo'],
    gitUrl: 'https://github.com/Bonnie423/Todos',
    previewUrl: null,
    tech_stack:
      'React, TypeScript, Bootstrap, Node.js, Express.js, knex.js, SQLite.',
  },
]
const Projects = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  const handleTagChanges = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants ={
    initial: {y:50, opacity:0},
    animate: {y:0, opacity:1}
  }
  return (
    <section id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTags
          onClick={handleTagChanges}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTags
          onClick={handleTagChanges}
          name="Solo"
          isSelected={tag === 'Solo'}
        />
        <ProjectTags
          onClick={handleTagChanges}
          name="Group"
          isSelected={tag === 'Group'}
        />
      </div>

      <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project,index) => (
          <motion.li key={project.id} variants={ cardVariants} initial='initial' animate={isInview? 'animate' : 'initial'}  transition={{duration:0.3 , delay: index * 0.4}}>
            <ProjectsCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech_stack}
             
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
