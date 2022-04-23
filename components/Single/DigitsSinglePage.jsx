import React from 'react'

const DigitsSinglePage = ({ type, digit }) => {
  return (
    <div>
      <span className=" text-2xl font-semibold">
        {digit < 10 ? `0${digit}` : digit}
      </span>
      <br />
      <span>{type}</span>
    </div>
  )
}

export default DigitsSinglePage
