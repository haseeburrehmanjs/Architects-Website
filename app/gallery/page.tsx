import React from 'react'
import gallery1 from '@/app/Assets/Images/gallery (1).png'
import gallery2 from '@/app/Assets/Images/gallery (2).png'
import gallery3 from '@/app/Assets/Images/gallery (3).png'
import gallery4 from '@/app/Assets/Images/gallery (4).png'
import gallery5 from '@/app/Assets/Images/gallery (5).png'
import gallery6 from '@/app/Assets/Images/gallery (6).png'
import gallery7 from '@/app/Assets/Images/gallery (7).png'
import gallery8 from '@/app/Assets/Images/gallery (8).png'
import gallery9 from '@/app/Assets/Images/gallery (9).png'
import gallery10 from '@/app/Assets/Images/gallery (10).png'
import Image from 'next/image'

const Main = () => {
  return (
    <section className='container mx-auto p-4 mt-10'>
      <div>
        <h1 className='text-5xl text-gray-400'>Photo</h1>
        <h1 className='text-6xl font-bold'>Gallery</h1>
        <hr className='mt-10' />
        <div className='flex justify-between flex-wrap gap-5 mt-10'>
          <Image className='sm:w-[230px] w-[380px]' src={gallery1} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery2} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery3} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery4} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery5} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery6} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery7} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery8} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery9} alt='no-image' />
          <Image className='sm:w-[230px] w-[380px]' src={gallery10} alt='no-image' />
        </div>
      </div>
    </section>
  )
}

export default Main
