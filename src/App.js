import React, { useState } from 'react';
import {Header, Sidebar, Product} from './components';
import {Login, ShopView} from "./pages"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  const [auth, setAuth] = useState(true)
  const [selected, setSelected] = useState([]);
  const [cart, setCart] = useState([])

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
        <Sidebar selected={selected} setSelected={setSelected}/>
        <Product tags={selected} cart={cart} setCart={setCart}/>
      </main>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/shop' element={<ShopView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
