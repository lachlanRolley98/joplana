import { React, useState, useContext } from 'react';
import { handleCreateUser, handleLogInUser } from './HTTP/Account'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { token, setToken } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [emailCreate, setemailcreate] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordCreate, setPasswordCreate] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate()

  return (
    <div>
        <h1>Login</h1>
        <div>
          <input type="text" placeholder='email' onChange={(event) => {setEmail(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='Password' onChange={(event) => {setPassword(event.target.value)}}></input>
        </div>
        <div>
          <button onClick={ () => handleLogInUser( email, password, setToken, navigate)} >Login</button>
        </div>
        <h1>Create Account</h1>
        <div>
          <input type="text" placeholder='firstName' onChange={(event) => {setFirstname(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='lastName' onChange={(event) => {setLastname(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='emailCreate' onChange={(event) => {setemailcreate(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='userName' onChange={(event) => {setUserName(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='passwordCreate' onChange={(event) => {setPasswordCreate(event.target.value)}}></input>
        </div>
        <div>
          <input type="text" placeholder='passwordConfirm' onChange={(event) => {setPasswordConfirm(event.target.value)}}></input>
        </div>
        <div>
          <button onClick={ () => handleCreateUser(firstName, lastName, emailCreate, userName, passwordCreate, passwordConfirm)} >Create Account</button>
        </div>
        <div>
          <button onClick={ () => {console.log(token)} } >token</button>
        </div>

    </div>
  );
};

export default LoginPage;

