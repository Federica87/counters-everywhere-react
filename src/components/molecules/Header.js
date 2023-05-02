import React, { useState } from "react";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Header({ idCounters, setIdCounters }) {
  const [counterNumber, setCounterNumber] = useState(0);

  return React.createElement(
    "header",
    null,
    React.createElement(Title),
    React.createElement(Button, {
      buttonName: "Add Counter",
      event: () => {
        setCounterNumber(counterNumber + 1);
        setIdCounters((old) => [...old, counterNumber + 1]);
        console.log(idCounters);
      },
    }),
    React.createElement(Input),
    React.createElement(Button, { buttonName: "Remove Counter" })
  );
}

export default Header;
