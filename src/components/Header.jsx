// // import { NavLink, useNavigate } from "react-router-dom";
// import styles from "./Header.module.css";
// import { useEffect, useState } from "react";
// import { auth, db } from "../utils/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import NavList from "./NavList";
// import { Link } from "react-router-dom/dist";

// function Header() {
//   const [userDetails, setUserDetails] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartQuantities, setCartQuantities] = useState(0);

//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         console.log(user);
//         const docRef = doc(db, "users", user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setUserDetails(docSnap.data());
//         }
//       } else {
//         setUserDetails(null);
//       }
//     });
//   };

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartQuantities(cartItems.length);
//     fetchUserData();
//   }, []);
//   const signoutHandler = async () => {
//     try {
//       await auth.signOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const dropMenuHandler = () => {
//     if (isOpen) {
//       setIsOpen(false);
//     } else {
//       setIsOpen(true);
//     }
//   };

//   return (
//     <>
//       <header className={styles.header}>
//         <h1>Exclusive</h1>
//         <div className={styles["header-left"]}>
//           <NavList
//             styles={styles}
//             userDetails={userDetails}
//             signoutHandler={signoutHandler}
//             type="main"
//           />
//         </div>
//         <div className={styles["header-right"]}>
//           <div className={styles["search-parent"]}>
//             <input type="text" placeholder="What are you looking for?" />
//             <img loading="lazy" src="search.png" alt="search icon" />
//           </div>
//           <div className="flex gap-4">
//             <Link to="/wishlist">
//               <img loading="lazy" src="Wishlist.png" alt="wishlist icon" />
//             </Link>
//             <Link to="/cart" className=" relative">
//               <img loading="lazy" src="Cart1.png" alt="cart icon" />
//               <span className=" absolute -top-3 -right-2 px-2 text-sm bg-[var(--red-color)] text-white p-1 rounded-full">
//                 {cartQuantities}
//               </span>
//             </Link>
//           </div>
//           {userDetails && (
//             <div className={styles["user-info"]}>{userDetails.name}</div>
//           )}
//         </div>
//         <button
//           onClick={dropMenuHandler}
//           className={styles["drop-menu-button"]}
//         >
//           <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
//           <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
//           <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
//         </button>

//         <NavList
//           styles={styles}
//           userDetails={userDetails}
//           signoutHandler={signoutHandler}
//           type="drop-menu"
//           className={isOpen ? styles["is-opened"] : ""}
//         />
//       </header>
//       <div className={styles["header-line"]}></div>
//     </>
//   );
// }

// export default Header;
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./Header.module.css";
import NavList from "./NavList";

import CartContext from "../utils/StateContext";
import { toast } from "react-toastify";

function Header({ setProducts }) {
  const [userDetails, setUserDetails] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      } else {
        setUserDetails(null);
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const signoutHandler = async () => {
    try {
      await auth.signOut();
      toast.error("Your Sign out", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };
  const searchHandler = (value) => {
    navigate("/search-products");
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      // .then((res) => res.json())
      .then((data) => setProducts(data.url));
  };
  // const openSearchHandler = () => {
  //   setSearchIsOpen(true);
  // };
  return (
    <div className={styles["header-line"]}>
      <header className={styles.header}>
        <h1>Exclusive</h1>
        <div className={styles["header-left"]}>
          <NavList
            styles={styles}
            userDetails={userDetails}
            signoutHandler={signoutHandler}
            type="main"
          />
        </div>
        <div className={styles["header-right"]}>
          <button
            className={styles["search-button"]}
            onClick={() => setSearchIsOpen((prevState) => !prevState)}
          >
            <img loading="lazy" src="search.png" alt="search icon" />
          </button>
          <div className={styles["search-parent"]}>
            <input
              type="text"
              placeholder="What are you looking for?"
              onChange={(e) => searchHandler(e.target.value)}
            />
            <img loading="lazy" src="search.png" alt="search icon" />
          </div>
          <div className="flex gap-4">
            <Link to="/wishlist">
              <img loading="lazy" src="Wishlist.png" alt="wishlist icon" />
            </Link>
            <Link to="/cart" className="relative">
              <img loading="lazy" src="Cart1.png" alt="cart icon" />
              <span className="absolute -top-3 -right-2 px-2 text-sm bg-[var(--red-color)] text-white p-1 rounded-full">
                {cart.length}
              </span>
            </Link>
          </div>
          {userDetails && (
            <div className={styles["user-info"]}>{userDetails.name}</div>
          )}
        </div>
        <button onClick={toggleMenu} className={styles["drop-menu-button"]}>
          <div
            className={`${styles.line} ${menuIsOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.line} ${menuIsOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.line} ${menuIsOpen ? styles.open : ""}`}
          ></div>
        </button>

        <NavList
          styles={styles}
          userDetails={userDetails}
          signoutHandler={signoutHandler}
          type="drop-menu"
          className={menuIsOpen ? styles["is-opened"] : ""}
        />
      </header>
      {searchIsOpen && (
        <div
          className={`${styles["search-toogle"]} ${
            searchIsOpen ? styles["is-opened"] : ""
          } border-t-2 border-solid border-[var(--border-color)] `}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            onChange={(e) => searchHandler(e.target.value)}
            className="block py-4 outline-none w-[82%] m-auto"
          />
        </div>
      )}
      <div className={styles["header-line"]}></div>
    </div>
  );
}

export default Header;
