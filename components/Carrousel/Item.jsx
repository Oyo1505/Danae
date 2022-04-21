import Image from 'next/image'
import React from 'react'

const Item = ({ item }) => {
  return (
    <div>
      <Image src={item.pictures[0]} width={250} height={300} /> {item.title}
      {item.artist.username === null ? (
        <p>
          {item.artist.last_name} {item.artist.first_name}
        </p>
      ) : (
        <p>{item.artist.username}</p>
      )}
    </div>
  )
}

export default Item
