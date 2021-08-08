import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
   // States
   const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [error, setError] = useState();
   // Event Handlers
   const addUserHandler = (event) => {
      event.preventDefault();
      if (
         enteredUsername.trim().length === 0 ||
         enteredAge.trim().length === 0
      ) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values)",
         });
         return;
      }
      if (+enteredAge < 1) {
         setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0)",
         });
         return;
      }
      onAddUser(enteredUsername, enteredAge);
      setEnteredAge("");
      setEnteredUsername("");
   };
   const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
   };
   const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
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
               <input
                  type="text"
                  id="username"
                  value={enteredUsername}
                  onChange={usernameChangeHandler}
               />
               <label htmlFor="age">Age (Years)</label>
               <input
                  type="number"
                  id="age"
                  value={enteredAge}
                  onChange={ageChangeHandler}
               />
               <Button type="submit">Add User</Button>
            </form>
         </Card>
      </>
   );
};

export default AddUser;
