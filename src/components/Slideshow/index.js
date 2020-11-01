import React, { useEffect } from "react";
import styles from "./Slideshow.module.css";
// import { Link } from "react-router-dom";

const Slideshow = () => {
  console.log("slideshow");

  const arr = [
    "https://northernbeachespainting.com.au/wp-content/uploads/2016/12/12quinton_09_wq.jpg",
    "https://northernbeachespainting.com.au/wp-content/uploads/2014/04/11serpentine_PQ_06.jpg",
    "https://northernbeachespainting.com.au/wp-content/uploads/2016/12/12quinton_30_wq.jpg",
    "https://northernbeachespainting.com.au/wp-content/uploads/2017/06/Tina-Wild-_DSC9977.jpg",
  ];

    let slideIndex = 1;

    let myTimer = 0;

    let slideshowContainer = {};

    // NEXT AND PREVIOUS CONTROL
    const handleChange = (n) => {
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
      showSlides(slideIndex);
      myTimer = setInterval(function () {
        handleChange(1);
      }, 4000);

      //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
      slideshowContainer = document.getElementsByClassName(
        "slideshow-inner"
      )[0];

      //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
      // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
      if(slideshowContainer){
        slideshowContainer.addEventListener("mouseenter", pause);
        slideshowContainer.addEventListener("mouseleave", resume);
      }

    });

    //Controls the current slide and resets interval if needed
     const currentSlide = (n)=> {
      clearInterval(myTimer);
      myTimer = setInterval(function () {
        handleChange(n + 1);
      }, 4000); 
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      console.log('s')
      let i = 0;
      let slides = document.getElementsByClassName("mySlides");
      if (slides.length) {
        console.log('sss')

        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
    }

    const pause = () => {
      clearInterval(myTimer);
    };

    const resume = () => {
      clearInterval(myTimer);
      myTimer = setInterval(function () {
        handleChange(slideIndex);
      }, 4000);
    };
  ;

  return (
    <div className={styles.slideshowContainer}>
      <div>TEST</div>

      <div className={styles.slideshowInner}>
        <div className={`${styles.mySlides} ${styles.fade} mySlides`}>
          <img
            src="https://northernbeachespainting.com.au/wp-content/uploads/2016/12/12quinton_09_wq.jpg"
            // style="width: 100%;"
            alt="sally lightfoot crab"
          />
          <div>Sally Lightfoot Crab</div>
        </div>
        <div className={`${styles.mySlides} ${styles.fade} mySlides`}>
        <img  src='https://northernbeachespainting.com.au/wp-content/uploads/2014/04/11serpentine_PQ_06.jpg'
                  alt="sally lightfoot crab"
          />
          <div>Sally Lightfoot Crab</div>
        </div>

        <a className={styles.prev} onClick={handleChange(-1)}>
          &#10094;
        </a>
        <a className={styles.next} onClick={handleChange(1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div>
        <span className={`${styles.dot} dot`} onClick={currentSlide(1)}></span>
        <span className={`${styles.dot} dot`} onClick={currentSlide(2)}></span>
        <span className={`${styles.dot} dot`} onClick={currentSlide(3)}></span>
        <span className={`${styles.dot} dot`} onClick={currentSlide(4)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
