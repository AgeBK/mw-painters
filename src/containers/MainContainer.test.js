import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MainContainer from "./MainContainer";

// import App from "./App";

class MockApp extends React.Component {
  render() {
    return <p>Hello from your Mock App</p>;
  }
}

test("renders learn react link", () => {
  //   const { getByText } = render(<MainContainer />);
  const MockWithHOC = MainContainer(MockApp);
  const { getByText } = render(<MockWithHOC />);

  //   expect(getByText(/HOC Example/i)).toBeInTheDocument();
  expect(getByText(/Hello from your Mock App/i)).toBeInTheDocument();
  //   getByText(/test/i).toBeInTheDocument();
  //   const linkElement = getByText(/test/i);
  //   expect(linkElement).toBeInTheDocument();
});
