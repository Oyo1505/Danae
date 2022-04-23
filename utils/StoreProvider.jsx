import React, { createContext, useEffect, useState } from 'react'

const StoreContext = createContext()

function StoreProviderWrapper(props) {
  const { startingMinutes = 1, startingSeconds = 30 } = props
  const [mins, setMinutes] = useState(startingMinutes)
  const [secs, setSeconds] = useState(startingSeconds)

  const { startingMinutesInSale = 1, startingSecondsInSale = 30 } = props
  const [minsSold, setMinutesSold] = useState(startingMinutesInSale)
  const [secsSold, setSecondsSold] = useState(startingSecondsInSale)

  const [inSale, setInSale] = useState(false)
  const [sold, setSold] = useState(false)

  //TIMER BEFORE TO BE SOLD
  useEffect(() => {
    if (!inSale) {
      let sampleInterval = setInterval(() => {
        if (secs > 0) {
          setSeconds(secs - 1)
        }
        if (secs === 0) {
          if (mins === 0) {
            clearInterval(sampleInterval)
            setInSale(true)
          } else {
            setMinutes(mins - 1)
            setSeconds(59)
          }
        }
      }, 1000)

      return () => {
        clearInterval(sampleInterval)
      }
    }
  })
  //TIMER in SOLD
  useEffect(() => {
    if (inSale) {
      let sampleInterval = setInterval(() => {
        if (secsSold > 0) {
          setSecondsSold(secsSold - 1)
        }
        if (secsSold === 0) {
          if (minsSold === 0) {
            clearInterval(sampleInterval)
          } else {
            setMinutesSold(minsSold - 1)
            setSecondsSold(59)
          }
        }
      }, 1000)

      return () => {
        clearInterval(sampleInterval)
      }
    }
  })
  const handleSold = () => {
    setSold(true)
  }

  const store = {
    mins,
    secs,
    sold,
    minsSold,
    secsSold,
    inSale,
    handleSold,
  }
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  )
}
export { StoreContext, StoreProviderWrapper }
