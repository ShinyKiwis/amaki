import { useState, useEffect } from "react";
import "./Sidebar.css";
import axios from "axios";

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

const Sidebar = ({ selected, setSelected, setPrice, setStock }) => {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    const data = await axios.get("http://localhost:3500/category");
    let categories = []
    data.data.forEach((category) =>
      categories.push(category.category_name)
    );
    setCategories(categories)
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="sidebar">
      <h3>Price</h3>
      <div className="options">
        <button onClick={() => setPrice(false)}>Price: From low to high</button>
        <button onClick={() => setPrice(true)}>Price: From high to low</button>
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
        <button onClick={() => setStock(false)}>Stock: Low Availability</button>
        <button onClick={() => setStock(true)}>Stock: High Availability</button>
      </div>
    </div>
  );
};

export default Sidebar;
