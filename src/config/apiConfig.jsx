import axios from "axios";

export const API_BASE_URL = "http://localhost:3001";
// const jwtToken = localStorage.getItem("jwtToken");
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTAxOTE4N2YyOTgwNjFjNzU4MzYzYTIiLCJpYXQiOjE2OTU3Mzk4MTAsImV4cCI6MTY5NTkxMjYxMH0.tJ7K0QoVSKkJxVLGFlp80dLey9qdpPxQPKc8uGyoNUU"

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization" : `Bearer ${Token}`,
        "Content-Type" : "application/json",
    }
})