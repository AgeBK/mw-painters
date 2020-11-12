// @flow
import React from "react";
import styles from "./MainContainer.module.css";
import Nav from "../../components/Nav";

// TODO: ADD FLOW TESTS?

// const MainContainer = WrappedComponent => (props: Props) => (
const MainContainer = (WrappedComponent) => () => (
  <div className={styles.cont}>
    <div className={styles.header}>
      <Nav />
    </div>
    <div className={styles.body}>
      {/* App component is passed into MainContainer as WrappedComponent */}
      <WrappedComponent />
    </div>
  </div>
);

export default MainContainer;

// const MainContainer = (props: Props) => {
//   console.log(props);

//   const HOC = () => (
//     <div className="results mainOuter">
//       <div className="row">
//         <a className={styles.homeLink} href="/">
//           <div className={`${[styles.intro, styles.bgMain].join(' ')} col-12`}>
//             <h1>{Config.siteTitle}</h1>
//             <p>{Config.siteIntro}</p>
//           </div>
//         </a>
//         <hr />
//         <props />
//       </div>
//     </div>
//   );
//   return HOC;
// };
