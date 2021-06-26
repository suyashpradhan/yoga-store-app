import axios from "axios";
import { login, register } from "../API/URL";

export const registerUser = async ({ fullName, email, password }) => {
  let response = {};
  try {
    response = await axios.post(`${register}`, {
      fullName,
      email,
      password,
    });
  } catch (error) {
    response.data = {
      error: error.response.data,
    };
  }

  return response;
};

export const loginUser = async ({ fullName, email, password }) => {
  let response = {};
  try {
    response = await axios.post(`${login}`, {
      email,
      password,
    });
  } catch (error) {
    response.data = {
      error: error.response.data,
    };
  }

  return response;
};
