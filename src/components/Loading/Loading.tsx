import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles["loading__ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loading;
