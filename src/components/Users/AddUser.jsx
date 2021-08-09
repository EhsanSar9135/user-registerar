import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
   // States
   const [error, setError] = useState();
   // Refs
   const nameInputRef = useRef();
   const ageInputRef = useRef();
   // Event Handlers
   const addUserHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredUserAge = ageInputRef.current.value;
      if (
         enteredName.trim().length === 0 ||
         enteredUserAge.trim().length === 0
      ) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values)",
         });
         return;
      }
      if (+enteredUserAge < 1) {
         setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0)",
         });
         return;
      }
      onAddUser(enteredName, enteredUserAge);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
   };
   const errorHandler = () => {
      setError(null);
   };
   return (
      <>
         {error && (
            <ErrorModal
               errorHandler={errorHandler}
               title={error.title}
               message={error.message}
            />
         )}
         <Card className="input">
            <form onSubmit={addUserHandler}>
               <label htmlFor="username">username</label>
               <input type="text" id="username" ref={nameInputRef} />
               <label htmlFor="age">Age (Years)</label>
               <input type="number" id="age" ref={ageInputRef} />
               <Button type="submit">Add User</Button>
            </form>
         </Card>
      </>
   );
};

export default AddUser;
