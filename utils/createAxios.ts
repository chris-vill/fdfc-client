import axios from "axios";

// const URL_SERVER = process.env.URL_SERVER as string;
const URL_SERVER = "http://localhost:8000";

function createAxios() {
  const instance = axios.create({
    baseURL: URL_SERVER,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
}

export { createAxios };

