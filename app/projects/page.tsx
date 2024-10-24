import React from 'react'
import OurProject1 from '@/app/Assets/Images/ourProjects (1).png'
import OurProject2 from '@/app/Assets/Images/ourProjects (2).png'
import OurProject3 from '@/app/Assets/Images/ourProjects (3).png'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link'

const OurProjects = () => {
  return (
    <section className='container mx-auto p-4'>
      <div>
        <h1 className='text-5xl text-gray-400'>Our</h1>
        <h1 className='text-6xl font-bold'>Projects</h1>
        <hr className='mt-10' />
        <div>
          <div className='w-[100%] mt-10 bg-gray-100 flex flex-wrap gap-10 items-center'>
            <div>
              <Image src={OurProject3} alt='our-projects' />
            </div>
            <div className='flex flex-col sm:gap-10 gap-7 p-4'>
              <div>
                <h1 className='text-6xl text-gray-400'>Sample Project</h1>
              </div>
              <div>
                <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever<br /> since the 1500s, when an unknown printer took<br /> a galley of type and scrambled it to make<br /> a type specimen book.</p>
              </div>
              <div>
                <Link href={'/projects/singleproject'}>
                  <button className='btn py-3 px-8 bg-gray-900 text-white text-[14px] hover:bg-gray-400 hover:text-black flex gap-2 items-center'>VIEW MORE <FaLongArrowAltRight /></button>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-[100%] mt-10 bg-gray-100 flex flex-wrap gap-10 items-center'>
            <div>
              <Image src={OurProject2} alt='our-projects' />
            </div>
            <div className='flex flex-col sm:gap-10 gap-7 p-4'>
              <div>
                <h1 className='text-6xl text-gray-400'>Sample Project</h1>
              </div>
              <div className=''>
                <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever<br /> since the 1500s, when an unknown printer took<br /> a galley of type and scrambled it to make<br /> a type specimen book.</p>
              </div>
              <div>
                <Link href={'/projects/singleproject'}>
                  <button className='btn py-3 px-8 bg-gray-900 text-white text-[14px] hover:bg-gray-400 hover:text-black flex gap-2 items-center'>VIEW MORE <FaLongArrowAltRight /></button>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-[100%] mt-10 bg-gray-100 flex flex-wrap gap-10 items-center'>
            <div>
              <Image src={OurProject1} alt='our-projects' />
            </div>
            <div className='flex flex-col sm:gap-10 gap-7 p-4'>
              <div>
                <h1 className='text-6xl text-gray-400'>Sample Project</h1>
              </div>
              <div>
                <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever<br /> since the 1500s, when an unknown printer took<br /> a galley of type and scrambled it to make<br /> a type specimen book.</p>
              </div>
              <div>
                <Link href={'/projects/singleproject'}>
                  <button className='btn py-3 px-8 bg-gray-900 text-white text-[14px] hover:bg-gray-400 hover:text-black flex gap-2 items-center'>VIEW MORE <FaLongArrowAltRight /></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProjects
