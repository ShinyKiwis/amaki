import React, { useState } from 'react';
import {Header, Sidebar, Product} from './components';
import {Login} from "./pages"

const App = () => {
  const [auth, setAuth] = useState(true)
  const [selected, setSelected] = useState([]);

  if(!auth){
    return (
      <main>
        <Login setAuth={setAuth}/>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Sidebar selected={selected} setSelected={setSelected}/>
      <Product tags={selected}/>
    </main>
  );
}

export default App;
