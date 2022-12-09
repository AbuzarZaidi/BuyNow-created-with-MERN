import axios from "axios";
const url = "http://localhost:5000/contactUS";
export const contactUsHandler = (message) => axios.post(`${url}`,message);
