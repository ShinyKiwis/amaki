import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductContent = ({
  productName,
  imgsrc,
  price,
  vendor,
  cart,
  setCart,
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const changeRoute = () => {
    navigate("/product", {
      state: {
        productName: productName,
        imgsrc: imgsrc,
        price: price,
      },
    });
  };
  const handelIncreament = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  const handleAddToCart = () => {
    if (quantity !== 0) {
      const product = {
        productName: productName,
        imgsrc: imgsrc,
        price: price,
        quantity: quantity,
      };
      setCart([...cart, product]);
      setQuantity(0);
    }
  };

  const handelDecreament = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="Product_box">
      <FiHeart className="Product_like" />
      <img
        className="Product_image"
        src="/product.png"
        alt="Product_img"
        onClick={changeRoute}
      />
      <p>Vender code: {vendor}</p>
      <h1>{productName}</h1>
      <p>Price:</p>
      <span>${price}</span>
      <div className="Product_balance">
        <button
          type="button"
          onClick={handelDecreament}
          className="Product_button"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={handelIncreament}
          className="Product_button"
        >
          +
        </button>
        <BiCartAlt
          width={20}
          style={{ cursor: "pointer" }}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};
const Pagination = ({ totalPost, postsPerPage, setcurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="Product_pages">
      {pages.map((page, index) => {
        return (
          <>
            <span
              className="Product_pages_button"
              key={index}
              onClick={() => setcurrentPage(page)}
            >
              {page}
            </span>
          </>
        );
      })}
    </div>
  );
};
const Product = ({ tags, cart, setCart, price, stock }) => {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const fetchData = async () => {
    console.log("PRICE:", price);
    console.log("STOCK:", stock);
    let temp = [];
    await tags.forEach(async (tag) => {
      if (price === undefined && stock === undefined) {
        const res = await axios.get(`http://localhost:3500/category/${tag}`);
        temp = [...temp, ...res.data];
        setData(temp);
      } else if (price === false) {
        const trend = "low";
        const res = await axios.get(
          `http://localhost:3500/sort/${tag}/${trend}`
        );
        temp = [...temp, ...res.data];
        console.log(temp);
        setData(temp);
      } else if (price === true) {
        const trend = "DESC";
        const res = await axios.get(
          `http://localhost:3500/sort/${tag}/${trend}`
        );
        temp = [...temp, ...res.data];
        console.log(temp);
        setData(temp);
      } 
    });
      if (stock === false) {
        const trend = "DESC";
        const res = await axios.get(`http://localhost:3500/sort/${trend}`);
        temp = [...temp, ...res.data];
        setData(temp);
      } else if (stock === true) {
        const trend = "low";
        const res = await axios.get(`http://localhost:3500/sort/${trend}`);
        temp = [...temp, ...res.data];
        setData(temp);
      }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="Product">
      <h1>Product</h1>
      <div className="Product_category">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="Product_content">
        {currentPosts.map((posts) => (
          <ProductContent
            vendor={posts.supplier_id}
            productName={posts.product_name}
            imgsrc={posts.imgsrc}
            price={posts.price}
            balance={posts.balance}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
      <Pagination
        totalPost={data.length}
        postsPerPage={postsPerPage}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
};
export default Product;
