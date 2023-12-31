import { useCartStore } from "../../store/CartStore";
import { Button } from "../Button";
import styles from "./ProductsManagement.module.scss";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useState } from "react";
import { EditModal } from "../EditModal";

import {
  deleteProduct,
  getProducts,
  useFetchProducts,
} from "../../services/DataProductsSevices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const ProductsManagement = () => {
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false);
  const { setEditId, setProducts } = useCartStore();
  const { data: productsList } = useFetchProducts();

  const handleEditModal = (index: number) => {
    setEditId(index);
    setEdit(!edit);
  };

  const mutationDelete = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleDeleteModal = (item: any) => {
    if (window.confirm("Confirm procuct exclusion?") == true)
      mutationDelete.mutate(item);
  };

   const handleNewProduct = () => {
    setEditId(-2);
    setEdit(!edit);
  };

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
      <ul className={styles["list__wrapper"]}>p
        <li className={styles["list__header"]}>
          <span>Id</span>
          <span>Title</span>
          <span>Price</span>
          <span>Actions</span>
        </li>
        {productsList?.map((item: any, index: number) => (
          <li key={item.id} className={styles["list__item"]}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{Number(item.value).toFixed(2)}</span>
            <span>
              <Button
                data-testid={`edit-product-btn${item.id}`}
                onClick={() => handleEditModal(index)}
              >
                <BiPencil size={20} />
              </Button>
              <Button>
                <BiTrash size={20} onClick={(e) => handleDeleteModal(item)} />
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
