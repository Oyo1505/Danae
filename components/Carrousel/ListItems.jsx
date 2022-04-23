import React from 'react'
import Item from './Item'
import Carousel from 'react-multi-carousel'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const ListItems = ({ items }) => {
  return (
    <div className=" p-20 ">
      <Carousel responsive={responsive}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

export default ListItems
