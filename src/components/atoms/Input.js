import React from "react";

function Input({ value, event }) {
  return React.createElement("input", {
    onChange: event,
    value: value,
  });
}
export default Input;
