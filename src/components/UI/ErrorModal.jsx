import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

const Backdrop = ({ errorHandler }) => {
   return <div className="backdrop" onClick={errorHandler} />;
};

const ModalOverlay = ({ title, message, errorHandler }) => {
   return (
      <Card className="modal">
         <header className="header">
            <h2>{title}</h2>
         </header>
         <section className="content">{message}</section>
         <footer className="actions">
            <Button onClick={errorHandler}>Okay</Button>
         </footer>
      </Card>
   );
};

const ErrorModal = ({ errorHandler, title, message }) => {
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop errorHandler={errorHandler} />,
            document.getElementById("backdrop-root")
         )}
         {ReactDOM.createPortal(
            <ModalOverlay
               title={title}
               message={message}
               errorHandler={errorHandler}
            />,
            document.getElementById("overlay-root")
         )}
      </>
   );
};

export default ErrorModal;
