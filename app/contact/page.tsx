import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Map from '@/app/Assets/Images/map.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='container mx-auto p-4 mt-10'>
            <div className='flex justify-between items-center flex-wrap gap-10'>
                <div className='flex flex-col gap-10'>
                    <div>
                        <h1 className='text-5xl text-gray-400'>Contact</h1>
                        <h1 className='text-5xl font-bold'>Information</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>Company Name</h1>
                        <p className='text-gray-500'>1234 Sample Street Austin Texas 76401</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>512.333.2222</h1>
                        <p className='text-gray-500'>sampleemail@gmail.com</p>
                    </div>
                    <div>
                        <Link href={'/projects/singleproject'}>
                            <button className='btn py-3 px-8 bg-gray-900 text-white text-[14px] hover:bg-gray-400 hover:text-black flex gap-2 items-center'>VIEW MORE <FaLongArrowAltRight /></button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={Map} alt='map'/>
                </div>
            </div>
        </section>
    )
}

export default Contact
