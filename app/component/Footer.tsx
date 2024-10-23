import React from 'react'
import FooterLogo from '@/app/Assets/Images/footerLogo.png'
import Image from 'next/image'
import Link from 'next/link'

import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";






const Footer = () => {
    return (
        <section className='bg-[#2c2c2c] w-[100%] p-16 mt-10'>
            <div className='flex justify-between'>
                <div>
                    <Image src={FooterLogo} alt='footerLogo' />
                </div>
                <div>
                    <ul className='text-white text-[18px] leading-[45px]'>
                        <li className='text-[20px] font-semibold'><Link href={'/'}>Information</Link></li>
                        <li className='mt-5'><Link href={'/'}>Main</Link></li>
                        <li><Link href={'/'}>Gallery</Link></li>
                        <li><Link href={'/'}>Projects</Link></li>
                        <li><Link href={'/'}>Certifications</Link></li>
                        <li><Link href={'/'}>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='text-white text-[18px] leading-[60px]'>
                        <li className='text-[20px] font-semibold'><Link href={'/'}>Contact</Link></li>
                        <li className='mt-5 leading-6'><Link className='flex gap-2' href={'/'}><IoLocationOutline className='mt-1' />
                            1234 Sample Street <br />
                            Austin Texas 78704</Link></li>
                        <li><Link className='flex gap-2 items-center' href={'/'}><FiPhone />
                            512.333.2222</Link></li>
                        <li><Link className='flex items-center gap-2' href={'/'}><MdOutlineMail />sampleemail@gmail.com</Link></li>

                    </ul>
                </div>
                <div>
                    <ul className='text-white text-[18px]'>
                        <li className='text-[20px] font-semibold'><Link href={'/'}>Social Media</Link></li>
                        <div className='flex gap-10 mt-6'>
                        <li className=''><Link href={'/'}><FaFacebookF /></Link></li>
                        <li><Link href={'/'}><FaTwitter /></Link></li>
                        <li><Link href={'/'}><FaLinkedin /></Link></li>
                        <li><Link href={'/'}><FaPinterestP /></Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
