import React from "react";

const Button = ({ type, children, onClick }) => {
   return (
      <button className="button" type={type || "button"} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
