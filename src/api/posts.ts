import axios from "axios";

export const getAllpostsData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);

    if (response.status !== 200 && response.status !== 201) {
      throw new Error("Failed to fetch posts");
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
