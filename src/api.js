import axios from "axios";

export async function getUsers() {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API || "http://localhost:3000"
  });
  return await client.get('/users.json')
}

export async function createUsers() {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API || "http://localhost:3000"
  });
  return await client.post('/users.json')
}
