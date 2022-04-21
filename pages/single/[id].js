import AsideContent from '../../components/Single/AsideContent'
import CarrouselSingle from '../../components/Single/CarrouselSingle'
import React from 'react'

const Single = ({ item }) => {
  console.log(item)
  return (
    <div>
      <AsideContent />
      <CarrouselSingle />
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
