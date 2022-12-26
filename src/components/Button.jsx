import React from "react";

const Button = (props) => (
  <button type="button" className={`w-52 h-14 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${props.styles}`}>
    {props.text}
  </button>
);

export default Button;
