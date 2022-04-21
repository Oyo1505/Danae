import React, { useContext } from 'react'
import { StoreContext } from '../../utils/StoreProvider'
import Image from 'next/image'
import Link from 'next/link'
const ItemInSale = ({ itemInSale }) => {
  return (
    <div>
      s
      {itemInSale && (
        <>
          {/* <Image src={itemInSale.pictures[0]} width={250} height={300} /> */}
          <Link
            href={{ pathname: `/single/[id]` }}
            as={`/single/${itemInSale.id}`}
          >
            <a>{itemInSale.title}</a>
          </Link>
        </>
      )}
    </div>
  )
}

export default ItemInSale
