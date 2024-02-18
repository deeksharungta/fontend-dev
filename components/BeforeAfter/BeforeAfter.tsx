"use client";

import { useState } from "react";
import styles from "./BeforeAfter.module.scss";

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleMouseUp}
      className={styles.container}
    >
      <div className={styles.img} />
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={styles.slider}
        style={{
          left: `calc(${sliderPosition}% ${
            sliderPosition > 90
              ? "- 12px"
              : sliderPosition < 20
              ? "+ 8px"
              : "- 2px"
          })`,
        }}
      >
        <div className={styles["slider-thumb"]} />
      </div>
      <div
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        className={styles.overlay}
      />
    </div>
  );
};

export default BeforeAfter;
