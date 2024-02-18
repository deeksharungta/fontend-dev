"use client";

import { useState } from "react";
import { HuePicker } from "react-color";
import styles from "./ColorPicker.module.scss";

const ColorPicker = () => {
  const [color, setColor] = useState("#652BFC");

  return (
    <div className={styles["outer-container"]}>
      <div className={styles["inner-container"]}>
        <HuePicker
          width="268px"
          height="16px"
          color={color}
          onChange={(color) => {
            setColor(color.hex);
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
