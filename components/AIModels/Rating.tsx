import React from "react";
import Image from "next/image";
import styles from "./Rating.module.scss";

type RatingProps = {
  rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(
          <Image
            src="/rated-star.svg"
            width={16}
            height={16}
            alt="rating star"
            key={i}
          />
        );
      } else {
        stars.push(
          <Image
            src="/star.svg"
            width={16}
            height={16}
            alt="rating star"
            key={i}
          />
        );
      }
    }

    return stars;
  };

  return <div className={styles.container}>{renderStars()}</div>;
};

export default Rating;
