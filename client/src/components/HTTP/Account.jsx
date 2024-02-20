import Axios from "axios";
const PORT = 8000;

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
      Axios.post(`http://localhost:${PORT}/api/signup`, body)
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

export const handleLogInUser = (email, password, setToken, navigate) => {
  const doLogInUser = async () => {
    try {
      const body = {
        email,
        password,
      }
      Axios.post(`http://localhost:${PORT}/api/signin`, body)
      .then((response) => {
        console.log(response);
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        navigate("/landing")
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

