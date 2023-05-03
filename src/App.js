import React, { useState } from "react";
import "./App.css";
import Header from "./components/molecules/Header";
import Counter from "./components/molecules/Counter";

function App() {
  const [idCounters, setIdCounters] = useState([]);

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(Header, {
      idCounters: idCounters,
      setIdCounters: setIdCounters,
    }),
    React.createElement(
      "ul",
      null,
      idCounters.map((id) =>
        React.createElement(Counter, {
          id: id,
          key: id,
          idCounters: idCounters,
          setIdCounters: setIdCounters,
        })
      )
    )
  );
}

export default App;
