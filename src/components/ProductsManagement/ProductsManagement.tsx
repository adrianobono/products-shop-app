import { useCartStore } from "../../store/CartStore";
import { Button } from "../Button";
import styles from "./ProductsManagement.module.scss";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useState } from "react";
import { EditModal } from "../EditModal";

export const ProductMangement = () => {
  const [edit, setEdit] = useState(false);
  const { products, setEditId } = useCartStore();

  const handleEditModal = (index: number) => {
    setEditId(index);
    setEdit(!edit);
  };

  const handleNewProduct = () => {
    setEditId(-2);
    setEdit(!edit);
  };
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>Products Management</div>
      <Button onClick={() => handleNewProduct()}>New product</Button>
      <ul className={styles["list__wrapper"]}>
        <li className={styles["list__header"]}>
          <span>Id</span>
          <span>Title</span>
          <span>Price</span>
          <span>Actions</span>
        </li>
        {products.map((item, index) => (
          <li key={item.id} className={styles["list__item"]}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.value}</span>
            <span>
              <Button onClick={() => handleEditModal(index)}>
                <BiPencil size={20} />
              </Button>
              <Button>
                <BiTrash size={20} />
              </Button>
            </span>
          </li>
        ))}
      </ul>
      {edit && (
        <EditModal
          hasCloseBtn={true}
          isOpen={edit}
          onClose={() => setEdit(!edit)}
        >
          Edit form
        </EditModal>
      )}
    </div>
  );
};
