"use client";
import { useState } from "react";
import styles from "./Switch.module.scss";

const Switch = () => {
  const [activeButton, setActiveButton] = useState<string>("left");

  const activeButtonHandler = (current: string) => {
    setTimeout(() => {
      setActiveButton(current);
    }, 200);
  };

  return (
    <div className={styles.switch}>
      <span
        style={{ left: `${activeButton === "right" ? "50%" : ""}` }}
        className={`${styles.active} ${
          activeButton === "right"
            ? styles["slide-left"]
            : styles["slide-right"]
        }`}
      ></span>
      <button
        onClick={() => activeButtonHandler("left")}
        className={`${styles["switch-button"]} ${
          activeButton === "left" && styles["active-btn"]
        }`}
      >
        React
      </button>
      <button
        onClick={() => activeButtonHandler("right")}
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
