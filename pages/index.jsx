import Head from 'next/head'
import { useContext, useEffect } from 'react'

import { StoreContext } from '../utils/StoreProvider'
import Main from './main'
const Home = ({ items }) => {
  if (!items) return <p>Loading...</p>
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main items={items} />
    </>
  )
}
export async function getStaticProps() {
  try {
    const res = await fetch(`https://beta.api.danae.io/test`)
    const items = await res.json()
    return { props: { items } }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}
export default Home
