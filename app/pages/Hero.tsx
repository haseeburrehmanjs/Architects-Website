import React from 'react'
import HeroImage from '../Assets/Images/hero-image.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <header className='container mx-auto p-4'>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className='leading-[55px]'>
                        <h1 className='text-[64px] uppercase font-extralight text-gray-400'>Project</h1>
                        <p className='text-[54px] font-bold'>Lorem</p>
                    </div>
                    <div>
                        <Image width={700} src={HeroImage} alt='hero-images'/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero
