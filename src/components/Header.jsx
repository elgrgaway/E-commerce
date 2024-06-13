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
import { Link } from "react-router-dom";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./Header.module.css";
import NavList from "./NavList";
import CartContext from "../utils/StateContext";

function Header() {
  const [userDetails, setUserDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

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
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

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
          <div className={styles["search-parent"]}>
            <input type="text" placeholder="What are you looking for?" />
            <img loading="lazy" src="search.png" alt="search icon" />
          </div>
          <div className="flex gap-4">
            <Link to="/wishlist">
              <img loading="lazy" src="Wishlist.png" alt="wishlist icon" />
            </Link>
            <Link to="/cart" className="relative">
              <img loading="lazy" src="Cart1.png" alt="cart icon" />
              <span className="absolute -top-3 -right-2 px-2 text-sm bg-[var(--red-color)] text-white p-1 rounded-full">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </Link>
          </div>
          {userDetails && (
            <div className={styles["user-info"]}>{userDetails.name}</div>
          )}
        </div>
        <button onClick={toggleMenu} className={styles["drop-menu-button"]}>
          <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
        </button>
        <NavList
          styles={styles}
          userDetails={userDetails}
          signoutHandler={signoutHandler}
          type="drop-menu"
          className={isOpen ? styles["is-opened"] : ""}
        />
      </header>
      <div className={styles["header-line"]}></div>
    </div>
  );
}

export default Header;
