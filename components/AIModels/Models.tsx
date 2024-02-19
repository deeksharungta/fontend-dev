"use client";

import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import Model from "./Model";
import styles from "./Models.module.scss";
import Image from "next/image";

const Models = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const models = [
    {
      id: 1,
      modelName: "ChatGPT",
      version: "v2.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe", "John Doe"],
      ratings: 4,
    },
    {
      id: 2,
      modelName: "TensorFlow",
      version: "v1.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe"],
      ratings: 3,
    },
    {
      id: 3,
      modelName: "Bard",
      version: "v0.5",
      license: "Private",
      contributors: ["John Doe"],
      ratings: 3,
    },
    {
      id: 4,
      modelName: "ChatGPT",
      version: "v0.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe", "John Doe"],
      ratings: 4,
    },
    {
      id: 5,
      modelName: "ChatGPT",
      version: "v0.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe", "John Doe"],
      ratings: 4,
    },
    {
      id: 6,
      modelName: "ChatGPT",
      version: "v0.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe", "John Doe"],
      ratings: 4,
    },
    {
      id: 7,
      modelName: "ChatGPT",
      version: "v0.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe", "John Doe"],
      ratings: 4,
    },
    {
      id: 8,
      modelName: "ChatGPT",
      version: "v0.1",
      license: "MIT",
      contributors: ["John Doe", "John Doe", "John Doe"],
      ratings: 4,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>
        <h2>AI Models</h2>
        <button
          style={{ background: `${showMenu ? "#101012" : "#17171a"}` }}
          className={styles["model-btn"]}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span>Model</span>
          <Image src="down_arrow.svg" alt="down arrow" width={10} height={10} />
        </button>
        {showMenu && <DropDownMenu />}
      </div>
      <table>
        <thead>
          <tr>
            <td>Model</td>
            <td>Version</td>
            <td>License</td>
            <td>Contributors</td>
            <td>Rating</td>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <Model
              key={model.id}
              modelName={model.modelName}
              version={model.version}
              license={model.license}
              contributors={model.contributors}
              ratings={model.ratings}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Models;
