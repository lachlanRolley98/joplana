import Axios from "axios";
const PORT = 8000;

export const handleCreateUser = async (email, userName, password, password_confirmation) => {
  try {
    const body = {
      email,
      userName,
      password,
      password_confirmation
    };
    const response = await Axios.post(`http://localhost:${PORT}/api/signup`, body);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const handleLogInUser = (email, password, setToken, navigate) => {
  const doLogInUser = async () => {
    try {
      const body = {
        email,
        password,
      }
      Axios.post(`http://localhost:${PORT}/api/signin`, body)
      .then((response) => {
        console.log('hello world');
        console.log(response);
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.userName);
        localStorage.setItem('curGoals', response.data.curGoals);
        localStorage.setItem('dreamTriggers', response.data.dreamTriggers);
        navigate("/Landing")
      })
      .catch(function (error) {
        console.log(error);
        alert("Inccorect details");
      });
    } catch (error) {
      console.log(error);
    }
  }
  doLogInUser();
}

