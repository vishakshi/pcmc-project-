import axios from "axios";
import PATHS from "./apiEndPoints";

const BASE_URL = "http://localhost:3000";

const getHeaders = () => {
    const authToken = sessionStorage.getItem("@authToken");
    const headers = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    return headers;
  };

class ApiManager {
    static adminLogin = async (data) => {
        try {
          const url = BASE_URL + PATHS.ADMIN_LOGIN;
          const response = await axios.post(url, data);
          return response;
        } catch (error) {
          console.log(error);
          return error?.response;
        }
      };
    static googleLogin = async (data) => {
        try {
          const url = BASE_URL + PATHS.GOOGLE_LOGIN;
          const response = await axios.post(url, data);
          return response;
        } catch (error) {
          console.log(error);
          return error?.response;
        }
    };
    static createUser = async (data) => {
        try {
          const url = BASE_URL + PATHS.CREATE_USER;
          const response = await axios.post(url, data);
          return response;
        } catch (error) {
          console.log(error);
          return error?.response;
        }
    };
    static userLogin = async (data) => {
        try {
          const url = BASE_URL + PATHS.USER_LOGIN;
          const response = await axios.post(url, data);
          return response;
        } catch (error) {
          console.log(error);
          return error?.response;
        }
    };
}

export default ApiManager;