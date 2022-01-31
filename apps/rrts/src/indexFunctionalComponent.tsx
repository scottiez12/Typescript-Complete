import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
}

const App = (props: AppProps): JSX.Element => {
  return (
    <>
      <h2>Yay functional components. {props.color}</h2>
    </>
  );
};

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
