import React from "react";
import styles from "./Slideshow.module.css";
import { slides } from "../../data/data.json";

const Slideshow = () => {
  const slideInterval = 6000;
  let slideIndex = 1;
  let myTimer;
  let slideshowContainer;

  // NEXT AND PREVIOUS CONTROL
  const handleChange = (n) => {
    clearInterval(myTimer);
    if (n < 0) {
      showSlides((slideIndex -= 1));
    } else {
      showSlides((slideIndex += 1));
    }

    if (n === -1) {
      myTimer = setInterval(function () {
        handleChange(n + 2);
      }, slideInterval);
    } else {
      myTimer = setInterval(function () {
        handleChange(n + 1);
      }, slideInterval);
    }
  };

  window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
      handleChange(1);
    }, slideInterval);

    slideshowContainer = document.getElementsByClassName("slideshowInner")[0];

    if (slideshowContainer) {
      slideshowContainer.addEventListener("mouseenter", pause);
      slideshowContainer.addEventListener("mouseleave", resume);
    }
  });

  const currentSlide = (n) => {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
      handleChange(n + 1);
    }, slideInterval);
    showSlides((slideIndex = n));
  };

  const showSlides = (n) => {
    let i = 0;
    let slides = document.getElementsByClassName("slide");
    if (slides.length) {
      const dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        alert(" n is less than 1");
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // remove active class on dots
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(` ${styles.active}`, "");
      }

      // show current slide and dot
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += ` ${styles.active}`;
    }
  };

  const pause = () => {
    clearInterval(myTimer);
  };

  const resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
      handleChange(slideIndex);
    }, slideInterval);
  };

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slideshowInner}>
        {slides.map((val, i) => (
          <div key={i} className={`${styles.slide} slide`}>
            <img
              src={require("../../img/" + val)}
              alt="Manly Warringah Painting"
            />
          </div>
        ))}
        <button className={styles.prev} onClick={() => handleChange(-1)}>
          &#10094;
        </button>
        <button className={styles.next} onClick={() => handleChange(1)}>
          &#10095;
        </button>
      </div>
      <div className={styles.dotCont}>
        {slides.map((val, i) => (
          <div
            key={i}
            className={`${styles.dot} dot`}
            onClick={() => currentSlide(i + 1)}
          >
            <div key={i} className={styles.dotInner}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
