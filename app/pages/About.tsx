import Image from 'next/image'
import React from 'react'
import img1 from '@/app/Assets/Images/img1.png'
import img2 from '@/app/Assets/Images/img2.png'
import img3 from '@/app/Assets/Images/img3.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
    return (
        <section className="container mx-auto p-4 mt-10">
            <div className='bg-[#FBFBFB] p-10 flex gap-16 flex-wrap'>
                <div className='gap-3 flex-wrap flex'>
                    <div className='flex flex-col gap-3 hidden sm:flex'>
                        <Image width={270} height={265} src={img1} alt='img1' />
                        <Image width={270} height={140} src={img3} alt='img3' />
                    </div>
                    <Image width={270} height={365} src={img2} alt='img2' />
                </div>
                <div>
                    <h1 className='text-[65px] text-gray-400'>About</h1>
                    <p className='text-[18px] text-gray-600'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and <br /> scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into <br />electronic typesetting, remaining essentially unchanged.</p>
                    <button className='px-10 py-4 flex gap-2 items-center bg-white mt-5 hover:bg-gray-400'>Read More <FaLongArrowAltRight/></button>
                </div>
            </div>
        </section>
    )
}

export default About
