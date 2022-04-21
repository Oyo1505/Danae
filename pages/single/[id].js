import AsideContent from '../../components/Single/AsideContent'
import CarrouselSingle from '../../components/Single/CarrouselSingle'
import React, { useEffect, useState } from 'react'

const Single = ({ item }) => {
  const [priceEuro, setPriceEuro] = useState(0)
  useEffect(() => {
    const x = async () => {
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=MATIC&tsyms=BTC,USD,EUR&api_key=${process.env.REACT_APP_CRYPTO}`
      )
      const data = await res.json()

      setPriceEuro(data.MATIC.EUR)
    }
    x()
  }, [])

  return (
    <div>
      <CarrouselSingle pictures={item.pictures} />
      <AsideContent
        title={item.title}
        username={item.username}
        priceMatic={item.price}
        priceEuro={(item.price * priceEuro).toFixed(2)}
      />
    </div>
  )
}
export async function getStaticPaths() {
  const res = await fetch(`https://beta.api.danae.io/test`)
  const data = await res.json()
  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } }
  })
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://beta.api.danae.io/test/${params.id}`)
  const item = await res.json()
  return { props: { item } }
}
export default Single
