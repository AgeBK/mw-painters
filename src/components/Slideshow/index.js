import React, { useEffect } from "react";
import styles from "./Slideshow.module.css";
// import { Link } from "react-router-dom";

/* eslint-disable */

const Slideshow = () => {
  console.log("slideshow");

  const arr = [
    "https://northernbeachespainting.com.au/wp-content/uploads/2016/12/12quinton_09_wq.jpg",
    "https://northernbeachespainting.com.au/wp-content/uploads/2014/04/11serpentine_PQ_06.jpg",
    "https://northernbeachespainting.com.au/wp-content/uploads/2016/12/12quinton_30_wq.jpg",
    "https://northernbeachespainting.com.au/wp-content/uploads/2017/06/Tina-Wild-_DSC9977.jpg",
  ];

  let slideIndex = 1;

  let myTimer;

  let slideshowContainer;

  // NEXT AND PREVIOUS CONTROL
  const handleChange = (n) => {
    console.log('handleChange');
    clearInterval(myTimer);
    if (n < 0) {
      showSlides((slideIndex -= 1));
    } else {
      showSlides((slideIndex += 1));
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
      myTimer = setInterval(function () {
        handleChange(n + 2);
      }, 4000);
    } else {
      myTimer = setInterval(function () {
        handleChange(n + 1);
      }, 4000);
    }
  };

  window.addEventListener("load", function () {
    console.log('load');
    showSlides(slideIndex);
    myTimer = setInterval(function () {
      handleChange(1);
    }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName(
      "slideshowInner"
    )[0];

    console.log(slideshowContainer)

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    if (slideshowContainer) {
      slideshowContainer.addEventListener("mouseenter", pause);
      slideshowContainer.addEventListener("mouseleave", resume);
    }

  });

  //Controls the current slide and resets interval if needed
  const currentSlide = (n) => {
    console.log('currentSlide');
    clearInterval(myTimer);
    myTimer = setInterval(function () {
      handleChange(n + 1);
    }, 4000);
    showSlides((slideIndex = n));
  }

  const showSlides = (n) => {
    // console.log('showSlides')
    let i = 0;  // TODO: IS THIS BEING USED?
    let slides = document.getElementsByClassName("slide");
    if (slides.length) {
      const dots = document.getElementsByClassName("dot");

      console.log(n)

      // if slide 4, go back to 1
      if (n > slides.length) {
        slideIndex = 1;
      }

      //?
      if (n < 1) {
        alert(' n is less than 1')
        slideIndex = slides.length;
      }

      // hide all slides ??
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
  }

  const pause = () => {
    clearInterval(myTimer);
  };

  const resume = () => {
    console.log('resume')
    clearInterval(myTimer);
    myTimer = setInterval(function () {
      handleChange(slideIndex);
    }, 4000);
  };

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slideshowInner}>
        {arr.map((val, i) =>
          <div key={i} className={`${styles.slide} slide`}>
            <img
              src={val}
              // style="width: 100%;"
              alt="TODO: ADD SOMETHING HERE"
            />
            <div>image {i + 1}</div>
          </div>
        )}
        <button className={styles.prev} onClick={() => handleChange(-1)}>
          &#10094;
        </button>
        <button className={styles.next} onClick={() => handleChange(1)}>
          &#10095;
        </button>
      </div>
      <br />
      <>
        {arr.map((val, i) =>
          <span key={i} className={`${styles.dot} dot`} onClick={() => currentSlide(i + 1)}></span>
        )}
      </>
    </div>
  );
};

export default Slideshow;
