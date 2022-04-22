import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../utils/StoreProvider'

function MyTimer() {
  const { mins, secs, minsSold, secsSold, inSale } = useContext(StoreContext)
  return (
    <div className="p-20">
      {!inSale && (
        <>
          <p>SALE START IN</p>
          <div className="flex flex-row items-center justify-items-center gap-y-10 text-7xl">
            <span>00</span>
            <span>{mins < 10 ? `0${mins}` : mins}</span>
            <span>{secs < 10 ? `0${secs}` : secs}</span>
          </div>
        </>
      )}
      {inSale && (
        <>
          <p className="text-lg">SALE ENDS IN</p>
          <div className="flex flex-row items-center justify-items-center gap-x-10 text-6xl">
            <span>00</span>
            <span>{minsSold < 10 ? `0${minsSold}` : minsSold}</span>
            <span>{secsSold < 10 ? `0${secsSold}` : secsSold}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default MyTimer
