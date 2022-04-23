import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
}
const CarrouselSingle = ({ pictures }) => {
  if (pictures.length === 0) return <p>Loading</p>
  if (pictures.length === 1)
    return <Image src={pictures[0]} width={990} height={670} />
  return (
    <>
      <Carousel
        showDots={true}
        removeArrowOnDeviceType={['desktop']}
        responsive={responsive}
      >
        {pictures.map((pic, i) => (
          <>
            <Image key={i} src={pic} width={990} height={670} />
          </>
        ))}
      </Carousel>
    </>
  )
}

export default CarrouselSingle
