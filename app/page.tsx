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
import { useContext, useEffect } from "react";
import { ColorContext } from "@/store/color-context";

export default function Home() {
  const { color, shades } = useContext(ColorContext);

  useEffect(() => {
    const primaryColor = color && color;
    const secondaryColor = shades && shades[3];
    const gradientColor = shades && shades[1];
    const tertiaryColor = shades && shades[1];
    const clockColor = shades && shades[4];
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

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <ColorPicker />
        <Shades />
      </div>
      <div className={styles.content}>
        <div className={styles.first}>
          <Tasks />
          <Models />
          <DragDrop />
        </div>
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
