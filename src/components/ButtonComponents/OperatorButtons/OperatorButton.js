import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operator_button calc_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button.char}
    </button>
  );
};

export default OperatorButton;