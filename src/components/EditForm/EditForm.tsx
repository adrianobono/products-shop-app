import { useForm } from "react-hook-form";
import { patchProduct, postProduct } from "../../services/DataProductsSevices";
import { ProductsDTO } from "../../types/dto";
import { useCartStore } from "../../store/CartStore";
import { useEffect } from "react";
import styles from "./EditForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EditFormProps {
  item: ProductsDTO;
}

export const EditForm = ({ item }: EditFormProps) => {
  const queryClient = useQueryClient();

  const { setEditId, editId } = useCartStore();
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

  const mutationCreate = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const mutationPatch = useMutation({
    mutationFn: patchProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  useEffect(() => {
    editId < 0 && reset(clearItem);
  }, [editId]);

  return (
    <div className={styles["list__form-wrapper"]}>
      <form
        id="editForm"
        className={styles["list__form-edit"]}
        onSubmit={handleSubmit((data) => {
          setEditId(-1);
          if (editId < -1) {
            mutationCreate.mutate(data);
          } else {
            data.id = item.id;
            mutationPatch.mutate(data);
          }
          setEditId(-1);
        })}
      >
        <label htmlFor="title">Product Title</label>
        <input
          id="title"
          data-testid="input-title"
          {...register("title", { required: true, minLength: 2 })}
          placeholder="Product title"
          required
        />
        {errors.title && errors.title.type === "minLength" && (
          <span data-testid="title-error" role="alert">
            Text minimal length is 2.
          </span>
        )}

        <label htmlFor="value">Product price</label>
        <input
          id="value"
          {...register("value", { min: 0.01 })}
          type="number"
          min={0}
          placeholder="Product price"
          required
          {...(errors.value && errors.value.type === "min" && (
            <span role="alert">Value not acepted.</span>
          ))}
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

        <input
          data-testid="send-btn"
          type="submit"
          value="Send"
          disabled={!isDirty || !isValid}
        />
      </form>
    </div>
  );
};
