import React, { useContext } from 'react'
import { StoreContext } from '../../utils/StoreProvider'
import Button from '../Button'

import Timer from '../Timer'

const AsideContent = ({ title, username, priceMatic, priceEuro }) => {
  const { sold } = useContext(StoreContext)
  return (
    <div>
      <p>{title}</p>
      <p>{username}</p>
      {!sold && (
        <>
          <Timer />
          <Button />
        </>
      )}
      {!sold && (
        <>
          {priceMatic}MATIC / {priceEuro}€
        </>
      )}
      {sold && <p>Sold for {priceMatic} </p>}
    </div>
  )
}

export default AsideContent
