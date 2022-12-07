import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./ProductPay.css"

const ProductPay = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const products = location.state.data
  const sum = products.reduce((a,v) => a = a + (v.price*v.quantity), 0)
  const changeRoute = () => {
    navigate('/')
  }
  console.log(products.data)
  return(
    <div className='Product_payment'>
      <div className='Product_payment_left'>
      <div className='Product_payment_title'>
        <h1>Your Product</h1>
      </div>
      { 
        products.map((data) => (
          <div className='Product_payment_content'>
            <h1>{data.productName}</h1>
            <img src={data.imgsrc} alt='abigtoy'/>
            <h1>${data.quantity*data.price}</h1>
            <p>Quantity:{data.quantity}</p>
          </div>
        ))     
      }
      <div className='Product_total'>
          <h1>Total: ${sum}</h1>
      </div>
      </div>
      <div className='Product_payment_right'>
        <h1>Order detail</h1>
        <div className='Product_order_content'>
          <label>Name</label>
          <input type="text" />
          <label>Address</label>
          <input type="text" />
          <label>Tel</label>
          <input type="text" />
          <label>Payment method</label>
          <input type="text" />
          <label>Date</label>
          <input type="text" />
          <label>Delivery Time</label>
          <input type="text" />
          <label>Shipping method</label>
          <input type="text" />
          <label>Total payment</label>
          <span>${sum}</span>
          <button>Purchase</button>
        </div>
      </div>
        <button onClick={changeRoute}>Main page</button>
    </div>
  )
}

export default ProductPay