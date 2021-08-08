import React from "react";
import Card from "../UI/Card";

const UsersList = ({ users }) => {
   console.log(users);
   return (
      <Card className="users">
         <ul>
            {users.map(({ name, age, id }) => (
               <li key={id}>
                  {name} ({age} years old)
               </li>
            ))}
         </ul>
      </Card>
   );
};

export default UsersList;
