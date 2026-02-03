import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='fixed left-0 top-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex intems-center justify-between'>
        {/* logo */}
        <Link href={"/"} className='flex items-center'>
          <Image 
          src="/spott.png"
          alt="Spott logo"
          width={500}
          height={500}
          className="w-full h-11"
          priority
          />
          {/* pro badge  */}
        </Link>
        {/* search & Location - Desktop Only  */}

        {/* Right SIde Actions */}
      </div>
      {/* Mobile search & Location - Below Header  */}
    </nav>

    {/* Modals  */}

    </>
  )
}

export default Header