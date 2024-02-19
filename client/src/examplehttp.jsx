// in folder npm start
import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] =  useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() =>{
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data)
    })
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      alert("user created");
    });
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input type="text" placeholder='Name' onChange={(event) => {setName(event.target.value)}}></input>
        <input type="text" placeholder='age' onChange={(event) => {setAge(event.target.value)}}></input>
        <input type="text" placeholder='username' onChange={(event) => {setUsername(event.target.value)}}></input>
        <button onClick={createUser}>Create user</button>
      </div>
    </div>
  );
}

export default App;
