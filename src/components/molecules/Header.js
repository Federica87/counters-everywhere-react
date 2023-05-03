import React, { useState } from "react";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Header({ idCounters, setIdCounters }) {
  const [counterNumber, setCounterNumber] = useState(0);

  function handleInputCounter(e) {
    if (e.target.value !== "") {
      if (e.target.value.match(/^[0-9]+$/) && e.target.value >= 0) {
        let minus = e.target.value - idCounters.length;
        let tempCounterNumber = counterNumber;
        let tempIdCounters = [...idCounters];

        if (minus > 0) {
          for (let i = 0; i < minus; i++) {
            tempCounterNumber += 1;
            tempIdCounters.push(tempCounterNumber);
          }
        } else if (minus < 0) {
          for (let i = 0; i > minus; i--) {
            tempIdCounters.pop();
          }
        }
        setCounterNumber(tempCounterNumber);
        setIdCounters(tempIdCounters);
      } else alert("The value is not value");
    }
  }

  return React.createElement(
    "header",
    null,
    React.createElement(Title),
    React.createElement(Button, {
      buttonName: "Add Counter",
      event: () => {
        setCounterNumber(counterNumber + 1);
        setIdCounters((old) => [...old, counterNumber + 1]);
      },
    }),
    React.createElement(Input, {
      value: idCounters.length,
      event: (e) => handleInputCounter(e),
    }),
    React.createElement(Button, {
      buttonName: "Remove Counter",
      event: () => setIdCounters(idCounters.slice(0, -1)),
    })
  );
}

export default Header;
