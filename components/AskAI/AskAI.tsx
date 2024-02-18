import Image from "next/image";
import styles from "./AskAI.module.scss";
import Switch from "../Switch/Switch";
import Modal from "./Modal";

type AskAIProps = {
  setShowAskAI: (value: boolean) => void;
};

const AskAI: React.FC<AskAIProps> = ({ setShowAskAI }) => {
  return (
    <Modal onClose={() => setShowAskAI(false)}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Image src="/stars.svg" width={20} height={20} alt="Three stars" />
          <span>Ask AI</span>
        </div>
        <textarea placeholder="Ask AI" />
        <div className={styles.footer}>
          <Switch />
          <button className={styles["generate-btn"]}>Generate</button>
        </div>
      </div>
    </Modal>
  );
};

export default AskAI;
