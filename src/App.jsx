import React, { useState } from "react";
import "./styles/App.scss";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
   const [usersList, setUsersList] = useState([]);
   const addUserHandler = (userName, userAge) => {
      setUsersList((prevState) => {
         return [...prevState, { name: userName, age: userAge, id: uuidv4() }];
      });
   };
   return (
      <>
         <AddUser onAddUser={addUserHandler} />
         <UsersList users={usersList} />
      </>
   );
};

export default App;
