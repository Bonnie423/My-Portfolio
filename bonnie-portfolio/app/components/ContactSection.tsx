import React from 'react'
import GithubIcon from '../../public/github-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'


const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ABD7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Bonnie423" target='blank'>
          <Image src={GithubIcon} alt="Github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/bonnie-wang-3887b1248/" target='blank'>
            <Image src={LinkedinIcon} alt="Linkedin icon" />
          </Link>
        </div>
      </div>
      {/* <div className='text-white'>
        <h5>Contact me</h5>
        <p>Email: bonnie.wang.423@gmail.com</p>
      </div> */}
    </section>
  )
}

export default ContactSection
