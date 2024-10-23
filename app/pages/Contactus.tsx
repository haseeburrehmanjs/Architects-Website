import React from 'react'
import ContactImg from '@/app/Assets/Images/contactimg.png'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const Contactus = () => {
    return (
        <section className='container mx-auto p-4 mt-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <form className='flex flex-col gap-4'>
                        <input className='w-[391px] h-[46px] bg-[#F3F3F3] pl-4' type="text" placeholder='Name' />
                        <input className='w-[391px] h-[46px] bg-[#F3F3F3] pl-4' type="text" placeholder='Phone' />
                        <input className='w-[391px] h-[46px] bg-[#F3F3F3] pl-4' type="text" placeholder='E-mail' />
                        <input className='w-[391px] h-[46px] bg-[#F3F3F3] pl-4' type="text" placeholder='Interested In' />
                        <input className='w-[391px] h-[138px] text-start bg-[#F3F3F3] pl-4' type="text" placeholder='Message*' />
                    </form>
                </div>
                <div>
                    <Image width={800} src={ContactImg} alt='contactus' />
                </div>
            </div>
            <div>
                <button className='btn py-3 px-8 mt-10 bg-gray-900 text-white text-[14px] hover:bg-gray-400 hover:text-black flex gap-2 items-center'>ALL PROJECT <FaLongArrowAltRight /></button>
            </div>
        </section>
    )
}

export default Contactus
