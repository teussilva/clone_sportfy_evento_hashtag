import React from 'react'
import SingleItem from './SingleItem';
// import { artistArray } from '../assets/database/artists';
import { Link } from 'react-router-dom'

const ItemList = ({ title, items , itemsArray, path , idPath }) => {
    // console.log(items)
  return (
    <div className="item-list">
    <div className="item-list__header">
      <h2>{title} populares</h2>
      <Link to={path} className="main__link">Mostrar tudo</Link>
    </div>
    <div className="item-list__container">
     {itemsArray
     .slice(0, items)
     .map((currObj, index) => (
       <SingleItem
       idPath={idPath}
      {...currObj} 
       key={`${title}-${index}`} 
       />
      ))}
    </div>
    </div>
  )
}

export default ItemList
