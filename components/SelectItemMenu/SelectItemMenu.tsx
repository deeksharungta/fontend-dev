"use client";

import Image from "next/image";
import styles from "./SelectItemMenu.module.scss";
import { useState } from "react";
import MenuItem from "../AIModels/MenuItem";

const SelectItemMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const menuItemsInitialState = [
    {
      id: 1,
      itemName: "UX/UI Design",
      checked: true,
    },
    {
      id: 2,
      itemName: "Frontend",
      checked: false,
    },
    {
      id: 3,
      itemName: "Backend",
      checked: true,
    },
  ];

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
      <button
        className={styles.button}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <span>Select Item</span>
        <Image
          src="dropDown_arrow.svg"
          width={20}
          height={20}
          alt="down arrow"
        />
      </button>
      {showMenu && (
        <div className={styles.menu}>
          <div className={styles.item}>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectAll}
            />
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
      )}
    </div>
  );
};

export default SelectItemMenu;
