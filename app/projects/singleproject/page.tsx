import Image from 'next/image'
import React from 'react'
import Singalimg1 from '@/app/Assets/Images/singalproject (1).png'
import Singalimg2 from '@/app/Assets/Images/singalproject (2).png'
import Singalimg3 from '@/app/Assets/Images/singalproject (3).png'

const SingalProject = () => {
  return (
    <section className='container mx-auto p-4'>
      <div>
        <h1 className='text-5xl text-gray-400'>Sample</h1>
        <h1 className='text-6xl font-bold'>Project 1</h1>
        <hr className='mt-10' />
        <div className='flex flex-col gap-10'>
          <div>
            <Image className='w-[100%]' src={Singalimg1} alt='singalproject' />
          </div>
          <div className='flex gap-10 flex-wrap-reverse'>
            <div>
              <Image src={Singalimg2} alt='singalproject' />
            </div>
            <div className='w-[900px]'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and br typesetting industry. Lorem Ipsum has been the br industry's standard dummy text ever since the 1500s, br when an unknown printer took a galley of type and br scrambled it to make a type specimen book. It has br survived not only five centuries, but also the leap br into electronic typesetting, remaining essentially br unchanged. It was popularised in the 1960s with the br release of Letraset sheets containing Lorem Ipsum br passages, and more recently with desktop publishing br software like Aldus PageMaker including versions of br Lorem Ipsum. Lorem Ipsum is simply dummy text of thebr  printing and typesetting industry. Lorem Ipsum has beenbr  the industry's standard dummy text ever since the br 1500s, when an unknown printer took a galley of type br and scrambled it to make a type specimen book. It has br survived not only five centuries, but also the leap br into electronic typesetting, remaining essentially br unchanged. It was popularised in the 1960s with the br release of Letraset sheets containing Lorem Ipsum br passages, and more recently with desktop publishing br software like Aldus PageMaker including versions of br Lorem Ipsum. Lorem Ipsum is simply dummy text of the br printing and typesetting industry. Lorem Ipsum has beenbr  the industry's standard dummy text ever since the br 1500s, when an unknown printer took a galley of type br and scrambled it to make a type specimen book. It has br survived not only five centuries, but also the leap into electronic typesetting, remaining essentially br unchanged. It was popularised in the 1960s with the br release of Letraset sheets containing Lorem Ipsum br passages, and more recently with.
              </p>
            </div>
          </div>
          <div>
            <Image className='w-[100%]' src={Singalimg3} alt='singalproject' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingalProject
