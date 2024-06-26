import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Details from "./pages/Details.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { StateContext } from "./utils/StateContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SearchProducts from "./pages/SearchProducts.jsx";
import CheckOut from "./pages/CheckOut.jsx";
function App() {
  return (
    <>
      <StateContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="all-products" element={<AllProducts />} />
              <Route path="search-products" element={<SearchProducts />} />
              <Route path="/all-products/:productId" element={<Details />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StateContext>
      <ToastContainer />
    </>
  );
}

export default App;
