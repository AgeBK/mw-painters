import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import IconMapping from "../IconMapping";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { pageIntro } from "../../data/data.json";
import styles from "./HeadingList.module.css";

// library.add(faCheckCircle);

const HeadingList = (props) => {
  const createMarkup = (val) => ({ __html: val });

  const { heading, listItems, style } = props.data;
  console.log(props.data);
  console.log(style);

  return (
    <section className={styles.hl}>
      <h4>{heading}</h4>
      <ul className={styles[style]}>
        {listItems.map(({ text, icon }) => (
          <li>
            {IconMapping[icon]}
            <span dangerouslySetInnerHTML={createMarkup(text)}></span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeadingList;
