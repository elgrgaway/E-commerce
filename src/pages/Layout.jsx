import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  // console.log(user);
  return (
    <div>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
