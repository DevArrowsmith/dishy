import axios from "axios";

const api = process.env.API_URL;

const signIn = async (fields) => {
  const { username, password } = fields;
  return axios
    .post(`${api}auth/signin`, {
      username,
      password,
    })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    });
};

const signUp = async (fields) => {
  const { username, password, email } = fields;
  return axios.post(`${api}auth/signup`, {
    username,
    password,
    email,
  });
};

export { signIn, signUp };
