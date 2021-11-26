import React from "react";
const doSomethingWithInput = (theInput) => {
  //Do something with the input
  return <h1>{theInput}</h1>;
};

const justAnAlert = () => {
  alert("hello");
};

export { doSomethingWithInput, justAnAlert };
