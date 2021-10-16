const axios = require("axios");

const signIn = async (fields) => {
  const { username, password } = fields;
  console.log(username);
  return axios
    .post(`https://dishymcr.herokuapp.com/auth/signin`, {
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
    .post(`https://dishymcr.herokuapp.com/auth/signup`, {
      username,
      password,
      email,
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { signIn, signUp };
