import React from 'react'
import SingleItem from './SingleItem';
// import { artistArray } from '../assets/database/artists';

const ItemList = ({ title, items , itemsArray, path , idPath }) => {
    // console.log(items)
  return (
    <div className="item-list">
    <div className="item-list__header">
      <h2>{title} populares</h2>
      <a href={path} className="main__link">Mostrar tudo</a>
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
