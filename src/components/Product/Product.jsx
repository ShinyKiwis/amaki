import React, { useState, useEffect } from "react";
import "./Product.css";

const ProductContent = ({productName, imgsrc, price}) => {
    const [quantity, setQuantity] = useState(0);
    const handelIncreament = () => {
        setQuantity(prevCount => prevCount + 1);    
    }
    const handelDecreament = () => {
        if(quantity > 0){
            setQuantity(prevCount => prevCount - 1);
        }
    }
    return (
        <div className='Product_box'>
            <img className='Product_image' src={imgsrc} alt='Product_img'></img>
            <h1>{productName}</h1>
            <span>{price}</span>
            <div className="Product_balance">
                <button type="button" onClick={handelDecreament} className="Product_button">-</button>
                <span>{quantity}</span>
                <button type="button" onClick={handelIncreament} className="Product_button">+</button>
            </div>
        </div>
    )
}
const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    // for fetching data
  }, [])
  return(
    <div className="Product">
      <h1>Product</h1>
      <div className="Product_category">
        <button>Toys</button>
        <button>Phones</button>
        <button>Clothes</button>
      </div>
      <div className='Product_content'>
        <ProductContent productName="Iphone 14" imgsrc="/images/Iphone14.jpg" price="$799" balance="0"/>
        <ProductContent productName="Iphone 13" imgsrc="/images/Iphone14.jpg" price="$699" balance="0"/>
        <ProductContent productName="Iphone 11" imgsrc="/images/Iphone14.jpg" price="$399" balance="0"/>
      </div>
    </div>
  )
}
export default Product
