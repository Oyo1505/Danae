import React from 'react'
import Link from 'next/link'
const Title = ({ id, username, title }) => {
  return (
    <>
      <Link href={{ pathname: `/single/[id]` }} as={`/single/${id}`}>
        <a className="text-6xl">{title}</a>
      </Link>
      <p className="text-2xl">{username}</p>
    </>
  )
}

export default Title
