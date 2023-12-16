import React from 'react'
import Image from 'next/image'

const HeadSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-txl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-700 via-teal-500 to-pink-500">Hi, I&apos;m </span>
            Bonnie Wang
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Looking for my next opportunity to make a change. The Coding way.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-700 via-teal-500 to-pink-500 hover:bg-slate-200 text-white ">
              Hire Me
            </button>
            <button className="px-1 py-3 w-full sm:w-fit rounded-full  bg-transparent bg-gradient-to-br from-teal-700 via-teal-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5'>Downlocad CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
            <Image
              src="/images/githubpro.jpg"
              alt="Bonnie"
              width={200}
              height={200}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadSection
