import React, { useEffect, useState } from 'react';
import './App.css';
import { createUsers, getUsers } from './api.js'

const Users = ({users}) => {
  return (
    <>
        <h2>Users</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <b>Name:</b> {user.name} | <b>Email:</b> {user.email} 
        </li>
      ))}
    </ul>
    </>

  )
}

function App() {
  const [users, setUsers] = useState([]);
  const [creatingUsers, setCreatingUsers] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userResp = await getUsers();
        setUsers(userResp.data);
      }
      catch (e) {
        console.log("Error retreiving user data!", e)
      }
    }

    getUserData();
  }, []);

  const  createNewUsers = async () => {
    try {
      await createUsers();
      setCreatingUsers(true);
      
      setTimeout(async () => {
        const userResp = await getUsers();
        setUsers(userResp.data);
        setCreatingUsers(false);
      }, 2000);
    }
    catch (e) {
      console.log("Error retreiving user data!", e)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Create React App running on Docker on Release!</h1>
      </header>
      <div className="App-body">
        <div>
        <button className="App-create-users" onClick={createNewUsers}>Create New Users</button>
        <div style={{display: creatingUsers ? "inline-block" : "none"}} class="loader"></div>
        </div>

        <Users users={users} />
      </div>
    </div>
  );
}

export default App;
