import React, { useContext } from 'react'
import { StoreContext } from '../../utils/StoreProvider'
import DisplayTime from './DisplayTime'

function TimerHomePage() {
  const { mins, secs, minsSold, secsSold, inSale } = useContext(StoreContext)
  return (
    <div className="p-20">
      {!inSale && (
        <>
          <DisplayTime
            text={'SALE START IN'}
            mins={mins}
            secs={secs}
            hours={'0'}
          />
        </>
      )}
      {inSale && (
        <>
          <DisplayTime
            text={'SALE ENDS IN'}
            mins={minsSold}
            secs={secsSold}
            hours={'0'}
          />
        </>
      )}
    </div>
  )
}

export default TimerHomePage
