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

export const handleUpdateGoals = (token, updatedGoals) => {
  console.log('in handleUpdateGoals');
  const doUpdateGoals = async () => {
    try {
      const body = {
        updatedGoals
      }
      const headers = {
        "Authorization": `Bearer ${token}`,
        'content-type': 'application/json'
      };
      // console.log(`about to post with  ${headers.Authorization} ${body}`)
      Axios.post(`http://localhost:${PORT}/api/updateGoals`, body, {headers})
      .then((response) => {
        console.log(response);
        console.log('goals updated :)');
        localStorage.setItem('curGoals', updatedGoals)
      })
      .catch((error) => {
        console.log(error)
      });
    } catch (error) {
      console.log(error)
    }
  }
  doUpdateGoals();
}


export const handleGetMonth = async (token, date) => {
  console.log('in handleGetMonth');
  try {
    const body = {
      date
    };
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };

    const response = await Axios.get(`http://localhost:${PORT}/api/getMonth`, {
      headers: headers,
      params: body // Pass the date as a query parameter
    });

    console.log(response.data);
    return response.data; // Return the data obtained from the API call

  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};


