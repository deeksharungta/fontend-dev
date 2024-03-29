"use client";

import { useEffect, useState } from "react";
import styles from "./DragDrop.module.scss";
import Clock from "../Clock/Clock";
import Image from "next/image";

const DragDrop = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = String(((currentTime.getHours() + 11) % 12) + 1);
  const minutes = String(currentTime.getMinutes());

  function drag(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev: any) {
    ev.preventDefault();
    if (ev.target.id === "target2") setShowDiv(true);
    ev.target.appendChild(document.getElementById("reference"));
  }

  return (
    <div className={styles.container}>
      <div
        id="target1"
        onDragOver={drop}
        className={styles.drop}
        style={{ display: `${showDiv ? "block" : "none"}` }}
      ></div>

      <Clock id="reference" onDragStart={drag} draggable={true} />
      <p>{`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`}</p>
      <Image src="/arrow.svg" height={32} width={16} alt="arrow" />

      <div id="target2" className={styles.drop} onDragOver={drop}></div>
    </div>
  );
};

export default DragDrop;
