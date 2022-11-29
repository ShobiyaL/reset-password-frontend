import axios from "axios";

const api = async (type, body, authorizationToken = null) => {
  try {
    const result = await axios.post(
      `https://reset-password-server.herokuapp.com/user/${type}`,
      body,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );

    return result;
  } catch (e) {
    return e.response;
  }
};
export default api;