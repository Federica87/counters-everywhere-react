import React from "react";
import CounterName from "../atoms/CounterName";
import Button from "../atoms/Button";
import Display from "../atoms/Display";

function Counter({ id }) {
  return React.createElement(
    "li",
    null,
    React.createElement(
      "article",
      null,
      React.createElement(CounterName, { id: id }),
      React.createElement(
        "div",
        { className: "counter-container" },
        React.createElement(Button, { buttonName: "-" }),
        React.createElement(Display),
        React.createElement(Button, { buttonName: "+" })
      ),
      React.createElement(Button, { buttonName: "Reset" }),
      React.createElement(Button, { buttonName: "Delete Counter" })
    )
  );
}
export default Counter;
