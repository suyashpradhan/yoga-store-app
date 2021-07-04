import axios from "axios";
import { login, register } from "../API/URL";

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  let response = {};
  try {
    response = await axios.post(`${register}`, {
      firstName,
      lastName,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }

  return response;
};

export const loginUser = async ({ email, password }) => {
  let response = {};
  try {
    response = await axios.post(`${login}`, {
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }

  return response;
};
