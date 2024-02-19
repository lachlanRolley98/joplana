import Axios from "axios";

export const handleCreateUser = (firstName, lastName, email, userName, password, password_confirmation) => {
  const doCreateUser = async () => {
    try {
      const body = {
        firstName,
        lastName,
        email,
        userName,
        password,
        password_confirmation
      }
      Axios.post(`http://localhost:8000/api/signup`, body)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  doCreateUser();
}

export const handleLogInUser = (email, password, setDeets) => {
  const doLogInUser = async () => {
    try {
      const body = {
        email,
        password,
      }
      Axios.post(`http://localhost:8000/api/signin`, body)
      .then((response) => {
        console.log(response);
        alert("logged in");
        setDeets(response.data);
        localStorage.setItem('token', response.data.token)
      })
      .catch(function (error) {
        console.log(error);
        alert("bad");
      });
    } catch (error) {
      console.log(error);
    }
  }
  doLogInUser();
}

