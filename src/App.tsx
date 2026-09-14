import { useState } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import PopularProduct from "./components/Product/PopularProduct"
import Service from "./components/Service"
import type { IProductType } from "./components/type/products"
import Cart from "./components/Cart"
// import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  const [cart, setCart] = useState <IProductType[]>([])
  const [coin, setCoin] = useState(400);

  return (
    <>
     <Navbar cart={cart} coin={coin} />
     <Banner />
     <Service />
     <Cart cart={cart} setCart={setCart} coin={coin} setCoin={setCoin}/>
     <PopularProduct cart={cart} setCart={setCart} coin={coin} setCoin={setCoin}/>
    </>
  )
}

export default App
