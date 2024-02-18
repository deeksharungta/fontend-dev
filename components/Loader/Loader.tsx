import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles["scanner"]} />
      <div className={styles["rings"]} />
    </div>
  );
};

export default Loader;
