import axios from "axios";

const Base = process.env.APIBASE;

export const createUser = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error occurred while creating the user. Please try again.");
    }
  };

  export const updateUser = async (userId, formData) => {
    try {
      const response = await axios.put(`${BASE_URL}/user/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error occurred while updating the user. Please try again.");
    }
  };

  export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };

  export const getOneUser = async (userId) => {
    try {
      if (!userId) throw new Error("movieId is required!");
  
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const deleteOneMovie = async (userId) => {
    try {
      if (!userId) throw new Error("movieId is required!");
  
      const response = await axios.delete(
        `${BASE_URL}/movies/${userId}`
      );
      // console.log(response);
  
      if (response.status === 200) return true;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };