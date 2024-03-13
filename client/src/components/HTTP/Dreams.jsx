import Axios from "axios";
const PORT = 8000;

export const handleSubmitDream = (token, date, dream) => {
  console.log('in handleSubmitDay');
  const doSubmitDream = async () => {
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
      });
    } catch (error) {
      console.log(error)
    }
  }
  doSubmitDream();
}