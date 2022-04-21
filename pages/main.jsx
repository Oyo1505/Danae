import React from 'react'
import Carrousel from '../components/Carrousel/Carrousel'
import ListItems from '../components/Carrousel/ListItems'
import ItemInSale from '../components/ItemInSale/ItemInSale'

const Main = ({ items }) => {
  return (
    <div>
      <ItemInSale itemInSale={items[1]} />
      <hr />
      <ListItems items={items} />
    </div>
  )
}

export default Main
