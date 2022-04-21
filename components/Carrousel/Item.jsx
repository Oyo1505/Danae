import Image from 'next/image'
import React from 'react'

const Item = ({ item }) => {
  return (
    <div>
      <Image src={item.pictures[0]} width={250} height={300} /> {item.title}
      {item.artist.username}
    </div>
  )
}

export default Item
