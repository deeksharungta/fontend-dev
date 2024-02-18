"use client";

import { useEffect, useState } from "react";
import styles from "./DragDrop.module.scss";
import Clock from "../Clock/Clock";
import Image from "next/image";

const DragDrop = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = String(((currentTime.getHours() + 11) % 12) + 1);
  const minutes = String(currentTime.getMinutes());

  const handleOnDrag = () => {
    // event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div
        draggable
        onDrag={handleOnDrag}
        className={styles["clock-container"]}
      >
        <Clock />
      </div>
      <p>{`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`}</p>
      <Image src="/arrow.svg" height={32} width={16} alt="arrow" />
      <div className={styles.drop} />
    </div>
  );
};

export default DragDrop;
