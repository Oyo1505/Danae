import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const CarrouselSingle = ({ pictures }) => {
  if (pictures.length === 0) return <p>Loading</p>
  if (pictures.length === 1)
    return <Image src={pictures[0]} width={200} height={200} />
  return (
    <>
      <Carousel
        showDots={true}
        removeArrowOnDeviceType={[
          'tablet',
          'mobile',
          'desktop',
          'superLargeDesktop',
        ]}
        responsive={responsive}
      >
        {pictures.map((pic, i) => (
          <Image key={i} src={pic} width={400} height={400} />
        ))}
      </Carousel>
    </>
  )
}

export default CarrouselSingle
