import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/Index";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";
import Singleproductdetails from "./pages/singleproductdetails";
import Singleblog from "./pages/singleblog";
import Regularpage from "./pages/regularpage";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/singleProductDetails"
            element={<Singleproductdetails />}
          />
          <Route path="/singleblog" element={<Singleblog />} />
          <Route path="/regularpage" element={<Regularpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
