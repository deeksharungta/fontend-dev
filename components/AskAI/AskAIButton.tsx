"use client";

import Image from "next/image";
import styles from "./AskAIButton.module.scss";
import { useState } from "react";
import AskAI from "./AskAI";

const AskAIButton = () => {
  const [showAskAI, setShowAskAI] = useState(false);

  return (
    <>
      <button
        style={{
          background: `${showAskAI ? "#141417" : "var(--primary-color)"}`,
        }}
        className={styles.btn}
        onClick={() => setShowAskAI((prev) => !prev)}
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
