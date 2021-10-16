const axios = require("axios");

const signIn = async (fields) => {
  const { username, password } = fields;
  console.log(username);
  return axios
    .post(`http://localhost:4002/auth/signin`, {
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
  return axios
    .post(`http://localhost:4002/auth/signup`, {
      username,
      password,
      email,
    })
    .catch((error) => {
      console.log(error);
    });
};

export { signIn, signUp };
