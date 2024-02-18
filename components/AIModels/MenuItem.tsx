import React from "react";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
  itemName: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ itemName }) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" />
      <label>{itemName}</label>
    </div>
  );
};

export default MenuItem;
