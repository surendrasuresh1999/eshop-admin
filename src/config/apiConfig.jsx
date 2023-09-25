import axios from "axios";

export const API_BASE_URL = "http://localhost:3001";
// const jwtToken = localStorage.getItem("jwtToken");
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTAxOTE4N2YyOTgwNjFjNzU4MzYzYTIiLCJpYXQiOjE2OTU1NTczODksImV4cCI6MTY5NTczMDE4OX0.sGhuBDr6j43kbSRMBYYIhdC48Nz-so0r4KtbXwRmWS0"

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization" : `Bearer ${Token}`,
        "Content-Type" : "application/json",
    }
})