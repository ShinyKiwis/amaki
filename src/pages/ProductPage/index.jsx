import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./ProductPage.css"

const ProductPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const product = location.state
  const comments = [
    {
      name: "Nguyen Van A",
      comment: "Good product"
    },
    {
      name: "Nguyen Van B",
      comment: "Nice product"
    },
    {
      name: "Nguyen Van C",
      comment: "Good product"
    },
    {
      name: "Nguyen Van D",
      comment: "Good product"
    },
    {
      name: "Nguyen Van E",
      comment: "Nice product"
    },
    {
        name: "Nguyen Van P",
        comment: "Nice product"
      },
      {
        name: "Nguyen Van P",
        comment: "Nice product"
      },
      {
        name: "Nguyen Van P",
        comment: "Nice product"
      },
      {
        name: "Nguyen Van P",
        comment: "Nice product"
      },  
  ]

  const changeRoute = () => {
    navigate('/')
  }
console.log(product);
  return (
    <div className='Product_detail'>
      <div className='Product_left_col'>
      <div className='Product_detail_content'>
        <h1>{product.productName}</h1>
        <img src={product.imgsrc}/>
        <h1>${product.price}</h1>
        <p>In Stock: 11</p>
       </div>
      </div>
      <div className='Product_right_col'>
        {
            comments.map((comment) => (
              <div className='Product_comment'>
                <h2>{comment.name}</h2>
                <span>{comment.comment}</span>
              </div>
            ))
        }
      </div>
      <button onClick={changeRoute}>Back to amaki</button>
    </div>
  )
}

export default ProductPage