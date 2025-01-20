import axios from "axios";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post("http://localhost:5000/api/message", { message });
    return response; 
  } catch (error) {
    console.log("Error sending message:", error);
  }
};
