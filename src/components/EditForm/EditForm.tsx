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
    mode: "onChange",
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
          {...register("value", { required: true, min: 0.5 })}
          type="number"
          min={0.5}
          step="0.01"
          placeholder="Product price"
          required
        />
        {errors.value && errors.value.type === "min" && (
          <span role="alert">Value not acepted.</span>
        )}
        {errors.value && errors.value.type === "required" && (
          <span role="alert">Empty value not acepted.</span>
        )}

        <label htmlFor="value">Product stokck</label>
        <input
          id="stock"
          {...register("stock", { required: true })}
          type="number"
          min={0}
          placeholder="Product stock"
          required
        />
        {errors.stock && errors.stock.type === "required" && (
          <span role="alert">Empty value not acepted.</span>
        )}

        <label htmlFor="srcImage">Product image url</label>
        <input
          pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
          id="srcImage"
          {...register("srcImage", { required: true })}
          placeholder="Product image url"
          required
        />
        {errors.srcImage && errors.srcImage.type === "required" && (
          <span role="alert">Empty value not acepted.</span>
        )}

        <label htmlFor="altImage">Product image alt </label>
        <input
          id="altImage"
          {...register("altImage", { required: true })}
          placeholder="Product image description"
          required
        />
        {errors.altImage && errors.altImage.type === "required" && (
          <span role="alert">Empty value not acepted.</span>
        )}

        <label htmlFor="desciption">Product description</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          placeholder="Product Description"
        />
        {errors.description && errors.description.type === "required" && (
          <span role="alert">Empty value not acepted.</span>
        )}

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
