import styles from "./NavBar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { BiHomeSmile, BiCart } from "react-icons/bi";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["nav-bar__wrapper"]}>
      <ul className={styles["nav-bar__list"]}>
        <li className={styles["nav-bar__item"]}>
          <Link to={"/"}>
            Home <BiHomeSmile size={24} />
          </Link>
        </li>
        <li className={styles["nav-bar__item"]}>
          <Link to="/crud">Edit</Link>
        </li>
        <li className={styles["nav-bar__item"]}>
          <Link to="/cart">
            Cart <BiCart size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
