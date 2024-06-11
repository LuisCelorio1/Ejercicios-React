import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserCreate } from "./components/UserCreate";
import {NavBar} from "./components/NavBar"
import { UserList } from "./components/UserList";
import usersArray from "./js/UsersArrayV1";
import { useState } from "react";
import { UserUpdate } from "./components/UserUpdate";


export const App = () => {

  const [users, setUsers] = useState(usersArray);

  const addUser = (user) => {
    setUsers([user, ...users]);
  }


  return (
    <>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<UserList users={users}/>}></Route>
          <Route path="create" element={<UserCreate users={users} onAddUser={addUser}/>}></Route>  
          <Route path="/update/:id" element={<UserUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};