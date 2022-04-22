import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="h-16 px-20">
      <nav className="w-f-full flex h-full flex-row items-center justify-between  ">
        <Link href={'/'}>
          <a className="font-semibold">DANAE.IO</a>
        </Link>

        <div>
          <span className="font-semibold">Artworks</span>
          <i>LOGO</i>
        </div>
      </nav>
    </header>
  )
}

export default Header
