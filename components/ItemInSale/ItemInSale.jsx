import React, { useContext } from 'react'
import TimerHomePage from './TimerHomePage'
import Image from 'next/image'
import Link from 'next/link'
const ItemInSale = ({ itemInSale }) => {
  return (
    <div className="mb-20 flex flex-row items-center justify-center gap-x-40 ">
      {itemInSale && (
        <>
          {<Image src={itemInSale.pictures[0]} width={820} height={555} />}
          <div className="flex flex-col items-center justify-items-center text-center">
            <Link
              href={{ pathname: `/single/[id]` }}
              as={`/single/${itemInSale.id}`}
            >
              <a className="text-6xl">{itemInSale.title}</a>
            </Link>
            <p className="text-2xl">{itemInSale.artist.username}</p>
            <TimerHomePage />
          </div>
        </>
      )}
    </div>
  )
}

export default ItemInSale
