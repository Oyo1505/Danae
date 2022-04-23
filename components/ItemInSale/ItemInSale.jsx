import React, { useContext } from 'react'
import TimerHomePage from './TimerHomePage'
import Image from 'next/image'
import Link from 'next/link'
import Title from './Title'
const ItemInSale = ({ itemInSale }) => {
  return (
    <div className="mb-20 flex flex-row items-center justify-center gap-x-40 ">
      {itemInSale && (
        <>
          {<Image src={itemInSale.pictures[0]} width={820} height={555} />}
          <div className="flex flex-col items-center justify-items-center text-center">
            <Title
              id={itemInSale.id}
              title={itemInSale.title}
              username={itemInSale.artist.username}
            />
            <TimerHomePage />
          </div>
        </>
      )}
    </div>
  )
}

export default ItemInSale
