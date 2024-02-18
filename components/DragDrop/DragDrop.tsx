"use client";

import { useEffect, useState } from "react";
import styles from "./DragDrop.module.scss";
import Clock from "../Clock/Clock";
import Image from "next/image";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const handleOnDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={styles.container}>
        <Droppable droppableId="container">
          {(provided) => (
            <div
              className={styles["clock-container"]}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Draggable draggableId="clock" index={0}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Clock />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <p>{`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`}</p>
        <Image src="/arrow.svg" height={32} width={16} alt="arrow" />
        <Droppable droppableId="drop">
          {(provided) => (
            <div
              className={styles.drop}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
