import Image from "next/image";
import styles from "./page.module.css";
import Clock from "@/components/Clock/Clock";
import Tasks from "@/components/Task/Tasks";
import AskAI from "@/components/AskAI/AskAI";
import DragDrop from "@/components/DragDrop/DragDrop";
import Model from "@/components/AIModels/Model";
import MenuItem from "@/components/AIModels/MenuItem";
import DropDownMenu from "@/components/AIModels/DropDownMenu";
import BeforeAfter from "@/components/BeforeAfter/BeforeAfter";
import Loader from "@/components/Loader/Loader";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import Shades from "@/components/Shades/Shades";
import Models from "@/components/AIModels/Models";
import AskAIButton from "@/components/AskAI/AskAIButton";
import SelectItemMenu from "@/components/SelectItemMenu/SelectItemMenu";

export default function Home() {
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
