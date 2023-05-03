import React, { useState } from "react";
import CounterName from "../atoms/CounterName";
import Button from "../atoms/Button";
import Display from "../atoms/Display";

function Counter({ id, idCounters, setIdCounters }) {
  const [counter, setCounter] = useState(0);

  function handleCounter(operation) {
    let tempIdCounters = [...idCounters];
    switch (operation) {
      case "increase":
        setCounter(counter + 1);
        break;
      case "decrease":
        setCounter(counter - 1);
        break;
      case "reset":
        setCounter(0);
        break;
      case "delete":
        let index = tempIdCounters.findIndex((counter) => counter === id);
        tempIdCounters.splice(index, 1);
        setIdCounters(tempIdCounters);
      default:
        return counter;
    }
  }

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
        React.createElement(Button, {
          buttonName: "-",
          event: () => handleCounter("decrease"),
        }),
        React.createElement(Display, { counter: counter }),
        React.createElement(Button, {
          buttonName: "+",
          event: () => handleCounter("increase"),
        })
      ),
      React.createElement(Button, {
        buttonName: "Reset",
        event: () => handleCounter("reset"),
      }),
      React.createElement(Button, {
        buttonName: "Delete Counter",
        event: () => handleCounter("delete"),
      })
    )
  );
}
export default Counter;
