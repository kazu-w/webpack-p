import ReactDom from "react-dom";
import * as React from "react";

import Alert from "./alert.tsx";

const App = (props) => {
  return (
    <div>
      hello react!!
      <Alert message="success" />
    </div>
  );
};

const app = document.getElementById("app");
if (app) {
  ReactDom.render(<App />, app);
} else {
  console.log("no root");
}
