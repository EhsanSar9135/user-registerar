import React from "react";

const Card = ({ children, className }) => {
   return <section className={`card ${className}`}>{children}</section>;
};

export default Card;
