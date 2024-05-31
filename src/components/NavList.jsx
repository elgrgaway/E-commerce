import { NavLink } from "react-router-dom";
function NavList({ styles, userDetails, signoutHandler, type, className }) {
  return (
    <nav className={`${styles[type]} ${className}`}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        {userDetails ? (
          <li>
            <button onClick={signoutHandler}>Log out</button>
          </li>
        ) : (
          <li>
            <NavLink
              to="/sign-up"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Sign Up
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default NavList;
