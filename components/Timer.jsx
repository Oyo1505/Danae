import React, { useContext, useEffect } from 'react'

import { StoreContext } from '../utils/StoreProvider'
import Button from './Button'

function MyTimer() {
  const { mins, secs, minsSold, secsSold, inSale } = useContext(StoreContext)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '50px' }}>
        {!inSale && (
          <>
            <p>SALE START IN</p>
            <p>
              00:{mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
            </p>
          </>
        )}
        {inSale && (
          <>
            <p>SALE END IN</p>
            <p>
              00:{minsSold < 10 ? `0${minsSold}` : minsSold}:
              {secsSold < 10 ? `0${secsSold}` : secsSold}
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default MyTimer
