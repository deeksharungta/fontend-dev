"use client";

import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./DropDownMenu.module.scss";

const menuItemsInitialState = [
  {
    id: 1,
    itemName: "UX/UI Design",
    checked: true,
  },
  {
    id: 2,
    itemName: "Frontend",
    checked: true,
  },
  {
    id: 3,
    itemName: "Backend",
    checked: true,
  },
  {
    id: 4,
    itemName: "Full Stack",
    checked: false,
  },
  {
    id: 5,
    itemName: "Graphic Designer",
    checked: false,
  },
  {
    id: 6,
    itemName: "Web Designer",
    checked: false,
  },
  {
    id: 7,
    itemName: "QA",
    checked: false,
  },
];

const DropDownMenu = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsInitialState);

  const handleSelectAll = () => {
    const updatedMenuItems = menuItems.map((item) => ({
      ...item,
      checked: !selectAll,
    }));
    setMenuItems(updatedMenuItems);
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (itemId: number) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setMenuItems(updatedMenuItems);
    setSelectAll(updatedMenuItems.every((item) => item.checked));
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
        <label>All</label>
      </div>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          itemName={item.itemName}
          checked={item.checked}
          onChange={() => handleSelectItem(item.id)}
        />
      ))}
    </div>
  );
};

export default DropDownMenu;
