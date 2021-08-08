import React from "react";
import Button from "../UI/Button";
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
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default AddUser;
