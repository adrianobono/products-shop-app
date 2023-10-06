import { useForm } from "react-hook-form";
import {
  patchProduct,
  postProduct,
  getProducts,
} from "../../services/DataProductsSevices";
import { ProductsDTO } from "../../types/dto";
import { useCartStore } from "../../store/CartStore";
import { useEffect } from "react";
import styles from "./EditForm.module.scss";

interface EditFormProps {
  item: ProductsDTO;
}

export const EditForm = ({ item }: EditFormProps) => {
  const {
    setEditId,
    editId,
    setProducts,
    editItem: ProductsDTO,
  } = useCartStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    values: item,
  });
  const clearItem = {
    id: -1,
    title: "",
    value: 0,
    description: "",
    srcImage: "",
    altImage: "",
    quantity: 0,
    stock: 0,
  };

  useEffect(() => {
    editId < 0 && reset(clearItem);
  }, [editId]);

  return (
    <div className={styles["list__form-wrapper"]}>
      <form
        id="editForm"
        className={styles["list__form-edit"]}
        onSubmit={handleSubmit((data) => {
          if (editId < -1) {
            postProduct({ ...data })
              .then((product) => {
                setEditId(-1);
              })
              .then(() => {
                Promise.all([getProducts()]).then((items) => {
                  setProducts(items[0]);
                });
              });
          } else {
            patchProduct(item.id, { ...data })
              .then(() => {
                setEditId(-1);
              })
              .then(() => {
                Promise.all([getProducts()]).then((items) => {
                  setProducts(items[0]);
                });
              });
          }
        })}
      >
        <label htmlFor="title">Product Title</label>
        <input
          id="title"
          {...register("title", { required: true, minLength: 2 })}
          placeholder="Product title"
          required
        />
        {errors.title && errors.title.type === "minLength" && (
          <span role="alert">Text minimal length is 2.</span>
        )}

        <label htmlFor="value">Product price</label>
        <input
          id="value"
          {...register("value")}
          type="number"
          placeholder="Product price"
          required
        />

        <label htmlFor="value">Product stokck</label>
        <input
          id="value"
          {...register("stock")}
          type="number"
          placeholder="Product stock"
          required
        />
        <label htmlFor="srcImage">Product image url</label>
        <input
          pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
          id="srcImage"
          {...register("srcImage")}
          placeholder="Product image url"
          required
        />

        <label htmlFor="altImage">Product image alt </label>
        <input
          id="altImage"
          {...register("altImage")}
          placeholder="Product image description"
          required
        />

        <label htmlFor="desciption">Product description</label>
        <textarea
          id="description"
          {...register("description")}
          placeholder="Product Description"
        />

        <input type="submit" disabled={!isDirty || !isValid} />
      </form>
    </div>
  );
};
