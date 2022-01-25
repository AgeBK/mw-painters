import React from "react";
import IconMapping from "../IconMapping";
import styles from "./HeadingList.module.css";

const HeadingList = (props) => {
  const createMarkup = (val) => ({ __html: val });

  const { heading, listItems, style } = props.data;

  return (
    <section className={styles.hl}>
      <h4>{heading}</h4>
      <ul className={styles[style]}>
        {listItems.map(({ text, icon }, i) => (
          <li key={i}>
            {IconMapping[icon]}
            <span dangerouslySetInnerHTML={createMarkup(text)}></span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeadingList;
