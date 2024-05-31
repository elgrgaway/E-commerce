// import Footer from "./components/Footer";
// import Header from "./components/Header.jsx";
// import TopHeader from "./components/TopHeader.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    // <TopHeader />
    // <Header />
    // <Footer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
