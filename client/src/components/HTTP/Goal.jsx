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
    const response = await Axios.post(`http://localhost:${PORT}/api/addGoal`, body, {headers})
    return response.data.updatedUser; // Return the updated user data
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be caught in the calling function
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
    const response = await Axios.post(`http://localhost:${PORT}/api/deleteGoal`, body, {headers})
    return response.data.updatedUser; // Return the updated user data
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
}

export const handleAddHabitToGoal = async (token, goal, habit) => {
  console.log(`poopooPEEPEE ${goal}`);
  try {
    const body = {
      goal,
      habit,
    }
    const headers = {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    const response = await Axios.post(`http://localhost:${PORT}/api/addHabitToGoal`, body, { headers });
    return response.data.updatedUser; // Return the updated user data
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be caught in the calling function
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
    const response = await Axios.post(`http://localhost:${PORT}/api/deleteHabitFromGoal`, body, {headers})
    return response.data.updatedUser; // Return the updated user data
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
}

