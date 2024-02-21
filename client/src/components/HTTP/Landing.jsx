import Axios from "axios";
const PORT = 8000;

export const handleSubmitDay = (token, recap, tplan, dream, date, goals) => {
  console.log('in handleSubmitDay');
  const doSubmitDay = async () => {
    try {
      const body = {
        recap,
        tplan,
        dream,
        date,
        goals
      }
      const headers = {
        "Authorization": `Bearer ${token}`,
        'content-type': 'application/json'
      };
      console.log(`about to post with  ${headers.Authorization} ${body}`)
      Axios.post(`http://localhost:${PORT}/api/submit`, body, {headers})
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
  doSubmitDay();
}
