import React from "react";
import styles from "./Contributor.module.scss";
import Image from "next/image";

type ContributorProps = {
  contributors: string[];
};

const Contributor: React.FC<ContributorProps> = ({ contributors }) => {
  return (
    <div className={styles["contributors"]}>
      {contributors.map((contributor, index) => (
        <Image
          key={index}
          src="/contributor.png"
          width={24}
          height={24}
          alt="contributor-image"
        />
      ))}
    </div>
  );
};

export default Contributor;
