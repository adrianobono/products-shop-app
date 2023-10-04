import { useForm } from "react-hook-form";
import { patchProduct } from "../../services/DataProductsSevices";
import { ProductsDTO } from "../../types/dto";
import styles from "./EditForm.module.scss";

interface EditFormProps {
  item: ProductsDTO;
}

export const EditForm = ({ item }: EditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles["list__form-wrapper"]}>
      <form
        id={`form${item.id}`}
        className={styles["list__form-edit"]}
        onSubmit={handleSubmit((data) => patchProduct(item.id, { ...data }))}
      >
        <label htmlFor="title">Product Title</label>
        <input
          id="title"
          aria-invalid={errors.title ? "true" : "false"}
          {...register("title", { required: true, minLength: 2 })}
          placeholder="Product title"
          defaultValue={item.title}
          required
        />
        {errors.title && errors.title.type === "minLength" && (
          <span>Max length exceeded</span>
        )}
        {errors.title && errors.title.type === "minLength" && (
          <span role="alert">Min length is 2</span>
        )}
        <label htmlFor="value">Product price</label>
        <input
          id="value"
          {...register("value")}
          type="number"
          placeholder="Product price"
          defaultValue={item.value}
          required
        />
        <label htmlFor="srcImage">Product image url</label>
        <input
          id="srcImage"
          {...register("srcImage")}
          placeholder="Product image url"
          defaultValue={item.srcImage}
          required
        />
        <label htmlFor="altImage">Product image alt </label>
        <input
          id="altImage"
          {...register("altImage")}
          placeholder="Product image description"
          defaultValue={item.altImage}
          required
        />

        <label htmlFor="desciption">Product description</label>
        <textarea
          id="description"
          {...register("description")}
          placeholder="Product Description"
          defaultValue={item.description}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
