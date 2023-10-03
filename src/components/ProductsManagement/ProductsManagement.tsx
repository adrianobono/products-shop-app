import { useCartStore } from "../../store/CartStore";
import styles from "./ProductsManagement.module.scss";

export const ProductMangement = () => {
  const { products } = useCartStore();
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>Products Management</div>
      <ul className={styles["list__wrapper"]}>
        <li className={styles["list__header"]}>
          <span>Id</span>
          <span>Title</span>
          <span>Price</span>
          <span>Actions</span>
        </li>
        {products.map((item) => (
          <li className={styles["list__item"]}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.value}</span>
            <span>Actions</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
