import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Products";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
