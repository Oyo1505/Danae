import React, { useContext } from 'react'
import { StoreContext } from '../../utils/StoreProvider'
import DisplayTimeSingle from './DisplayTimeSingle'

function MyTimer() {
  const { mins, secs, minsSold, secsSold, inSale } = useContext(StoreContext)
  return (
    <div className="flex flex-col  items-center justify-items-center">
      {!inSale && (
        <>
          <DisplayTimeSingle
            text={'SALE START IN'}
            hours={'0'}
            mins={mins}
            secs={secs}
          />
        </>
      )}
      {inSale && (
        <>
          <DisplayTimeSingle
            text={'SALE START IN'}
            hours={'0'}
            mins={minsSold}
            secs={secsSold}
          />
        </>
      )}
    </div>
  )
}

export default MyTimer
