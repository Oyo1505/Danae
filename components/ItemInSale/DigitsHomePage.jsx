import React from 'react'

const DigitsHomePage = ({ digit }) => {
  return <span>{digit < 10 ? `0${digit}` : digit}</span>
}

export default DigitsHomePage
