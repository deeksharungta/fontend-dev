import React from "react";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
  itemName: string;
  checked: boolean;
  onChange: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ itemName, checked, onChange }) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label>{itemName}</label>
    </div>
  );
};

export default MenuItem;
