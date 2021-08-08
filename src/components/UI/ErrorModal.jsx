import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = ({ title, message }) => {
   return (
      <>
         <div className="backdrop" />
         <Card className="modal">
            <header className="header">
               <h2>{title}</h2>
            </header>
            <section className="content">{message}</section>
            <footer className="actions">
               <Button>Okay</Button>
            </footer>
         </Card>
      </>
   );
};

export default ErrorModal;
