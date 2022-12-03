import {useState} from 'react'
import "./Sidebar.css"

const CategoryItem = ({selected, title,handleSelect}) => {
  return (
    <label className={`${selected ? "sidebar_item active": "sidebar_item"}`}
    onClick={(e) => handleSelect(e, title)}>{title}      
      <input type="checkbox"/>
      <span className='checkmark'></span>
    </label>
  )
}

const Sidebar = () => {
  const [selected, setSelected] = useState([])
  const categories = ["Toys", "Eletronics", "Clothes", "Housewares", "LifeStyles", "PC&Laptop", "Watch","Health","Sport&Traveling","Bookstore" ]
  const handleSelect = (e, title) => {
    e.preventDefault()
    if(!selected.includes(title)) {
      setSelected(selected => [...selected, title])
    } else {
      setSelected(selected => selected.filter(selectedItem => selectedItem != title))
    }
  }
  console.log(selected)
  return (
    <div className='sidebar'>
      <h3>Price</h3>
      <div className='options'>
        <button>Price: From low to high</button>
        <button>Price: From high to low</button>
      </div>
      <h3>Category</h3>
        <div className='options'>
          <div className='category_options'>
            {categories.map( category => (
              <CategoryItem 
                selected={selected.includes(category)}
                title={category} 
                handleSelect={handleSelect} 
                key={category} 
              />
            ))}
          </div>
        </div>
      <h3>Stock Availability</h3>
      <div className='options'>
        <button>Stock: In stock</button>
        <button>Stock: Out of stock</button>
      </div>
    </div>
  )
}

export default Sidebar
