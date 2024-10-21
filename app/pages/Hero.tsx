import React from 'react'
import HeroImage from '../Assets/Images/hero-image.png'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";



const Hero = () => {
    return (
        <>
            <header className='container mx-auto p-4'>
                <div className='flex font-extralight sm:justify-between items-center flex-wrap-reverse sm:flex-wrap gap-16 justify-center '>
                    <div className='flex flex-col gap-24'>
                        <div className='leading-[55px]'>
                            <h1 className='text-[64px] uppercase font-extralight text-gray-400'>Project</h1>
                            <p className='text-[54px] font-bold'>Lorem</p>
                        </div>
                        <div className='flex gap-3'>
                            <button className='w-[40px] h-[40px] flex items-center justify-center bg-gray-100 hover:bg-gray-400'><FaArrowLeftLong />
                            </button>
                            <button className='w-[40px] h-[40px] flex items-center justify-center bg-gray-100 border-gray-200 border hover:bg-gray-400'><FaLongArrowAltRight /></button>
                        </div>
                    </div>
                    <div>
                        <Image width={700} src={HeroImage} alt='hero-images' />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero
