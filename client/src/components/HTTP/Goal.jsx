import Axios from "axios";
const PORT = 8000;

export const handleAddGoal = async (token, goal) => {
  console.log(`HTTP ${goal}`)
  try {
    const body = {
      goal,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
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

export const handleAddHabitToGoal = async (token, goal, habit) => {
  console.log(`poopooPEEPEE ${goal}`)
  try {
    const body = {
      goal,
      habit,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    Axios.post(`http://localhost:${PORT}/api/addHabitToGoal`, body, {headers})
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

export const handledeleteHabitFromGoal = async (token, goal, habit) => {
  console.log(`poopooPEEPEE ${goal}`)
  try {
    const body = {
      goal,
      habit
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    Axios.post(`http://localhost:${PORT}/api/deleteHabitFromGoal`, body, {headers})
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

export const handledeleteGoal = async (token, goal) => {
  console.log(`poopooPEEPEE ${goal}`)
  try {
    const body = {
      goal,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'content-type': 'application/json'
    };
    Axios.post(`http://localhost:${PORT}/api/deleteGoal`, body, {headers})
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