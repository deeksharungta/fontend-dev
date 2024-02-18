"use client";

import Image from "next/image";
import styles from "./SelectItemMenu.module.scss";
import { useState } from "react";
import MenuItem from "../AIModels/MenuItem";

const SelectItemMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      itemName: "UX/UI Design",
    },
    {
      id: 2,
      itemName: "Frontend",
    },
    {
      id: 3,
      itemName: "Backend",
    },
  ];

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
          {menuItems.map((item) => (
            <MenuItem key={item.id} itemName={item.itemName} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectItemMenu;
