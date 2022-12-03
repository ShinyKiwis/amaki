import { useState } from "react";
import "./Sidebar.css";

const CategoryItem = ({ isSelected, title, setSelected, selected }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (!selected.includes(title)) {
      setSelected((selected) => [...selected, title]);
    } else {
      setSelected((selected) =>
        selected.filter((selectedItem) => selectedItem !== title)
      );
    }
  };
  return (
    <label
      className="sidebar_item"
      style={isSelected ? { color: "#638aa7", fontWeight: "bold" } : {}}
    >
      {title}
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span className="checkmark"></span>
    </label>
  );
};

const Sidebar = () => {
  const [selected, setSelected] = useState([]);
  const categories = [
    "Toys",
    "Eletronics",
    "Clothes",
    "Housewares",
    "LifeStyles",
    "PC&Laptop",
    "Watch",
    "Health",
    "Sport&Traveling",
    "Bookstore",
  ];

  return (
    <div className="sidebar">
      <h3>Price</h3>
      <div className="options">
        <button>Price: From low to high</button>
        <button>Price: From high to low</button>
      </div>
      <h3>Category</h3>
      <div className="options">
        <div className="category_options">
          {categories.map((category) => (
            <CategoryItem
              isSelected={selected.includes(category)}
              title={category}
              selected={selected}
              setSelected={setSelected}
              key={category}
            />
          ))}
        </div>
      </div>
      <h3>Stock Availability</h3>
      <div className="options">
        <button>Stock: In stock</button>
        <button>Stock: Out of stock</button>
      </div>
    </div>
  );
};

export default Sidebar;
