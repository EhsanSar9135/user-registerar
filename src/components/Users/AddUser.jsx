import React from "react";
import Card from "../UI/Card";

const AddUser = () => {
   const addUserHandler = (event) => {
      event.preventDefault();
   };
   return (
      <Card className="input">
         <form onSubmit={addUserHandler}>
            <label htmlFor="username">username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" />
            <button type="submit">Add User</button>
         </form>
      </Card>
   );
};

export default AddUser;
