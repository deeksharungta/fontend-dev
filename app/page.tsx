"use client";

import styles from "./page.module.css";
import Tasks from "@/components/Task/Tasks";
import DragDrop from "@/components/DragDrop/DragDrop";
import BeforeAfter from "@/components/BeforeAfter/BeforeAfter";
import Loader from "@/components/Loader/Loader";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import Shades from "@/components/Shades/Shades";
import Models from "@/components/AIModels/Models";
import AskAIButton from "@/components/AskAI/AskAIButton";
import SelectItemMenu from "@/components/SelectItemMenu/SelectItemMenu";
import { useContext, useEffect, useRef } from "react";
import { ColorContext } from "@/store/color-context";

export default function Home() {
  const { color, shades } = useContext(ColorContext);

  useEffect(() => {
    const primaryColor = color && color;
    const secondaryColor = shades && shades[4];
    const gradientColor = shades && shades[2];
    const tertiaryColor = shades && shades[2];
    const clockColor = shades && shades[5];
    const overlayColor = `${primaryColor}61`;
    const checkboxColor = `${shades[5].slice(0, -1)}, 0.4)`;

    document.body.style.setProperty("--primary-color", primaryColor);
    document.body.style.setProperty("--secondary-color", secondaryColor);
    document.body.style.setProperty("--tertiary-color", tertiaryColor);
    document.body.style.setProperty("--overlay-color", overlayColor);
    document.body.style.setProperty("--checkbox-color", checkboxColor);
    document.body.style.setProperty("--gradient-color", gradientColor);
    document.body.style.setProperty("--clock-color", clockColor);
  }, [color, shades]);

  const blockRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  // const blocksRef = useRef<HTMLDivElement>(null);
  // const sliderVerRef = useRef<HTMLDivElement>(null);

  const dragMouseDown = (e: any) => {
    if (!blockRef.current || !sliderRef.current) return;

    let dragX = e.clientX;
    document.onmousemove = (event) => {
      blockRef.current!.style.width =
        blockRef.current!.offsetWidth - event.clientX + dragX + "px";
      dragX = event.clientX;
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // const dragMouseDowns = (e: any) => {
  //   if (!blocksRef.current || !sliderVerRef.current) return;

  //   let dragY = e.clientY;
  //   document.onmousemove = (event) => {
  //     blocksRef.current!.style.height =
  //       blocksRef.current!.offsetHeight + event.clientY - dragY + "px";
  //     dragY = event.clientY;
  //   };

  //   document.onmouseup = () => {
  //     document.onmousemove = null;
  //     document.onmouseup = null;
  //   };
  // };

  useEffect(() => {
    blockRef.current!.style.width = blockRef.current!.offsetWidth + "px";
    return () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <ColorPicker />
        <Shades />
      </div>
      <div className={styles.content}>
        <div className={styles.first}>
          <Tasks />
          <div
            className={styles.slider}
            ref={sliderRef}
            onMouseDown={dragMouseDown}
          >
            <div className={styles["slider-thumb"]} />
          </div>
          <div ref={blockRef} className={styles.model}>
            <Models />
          </div>
          <DragDrop />
        </div>
        {/* <div
          className={styles["slider-horizontal"]}
          ref={sliderVerRef}
          onMouseDown={dragMouseDowns}
        >
          <div className={styles["slider-thumb-horizontal"]} />
        </div> */}
        <div className={styles.second}>
          <BeforeAfter />
          <Loader />
          <SelectItemMenu />
          <AskAIButton />
        </div>
      </div>
    </main>
  );
}
