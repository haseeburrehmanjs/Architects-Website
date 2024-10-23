import React from 'react'
import box1 from '@/app/Assets/Images/box1.png'
import box2 from '@/app/Assets/Images/box2.png'
import box3 from '@/app/Assets/Images/box3.png'
import box4 from '@/app/Assets/Images/box4.png'
import box5 from '@/app/Assets/Images/box5.png'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const Project = () => {
    return (
        <section className='container mx-auto p-4 mt-10'>
            <h1 className='text-6xl text-gray-400'>Our Projects</h1>
            <div className='mt-10'>
                <div className='flex justify-between flex-wrap'>
                    <Image width={620} src={box1} alt='box1' />
                    <Image width={620} src={box2} alt='box1' />
                </div>
                <div className='flex justify-between mt-2 flex-wrap'>
                    <Image width={350} src={box3} alt='box1' />
                    <Image width={510} src={box4} alt='box1' />
                    <Image src={box5} alt='box1' />
                </div>
            </div>
            <div className='flex justify-end mt-5'>
            <button className='btn py-3 px-8 mt-5 bg-gray-900 text-white text-[14px] hover:bg-gray-400 hover:text-black flex gap-2 items-center'>ALL PROJECT <FaLongArrowAltRight/></button>
            </div>
        </section>
    )
}

export default Project
