import React from 'react'
import DigitsSinglePage from './DigitsSinglePage'

const DisplayTimeSingle = ({ text, mins, secs, hours }) => {
  return (
    <>
      <p className="text-lg">{text}</p>
      <div className="flex flex-row items-center justify-items-center gap-x-10 text-base">
        <DigitsSinglePage type={'hours'} digit={hours} />
        <DigitsSinglePage type={'mins'} digit={mins} />
        <DigitsSinglePage type={'secs'} digit={secs} />
      </div>
    </>
  )
}

export default DisplayTimeSingle
