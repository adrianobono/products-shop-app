import styles from "./NavBar.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={styles["nav-bar__wrapper"]}>
      <ul className={styles["nav-bar__list"]}>
        <li className={styles["nav-bar__item"]}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={styles["nav-bar__item"]}>
          <Link to="/crud">Edit</Link>
        </li>
        <li className={styles["nav-bar__item"]}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
