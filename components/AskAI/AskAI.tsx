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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_33_1421)">
              <path
                d="M15.833 0.833984L14.783 3.12565L12.4997 4.16732L14.783 5.21732L15.833 7.50065L16.8747 5.21732L19.1663 4.16732L16.8747 3.12565M7.49967 3.33398L5.41634 7.91732L0.833008 10.0007L5.41634 12.084L7.49967 16.6673L9.58301 12.084L14.1663 10.0007L9.58301 7.91732M15.833 12.5007L14.783 14.784L12.4997 15.834L14.783 16.8757L15.833 19.1673L16.8747 16.8757L19.1663 15.834L16.8747 14.784"
                fill={`var(--secondary-color)`}
              />
            </g>
            <defs>
              <clipPath id="clip0_33_1421">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

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
