import Link from 'next/link'
import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
const Header = () => {
  return (
    <header className="h-16 px-20">
      <nav className="w-f-full flex h-full flex-row items-center justify-between  ">
        <Link href={'/'}>
          <a className="font-semibold">DANAE.IO</a>
        </Link>

        <div className="flex flex-row gap-x-8">
          <span className="font-semibold">Artworks</span>
          <DarkModeOutlinedIcon />
        </div>
      </nav>
    </header>
  )
}

export default Header
