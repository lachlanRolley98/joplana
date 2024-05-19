import Axios from "axios";
const PORT = 8000;

export const handleAddGoal = async (token, goal) => {
  console.log(`poopooPEEPEE ${goal}`)
  try {
    const body = {
      goal,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    console.log(`about to post with  ${headers.Authorization} ${body}`)
    Axios.post(`http://localhost:${PORT}/api/addGoal`, body, {headers})
    .then((response) => {
      console.log(response.data.updatedUser);
    })
    .catch((error) => {
      console.log(error)
    });
  } catch (error) {
    console.log(error)
  }
}