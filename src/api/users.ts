import axios from "axios";

export const getAlluserData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);

    if (response.status !== 200 && response.status !== 201) {
      throw new Error("Failed to fetch users");
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
