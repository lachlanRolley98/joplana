import React, { useState, useContext } from 'react';
import { handleCreateUser, handleLogInUser } from './HTTP/Account'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import '../style/PageSpecific/Login.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
};

const LoginPage = () => {
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCreate, setemailcreate] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordCreate, setPasswordCreate] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createUser = async () => {
    try {
      const response = await handleCreateUser(emailCreate, userName, passwordCreate, passwordConfirm);
      if (response.status === 200) {
        alert('Account Created');
        handleClose();
      } else {
        alert('Email in use already');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='main-flex'>
        <h1 className='welcome-title'>Joplana</h1>
        <h1 className='login-title'>Login</h1>

        <TextField label="email" type='email' id="outlined-size-normal" onChange={(event) => {setEmail(event.target.value)}} />

        <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => {setPassword(event.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className='margin-tb'>
          <Button variant="contained" onClick={ () => handleLogInUser( email, password, setToken, navigate)}>Log In</Button>
        </div>
        <div className='margin-tb'>
          <Button variant="contained" onClick={handleOpen}>Create Account</Button>
        </div>


        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Account
            </Typography>
            <div className='create-flex'>
              <div className='margin-tb'>
                <TextField label="email" type='email' id="outlined-size-normal2" onChange={(event) => {setemailcreate(event.target.value)}} />
              </div>
              <div className='margin-tb'>
                <TextField label="user name" type='text' id="outlined-size-normal3" onChange={(event) => {setUserName(event.target.value)}} />
              </div>
              <div className='margin-tb'>
                <FormControl sx={{ m: 0, width: '28ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password2"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event) => {setPasswordCreate(event.target.value)}}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              <div className='margin-tb'>
                <FormControl sx={{ m: 0, width: '28ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password3">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password5"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event) => {setPasswordConfirm(event.target.value)}}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              <div className='margin-tb'>
                <Button variant="contained" onClick={ () => {createUser()} }>Create Account</Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

    </div>
  );
};

export default LoginPage;

