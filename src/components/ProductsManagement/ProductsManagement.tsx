import { useCartStore } from "../../store/CartStore";
import { Button } from "../Button";
import styles from "./ProductsManagement.module.scss";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useState, useEffect } from "react";
import { EditModal } from "../EditModal";
import { ProductsDTO } from "../../types/dto";

export const ProductsManagement = () => {
  const [edit, setEdit] = useState(false);
  const { products, setEditId } = useCartStore();

  const handleEditModal = (index: number, item: ProductsDTO) => {
    setEditId(index);
    setEdit(!edit);
  };

  const handleNewProduct = () => {
    setEditId(-2);
    setEdit(!edit);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={styles["list__container"]}>
      <div data-testid="title" className={styles["list__title"]}>
        Products Management
      </div>
      <Button
        data-testid="create-new-product"
        onClick={() => handleNewProduct()}
      >
        New product
      </Button>
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
              <Button onClick={() => handleEditModal(index, item)}>
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
