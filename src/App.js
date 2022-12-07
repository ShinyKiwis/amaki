import React, { useState } from 'react';
import {Header, Sidebar, Product} from './components';
import {Login, ShopView, ProductPage, ProductPay} from "./pages"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  const [auth, setAuth] = useState(true)
  const [selected, setSelected] = useState([]);
  const [cart, setCart] = useState([])
  // false = low to high 
  // true = high to low 
  const [price, setPrice] = useState(undefined)

  // false = in stock 
  // true = out of stock 
  const [stock, setStock] = useState(undefined)

  if(!auth){
    return (
      <main>
        <Login setAuth={setAuth}/>
      </main>
    )
  }
  console.log(cart)

  const Dashboard = () => {
    return (
      <main>
        <Header cart={cart} setCart={setCart}/>
        <Sidebar selected={selected} setSelected={setSelected} setPrice={setPrice} setStock={setStock}/>
        <Product tags={selected} cart={cart} setCart={setCart} price={price} stock={stock}/>
      </main>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/shop' element={<ShopView />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/productPayment' element={<ProductPay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;