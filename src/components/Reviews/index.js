import React, { useEffect } from "react";
import { reviews } from "../../data/data.json";
import styles from "./Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    let count = 0;
    const els = document.querySelectorAll(".cont");

    const showReview = () => els[count].classList.add(styles.show);

    if (reviews.length && els.length) {
      showReview();
      const interval = setInterval(() => {
        Array.from(els).forEach((el) => {
          el.classList.remove(styles.show);
        });
        count = count === reviews.length - 1 ? 0 : count + 1;
        showReview();
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, []);

  const stars = (val) => {
    if (val) {
      let arr = [];
      for (let i = 0; i < val; i++) {
        arr.push(
          <li key={i} className={styles.icon}>
            <FontAwesomeIcon icon={faStar} />
          </li>
        );
      }
      return <ul className={styles.stars}>{arr}</ul>;
    }
  };

  return (
    <article className={styles.container}>
      <div className={styles.inner}>
        <h4 className={styles.header}>What our clients think of us</h4>
        {reviews.map(({ customer, review, rating }, i) => (
          <div className={`${styles.content}  cont`} key={i}>
            {stars(rating)}
            <div className={styles.review}>
              <FontAwesomeIcon icon={faQuoteLeft} className={styles.qLeft} />
              {review}
              <FontAwesomeIcon icon={faQuoteRight} className={styles.qRight} />
            </div>
            <div className={styles.customer}>{customer}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Reviews;
