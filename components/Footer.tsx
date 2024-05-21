import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaCopyright, FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>
        
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span> digital presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:suyashagnihotri988@gmail.com" className="">
              <MagicButton 
              title="Let&apos; get in touch"
              icon={<FaLocationArrow/>}
              position='right'
              />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col items-center justify-between">
          <p className="md:text-base text-sm md:font-normal font-light flex">Copyright <FaCopyright className='m-1 items-center text-center'/> 2024 Suyash Agnihotri</p>
         
          <div className="flex items-center md:gap-3 gap-6">
           {socialMedia.map((profile) => (
            <div key={profile.id} className="mt-1 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={profile.link}>
              <img src={profile.img} alt={profile.img} width={20} height={20} className="" />
              </a>
            </div>
           ))}
          </div>
        </div>
       
    </footer>
  )
}

export default Footer