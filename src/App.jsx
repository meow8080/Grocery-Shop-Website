import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Options from "./Pages/Options";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import OrderSummary from "./Pages/OrderSummary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/options" element={<Options />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/order-summary" element={<OrderSummary />} />
    </Routes>
  );
}

export default App;
