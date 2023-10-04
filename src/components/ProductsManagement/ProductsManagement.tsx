import { useCartStore } from "../../store/CartStore";
import { Button } from "../Button";
import styles from "./ProductsManagement.module.scss";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useState } from "react";
import { EditModal } from "../EditModal";
import { EditForm } from "../EditForm";

export const ProductMangement = () => {
  const [edit, setEdit] = useState(false);
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
            <span>
              <Button onClick={() => setEdit(!edit)}>
                <BiPencil size={20} />
              </Button>
              <Button>
                <BiTrash size={20} />
              </Button>
            </span>
          </li>
        ))}
      </ul>
      <EditModal hasCloseBtn={true} isOpen={edit} onClose={() => alert(1)}>
        <EditForm item={products[0]} />
      </EditModal>
    </div>
  );
};
