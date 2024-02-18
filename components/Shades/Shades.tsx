import React from "react";
import styles from "./Shades.module.scss";

const Shades = () => {
  const shades = [
    {
      id: 1,
      color: "#E9E7FF",
    },
    {
      id: 2,
      color: "#D7D3FF",
    },
    {
      id: 3,
      color: "#B9AFFF",
    },
    {
      id: 4,
      color: "#9681FF",
    },
    {
      id: 5,
      color: "#764FFF",
    },
    {
      id: 6,
      color: "#652BFC",
    },
    {
      id: 7,
      color: "#5C20E9",
    },
    {
      id: 8,
      color: "#4814C3",
    },
    {
      id: 9,
      color: "#3D139F",
    },
    {
      id: 10,
      color: "#23096B",
    },
  ];
  return (
    <div className={styles.shades}>
      {shades.map((shade) => (
        <div
          className={styles.shade}
          key={shade.id}
          style={{ background: `${shade.color}` }}
        />
      ))}
    </div>
  );
};

export default Shades;
