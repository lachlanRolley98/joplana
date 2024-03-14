import Axios from "axios";
const PORT = 8000;

export const handleSubmitJournal = async (token, date, journal, updateMonth) => {
  try {
    const body = {
      date,
      journal,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    console.log(`about to post with  ${headers.Authorization} ${body}`)
    Axios.post(`http://localhost:${PORT}/api/submitJournal`, body, {headers})
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