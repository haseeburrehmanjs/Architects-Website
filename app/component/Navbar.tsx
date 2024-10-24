import Image from 'next/image'
import React from 'react'
import Logo from '@/app/Assets/Images/Logo.png'
import Link from 'next/link'
import MenuPopupState from './Menu'

const Navbar = () => {
  return (
    <>
      <section className='container mx-auto p-4'>
        <nav className='flex justify-between items-center'>
          <div>
            <Image src={Logo} alt='logoImage' />
          </div>
          <div>
            <ul className='hidden sm:flex gap-10 px-6'>
              <li className='hover:border-b-2 hover:border-black border-b-2  border-white border-t-2 hover:border-t-2 '><Link href={'/'}>MAIN</Link></li>
              <li className='hover:border-b-2 hover:border-black border-b-2 border-white border-t-2 hover:border-t-2'><Link href={'/gallery'}>GALLERY</Link></li>
              <li className='hover:border-b-2 hover:border-black border-b-2 border-white border-t-2 hover:border-t-2'><Link href={'/projects'}>PROJECTS</Link></li>
              <li className='hover:border-b-2 hover:border-black border-b-2 border-white border-t-2 hover:border-t-2'><Link href={'/'}>CERTIFICATIONS</Link></li>
              <li className='hover:border-b-2 hover:border-black border-b-2 border-white border-t-2 hover:border-t-2'><Link href={'/'}>CONTACTS</Link></li>
            </ul>
          </div>
          <div className='sm:hidden flex'>
            <MenuPopupState />
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
