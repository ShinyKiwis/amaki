import React, { useState } from 'react'
import "./Header.css"
import {BiSearch} from 'react-icons/bi'
import {BiCartAlt} from 'react-icons/bi'
import {BsTrashFill} from "react-icons/bs"
import PopupProfile from '../Profile/Profile'
import {useNavigate} from "react-router-dom"

const User = ({profile}) => {
  const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      {buttonPopup && <PopupProfile trigger={buttonPopup} setTrigger={setButtonPopup} />}
      <div className="user_container" onClick={!profile ? () => setButtonPopup(true): ""} >
        <img className="profile_button" src="/images/user.jpg" alt="user avatar" style={profile ? {width:"5em", height: "5em"}: {}}/>
        {!profile && <span>Alexander</span>}
      </div>
    </>
  )
}

export {User}
const CartSummary = ({cart, setCart}) => {
  const handleDelete = (productName) => {
    setCart(cart.filter(product => product.productName !== productName))
  }
  const navigate = useNavigate();
  const changePage= () => {
  console.log("CART:", cart)
  navigate('/productPayment', {
    state:{
        data: cart
    }
  })
}
  const CartItem = ({product}) => {
    return (
      <div className="cart_item">
        <img src="/product.png" alt="product" />
        <div className='cart_item_info'>
          <span>{product.productName}</span>
          <span>Quantity: {product.quantity}</span>
        </div>
        <div className='cart_item_info'>
          <span>Retail: ${product.price}</span>
          <span>Total: ${product.price*product.quantity}</span>
        </div>
        <BsTrashFill className='cart_item_delete' onClick={() => handleDelete(product.productName)}/>
      </div>
    )
  }

  return (
    <div className="cart_container">
      <h3>Cart Summary</h3>
      <div className="cart_content">
        {cart.map(product=> (
          <CartItem product={product} />
        ))}
      </div>
      <button className='cart_action' onClick={changePage}>Pay</button>
    </div>
  )
}

const Header = ({cart, setCart}) => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const changeRoute = () => {
    navigate('/shop')
  }
  console.log(toggle)
  return (
    <div className="header_container">
      <img className="header_logo" src="/images/Amakilogo.png" alt="pagelogo" />
      <div className="search">
        <input className='search_box' placeholder='Wanna see something cool?'/>
        <BiSearch className='search_icon'/>
      </div>
      {/* <div className='header_shop_view' onClick={changeRoute}>
          <span>Shop Manager</span>
      </div> */}
      <div className='user_actions'>
        <User />
        <div className='cart'>
            <BiCartAlt className='cart_icon'
              onClick={() => setToggle(!toggle)}
            />
        </div> 
      </div>
      {toggle && <CartSummary cart={cart} setCart={setCart}/>}
    </div>
  )
}
export default Header
