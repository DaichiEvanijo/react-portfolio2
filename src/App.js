import {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import PRODUCTS from "./Data/Products"
import { ShopContextProvider } from "./context/Context"

function App() {

  const [products, setProducts] = useState(PRODUCTS)

  return (
    <div className="App">
      <Router>
        <ShopContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route path="/cart" element={<Cart products={products}/>}/>
          </Routes>
        </ShopContextProvider>
        <Footer />
      </Router>
    </div>
  )
}

export default App
