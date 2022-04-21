import React, { useContext } from 'react'
import Timer from '../Timer'
import Image from 'next/image'
import Link from 'next/link'
const ItemInSale = ({ itemInSale }) => {
  return (
    <div>
      {itemInSale && (
        <>
          {<Image src={itemInSale.pictures[0]} width={250} height={300} />}
          <Link
            href={{ pathname: `/single/[id]` }}
            as={`/single/${itemInSale.id}`}
          >
            <a>{itemInSale.title}</a>
          </Link>
          <Timer />
        </>
      )}
    </div>
  )
}

export default ItemInSale
