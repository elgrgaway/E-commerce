// import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import NavList from "./NavList";

function Header() {
  const [userDetails, setUserDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
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
      console.log(error);
    }
  };
  const dropMenuHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
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
            <img loading="lazy" src="Wishlist.png" alt="wishlist icon" />
            <img loading="lazy" src="Cart1.png" alt="cart icon" />
          </div>
          {userDetails && (
            <div className={styles["user-info"]}>{userDetails.name}</div>
          )}
        </div>
        <button
          onClick={dropMenuHandler}
          className={styles["drop-menu-button"]}
        >
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
    </>
  );
}

export default Header;
