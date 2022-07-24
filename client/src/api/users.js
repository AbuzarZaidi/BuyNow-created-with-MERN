import axios from "axios";
const url = "http://localhost:5000/users";
export const signUp = (user) => axios.post(`${url}/signup`,user);
export const logIn = (user) => axios.post(`${url}/login`,user);