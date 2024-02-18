"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Model.module.scss";
import Rating from "./Rating";
import Contributor from "./Contributor";
import Detail from "./Detail";

type ModelProps = {
  modelName: string;
  version: string;
  license: string;
  contributors: string[];
  ratings: number;
};

const Model: React.FC<ModelProps> = ({
  modelName,
  version,
  license,
  contributors,
  ratings,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
      <tr
        className={`${styles["table-row"]} ${showDetails && styles.active}`}
        onClick={() => setShowDetails((prev) => !prev)}
      >
        <td className={styles["model-name"]}>
          <Image src="/chatgpt.png" height={24} width={24} alt="Chatgpt logo" />
          <span>{modelName}</span>
        </td>
        <td className={styles["version"]}>{version}</td>
        <td className={styles["license"]}>{license}</td>
        <td className={styles.contributors}>
          <Contributor contributors={contributors} />
        </td>
        <td className={styles.ratings}>
          <Rating rating={ratings} />
        </td>
      </tr>
      {showDetails && <Detail />}
    </>
  );
};

export default Model;
