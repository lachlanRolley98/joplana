import Axios from "axios";
const PORT = 8000;

export const handleSubmitDream = async (token, date, dream, updateMonth) => {
  try {
    const body = {
      date,
      dream,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    console.log(`about to post with  ${headers.Authorization} ${body}`)
    Axios.post(`http://localhost:${PORT}/api/submitDream`, body, {headers})
    .then((response) => {
      console.log(response.data.updatedMonth);
      updateMonth(response.data.updatedMonth);
    })
    .catch((error) => {
      console.log(error)
    });
  } catch (error) {
    console.log(error)
  }
}

export const handleChangeTriggers =  (token, triggers) => {
  console.log('in changeTriggers');
  try {
    const body = {
      updatedTriggers: triggers
    };
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    console.log(`about to post with  ${headers.Authorization} ${body}`);
    Axios.post(`http://localhost:${PORT}/api/changeTriggers`, body, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  } catch (error) {
    console.log(error);
  }
};