import {useState} from 'react'
import "./ShopView.css"
import {useNavigate} from "react-router-dom"

const ShopView = () => {
  const navigate = useNavigate()
  const [idx, setIdx] = useState(0) 
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const AddProduct = () => {
    return (
      <div className='manager_shop_form'>
        <h1>Add your product</h1>
        <label>Product name</label>
        <input type="text" />
        <label>Price</label>
        <input type="text" />
        <label>Stock</label>
        <input type="text" />
        <label>Product image</label>
        <input type="text" />
        <button>Add product</button>
      </div>
    )
  }

  const DeleteProduct =() => {
    return (
      <div>
        <h1>Delete your product</h1>
      </div>
    )
  }

  const UpdateProduct = () => {
    return (
      <div>
        <h1>Update your product</h1>
      </div>
    )
  }

  return (
    <div className='manager_container'>
      <button className='manager_back_button'
        onClick={()=>{
          navigate('/')
        }}
      >Back to Amaki</button>
      <h1>Welcome to your shop manager</h1>
      <div className='manager_toolbox'>
        <div className='manager_actions'>
          <button onClick={() => setIdx(0)}>Add product</button>
          <button onClick={() => setIdx(1)}>Delete product</button>
          <button onClick={() => setIdx(2)}>Update product</button>
        </div>
        <div className='manager_content'>
          {idx === 0 && <AddProduct />}
          {idx === 1 && <DeleteProduct />}
          {idx === 2 && <UpdateProduct />}
        </div>
        <div className='manager_shop_info'>
          <h1>Shop info</h1>
          <form className='manager_shop_form' onSubmit={e=>handleSubmit(e)}>
            <label>Shop name: </label>
            <input type="text" />
            <label>Address: </label>
            <input type="text" />
            <label>Tel: </label>
            <input type="text" />
            <label>Email: </label>
            <input type="text" />
            <button>Update</button>
          </form>
</div>
      </div>
    </div>
  )
}

export default ShopView
