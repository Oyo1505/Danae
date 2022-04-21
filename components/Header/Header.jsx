import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href={'/'}>
          <a>DANAE.IO</a>
        </Link>

        <div>
          <span>Atworks</span>
          <i>LOGO</i>
        </div>
      </nav>
    </header>
  )
}

export default Header
