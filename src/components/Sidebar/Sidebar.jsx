import React from 'react'
import "./Sidebar.css"

const CategoryItem = ({title, quantity}) => {
  return (
    <div className='sidebar_item'>
      <input type="checkbox"/>
      <label>{title} ({quantity})</label>
    </div>
  )
}

const Sidebar = () => {
  const categories = ["Toys", "Eletronics", "Clothes", "Housewares", "LifeStyles", "PC&Laptop", "Watch","Health","Sport&Traveling","Bookstore" ]
  return (
    <div className='sidebar'>
      <h3>Category</h3>
      {categories.map( category => (
        <CategoryItem title={category} quantity={44} key="category" />
      ))}
     <div class="slidecontainer">
        <p>1$</p>
        <input type='range' min={1} max={100} className="slider" id="myRange"/>
        <p>1000$</p>
        <input type='range' min={1} max={100} className="slider" id="myRange"/>
         <p>Price: <span id="demo"></span></p>
      </div>
    </div>
  )
}

export default Sidebar