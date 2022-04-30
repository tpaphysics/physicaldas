import { createStandaloneToast } from "@chakra-ui/react";
import axios from "axios";
import { parseCookies } from "nookies";

const toast = createStandaloneToast();

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
  },
});

const { "phisicaldash.token": token } = parseCookies();

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

api.interceptors.request.use(
  config => {
    console.log(config.headers);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    const { data } = response;
    response.data = {
      ...data,
      mid: "Teste",
    };

    // Do something with response data
    return response;
  },
  error => {
    const { message } = error.response.data;

    toast({
      title: `Error`,
      description: message,
      status: "error",
      duration: 10000,
      isClosable: true,
    });
    return Promise.reject(error);
  },
);

export default api;
