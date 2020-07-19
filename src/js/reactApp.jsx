import ReactDom from "react-dom";
import * as React from "react";

const App = (props) => {
  return <div>hello react</div>;
};

const app = document.getElementById("app");
if (app) {
  ReactDom.render(<App />, app);
} else {
  console.log("no root");
}
