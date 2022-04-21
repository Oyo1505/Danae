import React, { useContext } from 'react'
import { StoreContext } from '../utils/StoreProvider'

const Button = () => {
  const { inSale, sold, handleSold } = useContext(StoreContext)

  return (
    <div>
      {!sold && inSale && <button onClick={handleSold}>BUY NOW</button>}
    </div>
  )
}

export default Button
