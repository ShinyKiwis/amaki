import React, { useState, useEffect } from "react";
import {FiHeart} from 'react-icons/fi'
import {BiCartAlt} from 'react-icons/bi'
import "./Product.css";
import { useNavigate } from "react-router-dom";


const ProductContent = ({productName, imgsrc, price, cart, setCart}) => {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(0);
    const [toggle, setToggle] = useState(false)
    
    const changeRoute = () => {
      navigate('/product', {
        state: {
          productName: productName,
          imgsrc: imgsrc,
          price: price
        }
      })
    }
    const handelIncreament = () => {
        setQuantity(prevCount => prevCount + 1);    
    }
    const handleAddToCart = () => {
      if(quantity!== 0){
        const product = {
          productName: productName,
          imgsrc: imgsrc,
          price: price,
          quantity: quantity
        }
        setCart([...cart, product])
        setQuantity(0)
      }
    }
    
    const handelDecreament = () => {
        if(quantity > 0){
            setQuantity(prevCount => prevCount - 1);
        }
    }
    return (
        <div className='Product_box'>
            <FiHeart className='Product_like'/>
            <img className='Product_image' 
              src={imgsrc} 
              alt='Product_img' 
              onClick={changeRoute}
              />
            <p>Vender code: 696969</p>
            <h1>{productName}</h1>
            <p>Price:</p>
            <span>${price}</span>
            <div className="Product_balance">
                <button type="button" onClick={handelDecreament} className="Product_button">-</button>
                <span>{quantity}</span>
                <button type="button" onClick={handelIncreament} className="Product_button">+</button>
                <BiCartAlt 
                  width={20} 
                  style={{cursor: "pointer"}}
                  onClick={handleAddToCart}
                />
            </div>
        </div>
    )
}
const Pagination =({totalPost, postsPerPage, setcurrentPage}) => {
  let pages =[];
  for(let i = 1; i <= Math.ceil(totalPost/postsPerPage); i++){
      pages.push(i);
  }
  return(
    <div className="Product_pages">
    {
      pages.map((page, index)=>{
          return(
          <>
            <span className="Product_pages_button" key={index} onClick={() => setcurrentPage(page)}>{page}</span>
          </>
          )
      })}
    </div>
  )
}
const Product = ({tags, cart, setCart}) => {
  const data = [
    {productName: "Iphone 14", imgsrc:"/images/Iphone14.jpg", price:799, balance:"0", category:"Electronics"},
    {productName: "Iphone 13", imgsrc:"/images/Iphone14.jpg", price:699, balance:"0", category:"Electronics"},
    {productName: "Iphone 11", imgsrc:"/images/Iphone14.jpg", price:399, balance:"0",category:"Electronics"},
    {productName: "Nerf Mastodon", imgsrc:"/images/Nerf1.jpg", price:199, balance:"0", category:"Toys"},
    {productName: "Nerf Tristrike", imgsrc:"/images/Nerf2.jpg", price:69, balance:"0",category:"Toys"},
    {productName: "Akatsuki Shirt", imgsrc:"/images/Shirt1.jfif", price:39, balance:"0",category:"Clothes"},
    {productName: "Iphone 14", imgsrc:"/images/Iphone14.jpg", price:799, balance:"0", category:"Electronics"},
    {productName: "Iphone 13", imgsrc:"/images/Iphone14.jpg", price:699, balance:"0", category:"Electronics"},
    {productName: "Iphone 11", imgsrc:"/images/Iphone14.jpg", price:399, balance:"0",category:"Electronics"},
    {productName: "Nerf Mastodon", imgsrc:"/images/Nerf1.jpg", price:199, balance:"0", category:"Toys"},
    {productName: "Nerf Tristrike", imgsrc:"/images/Nerf2.jpg", price:69, balance:"0",category:"Toys"},
    {productName: "Akatsuki Shirt", imgsrc:"/images/Shirt1.jfif", price:39, balance:"0",category:"Clothes"},
    {productName: "Iphone 14", imgsrc:"/images/Iphone14.jpg", price:799, balance:"0", category:"Electronics"},
    {productName: "Iphone 13", imgsrc:"/images/Iphone14.jpg", price:699, balance:"0", category:"Electronics"},
    {productName: "Iphone 11", imgsrc:"/images/Iphone14.jpg", price:399, balance:"0",category:"Electronics"},
    {productName: "Nerf Mastodon", imgsrc:"/images/Nerf1.jpg", price:199, balance:"0", category:"Toys"},
    {productName: "Nerf Tristrike", imgsrc:"/images/Nerf2.jpg", price:69, balance:"0",category:"Toys"},
    {productName: "Akatsuki Shirt", imgsrc:"/images/Shirt1.jfif", price:39, balance:"0",category:"Clothes"},
    {productName: "Iphone 14", imgsrc:"/images/Iphone14.jpg", price:799, balance:"0", category:"Electronics"},
    {productName: "Iphone 13", imgsrc:"/images/Iphone14.jpg", price:699, balance:"0", category:"Electronics"},
    {productName: "Iphone 11", imgsrc:"/images/Iphone14.jpg", price:399, balance:"0",category:"Electronics"},
    {productName: "Nerf Mastodon", imgsrc:"/images/Nerf1.jpg", price:199, balance:"0", category:"Toys"},
    {productName: "Nerf Tristrike", imgsrc:"/images/Nerf2.jpg", price:69, balance:"0",category:"Toys"},
    {productName: "Akatsuki Shirt", imgsrc:"/images/Shirt1.jfif", price:39, balance:"0",category:"Clothes"},
    {productName: "Iphone 14", imgsrc:"/images/Iphone14.jpg", price:799, balance:"0", category:"Electronics"},
    {productName: "Iphone 13", imgsrc:"/images/Iphone14.jpg", price:699, balance:"0", category:"Electronics"},
    {productName: "Iphone 11", imgsrc:"/images/Iphone14.jpg", price:399, balance:"0",category:"Electronics"},
    {productName: "Nerf Mastodon", imgsrc:"/images/Nerf1.jpg", price:199, balance:"0", category:"Toys"},
    {productName: "Nerf Tristrike", imgsrc:"/images/Nerf2.jpg", price:69, balance:"0",category:"Toys"},
    {productName: "Akatsuki Shirt", imgsrc:"/images/Shirt1.jfif", price:39, balance:"0",category:"Clothes"},
    {productName: "Iphone 14", imgsrc:"/images/Iphone14.jpg", price:799, balance:"0", category:"Electronics"},
    {productName: "Iphone 13", imgsrc:"/images/Iphone14.jpg", price:699, balance:"0", category:"Electronics"},
    {productName: "Iphone 11", imgsrc:"/images/Iphone14.jpg", price:399, balance:"0",category:"Electronics"},
  ];
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex,lastPostIndex); 
  return(
    <div className="Product">
      <h1>Product</h1>
      <div className="Product_category">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className='Product_content'>
        {currentPosts.map((posts) =>(
          <ProductContent
            productName={posts.productName}
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
  )
}
export default Product

