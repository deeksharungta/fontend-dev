"use client";

import { useContext } from "react";
import { HuePicker } from "react-color";
import styles from "./ColorPicker.module.scss";
import { ColorContext } from "@/store/color-context";

const ColorPicker = () => {
  const { color, updateColor } = useContext(ColorContext);

  return (
    <div className={styles["outer-container"]}>
      <div className={styles["inner-container"]}>
        <HuePicker
          width="268px"
          height="16px"
          color={color}
          onChange={(color) => {
            updateColor(color.hex);
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
