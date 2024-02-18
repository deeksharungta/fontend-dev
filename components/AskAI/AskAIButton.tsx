"use client";

import Image from "next/image";
import styles from "./AskAIButton.module.scss";
import { useState } from "react";
import AskAI from "./AskAI";

const AskAIButton = () => {
  const [showAskAI, setShowAskAI] = useState(false);

  const clickHandler = () => {
    if (showAskAI) {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    setShowAskAI((prev) => !prev);
  };

  return (
    <>
      <button
        style={{
          background: `${showAskAI ? "#141417" : "var(--primary-color)"}`,
        }}
        className={styles.btn}
        onClick={clickHandler}
      >
        <Image
          src={`${showAskAI ? "close.svg" : "stars_two.svg"}`}
          width={24}
          height={24}
          alt="stars icon"
        />
      </button>
      {showAskAI && <AskAI setShowAskAI={setShowAskAI} />}
    </>
  );
};

export default AskAIButton;
