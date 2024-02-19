import { React, useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <h1>Login</h1>
        <div>
          <input type="text" placeholder='Username' onChange={(event) => {setUsername(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='Password' onChange={(event) => {setPassword(event.target.value)}}></input>
        </div>
        <div>
          <button onClick={ () => { alert(`we logged in user ${username} and pword ${password}`) }} >Login</button>
        </div>
        <div>
          <button onClick={ () => { alert(`we created user ${username} with pword ${password}`) }} >Create Account</button>
        </div>

    </div>
  );
};

export default LoginPage;

