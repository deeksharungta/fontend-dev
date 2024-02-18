"use client";

import React, { useContext } from "react";
import styles from "./Shades.module.scss";
import { ColorContext } from "@/store/color-context";

const Shades = () => {
  const { shades } = useContext(ColorContext);

  return (
    <div className={styles.shades}>
      {shades &&
        shades.map((shade, index) => (
          <div
            className={styles.shade}
            key={index}
            style={{ background: `${shade}` }}
          />
        ))}
    </div>
  );
};

export default Shades;
