import React from "react";

function Button({ buttonName, event }) {
  return React.createElement("button", { onClick: event }, `${buttonName}`);
}
export default Button;
