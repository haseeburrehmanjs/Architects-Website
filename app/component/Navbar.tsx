import Image from 'next/image'
import React from 'react'
import Logo from '@/app/Assets/Images/Logo.png'

const Navbar = () => {
  return (
    <>
      <section className='container mx-auto p-4'>
        <nav className='flex justify-between items-center'>
            <div>
                <Image src={Logo} alt='logoImage'/>
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li className=''>MAIN</li>
                    <li>GALLERY</li>
                    <li>PROJECTS</li>
                    <li>CERTIFICATION</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
