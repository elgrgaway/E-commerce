import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Layout() {
  const [products, setProducts] = useState("https://dummyjson.com/products");
  return (
    <div>
      <TopHeader />
      <Header setProducts={setProducts} />
      <Outlet context={[products, setProducts]} />
      <Footer />
    </div>
  );
}
export default Layout;
