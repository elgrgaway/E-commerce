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
  // const [searchValue, setSearchValue] = useState();
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
      toast.error("You`re Sign out", {
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
  // const changeSearch = (value) => {
  //   setSearchValue(value);
  // };
  const searchHandler = (value) => {
    setTimeout(() => {
      // e.preventDefault()
      navigate("/search-products");
      fetch(`https://dummyjson.com/products/search?q=${value}`).then((data) =>
        setProducts(data.url)
      );
    }, 2000);
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
          <button
            className={styles["search-button"]}
            onClick={() => setSearchIsOpen((prevState) => !prevState)}
          >
            <img loading="lazy" src="search.png" alt="search" />
          </button>
          <div className={styles["search-parent"]}>
            <form onSubmit={searchHandler}>
              <input
                type="text"
                placeholder="What are you looking for?"
                onChange={(e) => searchHandler(e.target.value)}
                // onChange={(e) => changeSearch(e.target.value)}
              />
            </form>
            <img loading="lazy" src="search.png" alt="search" />
          </div>
          <div className="flex gap-4">
            <Link to="/wishlist">
              <img loading="lazy" src="Wishlist.png" alt="wishlist" />
            </Link>
            <Link to="/cart" className="relative">
              <img loading="lazy" src="Cart1.png" alt="cart" />
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
