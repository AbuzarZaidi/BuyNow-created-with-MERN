import * as api from "../api/message"
export const  contactUsHandler= async (message) => {
   
    try {
      const {data}  = await api.contactUsHandler(message);
      return data;
    } catch (error) {
      return error.response.data;
    }
  };