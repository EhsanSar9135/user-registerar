import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = ({ title, message, errorHandler }) => {
   return (
      <>
         <div className="backdrop" onClick={errorHandler} />
         <Card className="modal">
            <header className="header">
               <h2>{title}</h2>
            </header>
            <section className="content">{message}</section>
            <footer className="actions">
               <Button onClick={errorHandler}>Okay</Button>
            </footer>
         </Card>
      </>
   );
};

export default ErrorModal;
