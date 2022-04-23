import React, { useContext } from 'react'
import { StoreContext } from '../../utils/StoreProvider'
import DigitsHomePage from './DigitsHomePage'

const DisplayTime = ({ text, mins, secs, hours }) => {
  return (
    <>
      <p className="text-lg">{text}</p>
      <div className="flex flex-row items-center justify-items-center gap-x-10 text-6xl">
        <DigitsHomePage digit={hours} />
        <DigitsHomePage digit={mins} />
        <DigitsHomePage digit={secs} />
      </div>
    </>
  )
}

export default DisplayTime
