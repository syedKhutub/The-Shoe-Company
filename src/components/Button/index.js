import React from "react";

const Button = ({onClick, className, buttonText, disabled, children }) => {
  return <button className={className} disabled={disabled} onClick={onClick}>{children}</button>;
}

export default Button;