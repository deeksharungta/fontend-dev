"use client";
import { useState } from "react";
import styles from "./Switch.module.scss";

const Switch = () => {
  const [activeButton, setActiveButton] = useState<string>("left");

  return (
    <div className={styles.switch}>
      <span
        style={{ left: `${activeButton === "right" ? "50%" : ""}` }}
        className={styles.active}
      ></span>
      <button
        onClick={() => setActiveButton("left")}
        className={`${styles["switch-button"]} ${
          activeButton === "left" && styles["active-btn"]
        }`}
      >
        React
      </button>
      <button
        onClick={() => setActiveButton("right")}
        className={`${styles["switch-button"]} ${
          activeButton === "right" && styles["active-btn"]
        }`}
      >
        Vue
      </button>
    </div>
  );
};

export default Switch;
