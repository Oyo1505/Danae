import React, { useContext } from 'react'
import { StoreContext } from '../../utils/StoreProvider'
import Button from './Button'
import Timer from './Timer'
import Title from './Title'

const AsideContent = ({ title, username, priceMatic, priceEuro }) => {
  const { sold } = useContext(StoreContext)
  return (
    <div
      className="flex  w-6/12	 flex-col items-center  justify-center justify-items-center px-20"
      style={{ height: '900px' }}
    >
      <Title username={username} title={title} />
      <div className="mb-20">
        <div className="flex flex-col text-center  ">
          {!sold && (
            <>
              <span className="text-3xl font-bold">{priceMatic} S</span>
              <span className="text-xl font-medium">{priceEuro} €</span>
            </>
          )}
          {sold && (
            <>
              <span className="font-base text-2xl">Sold for </span>
              <span className="text-3xl font-bold">{priceMatic} S</span>
            </>
          )}
        </div>
      </div>
      {!sold && (
        <>
          <Timer />
          <Button />
        </>
      )}
    </div>
  )
}

export default AsideContent
