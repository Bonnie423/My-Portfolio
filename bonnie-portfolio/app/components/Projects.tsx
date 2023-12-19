'use client'
import React, { useState } from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTags from './ProjectTags'
const projectsData = [
  {
    id: 1,
    title: 'My Portfolio Website',
    description:
      'My portfolio website that showcases my skills, experiences, and projects that reflect my journey in IT industry.',
    image: '/images/projects/portfolio.png',
    tag: ['All', 'Solo'],
    gitUrl: '/',
    previewUrl: '/'
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
  },
  {
    id: 3,
    title: 'VibesVault',
    description:
      'a collaborative music platform where users can create and share playlists with friends, family, or colleagues.',
    image: '/images/projects/playlist.png',
    tag: ['All', 'Group'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Virtual Desk Calendar',
    description:
      'Offering a dynamic display of the date, weather updates, captivating images, and uplifting affirmations',
    image: '/images/projects/calendar.png',
    tag: ['All', 'Group'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Todos',
    description: 'A platform designed to help you manage your tasks.',
    image: '/images/projects/todos.png',
    tag: ['All', 'Solo'],
    gitUrl: '/',
    previewUrl: '/',
  },
]
const Projects = () => {
  const [tag, setTag] = useState('All')
  const handleTagChanges = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )
  return (
    <section>
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

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects
