import axios from "axios";

export const getAlluserData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}