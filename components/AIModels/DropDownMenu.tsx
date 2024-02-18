import React from "react";
import MenuItem from "./MenuItem";
import styles from "./DropDownMenu.module.scss";

const DropDownMenu = () => {
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
    {
      id: 4,
      itemName: "Full Stack",
    },
    {
      id: 5,
      itemName: "Graphic Designer",
    },
    {
      id: 6,
      itemName: "Web Designer",
    },
    {
      id: 7,
      itemName: "QA",
    },
  ];
  return (
    <div className={styles.container}>
      {menuItems.map((item) => (
        <MenuItem key={item.id} itemName={item.itemName} />
      ))}
    </div>
  );
};

export default DropDownMenu;
