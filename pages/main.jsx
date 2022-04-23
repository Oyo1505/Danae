import React from 'react'
import ListItems from '../components/Carrousel/ListItems'
import ItemInSale from '../components/ItemInSale/ItemInSale'

const Main = ({ items }) => {
  return (
    <div className="flex flex-col">
      <ItemInSale itemInSale={items[1]} />
      <hr />
      <ListItems items={items} />
    </div>
  )
}

export default Main
