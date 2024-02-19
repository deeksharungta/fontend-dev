"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BeforeAfter.module.scss";

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!containerRef.current || !isDragging || !event) return;

      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const containerWidth = containerRef?.current?.offsetWidth;
      const x = Math.max(
        0,
        Math.min(event.clientX - containerLeft, containerWidth)
      );
      const percent = Math.max(0, Math.min((x / containerWidth) * 100, 100));

      setSliderPosition(percent);
    };
    document.onmousemove = handleMove;
    window.onmouseup = () => {
      setIsDragging(false);
    };

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onMouseUp={handleMouseUp}
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
