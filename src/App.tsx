import { useState } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import PopularProduct from "./components/Product/PopularProduct"
import Service from "./components/Service"
import type { IProductType } from "./components/type/products"
import Cart from "./components/Cart"


function App() {
  const [cart, setCart] = useState <IProductType[]>([])

  return (
    <>
     <Navbar cart={cart}/>
     <Banner />
     <Service />
     <Cart cart={cart} setCart={setCart}/>
     <PopularProduct cart={cart} setCart={setCart}/>
    </>
  )
}

export default App
