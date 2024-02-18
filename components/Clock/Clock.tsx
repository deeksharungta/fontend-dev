"use client";

import { useState, useEffect } from "react";
import styles from "./Clock.module.scss";
import { Draggable } from "react-beautiful-dnd";

type ClockProps = {
  onDragStart?: (value: any) => void;
  id?: string;
  draggable?: boolean;
};

const Clock: React.FC<ClockProps> = ({ onDragStart, id, draggable }) => {
  const [hourDegrees, setHourDegrees] = useState<number>(0);
  const [minuteDegrees, setMinuteDegrees] = useState<number>(0);
  const [secondDegrees, setSecondDegrees] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockWithCurrentTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function updateClock(hours: number, minutes: number, seconds: number) {
    const newHourDegrees = hours * 30;
    const newMinuteDegrees = minutes * 6;
    const newSecondDegrees = seconds * 6;

    setHourDegrees(newHourDegrees);
    setMinuteDegrees(newMinuteDegrees);
    setSecondDegrees(newSecondDegrees);
  }

  function setClockWithCurrentTime() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    updateClock(hours, minutes, seconds);
  }

  return (
    <div
      id={id}
      onDragStart={onDragStart}
      draggable={draggable}
      style={{
        position: "relative",
      }}
    >
      <div className={styles.clock}>
        <div className={`${styles["stroke"]} ${styles["stroke-one"]}`} />
        <div className={`${styles["stroke"]} ${styles["stroke-two"]}`} />
        <div className={`${styles["stroke"]} ${styles["stroke-three"]}`} />
        <div className={`${styles["stroke"]} ${styles["stroke-four"]}`} />
        <div className={styles.circle} />
        <div className={styles["circle-2"]} />
        <div
          className={styles["hour-hand"]}
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />
        <div
          className={styles["minute-hand"]}
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />
        <div
          className={styles["second-hand"]}
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
      </div>
    </div>
  );
};

export default Clock;
