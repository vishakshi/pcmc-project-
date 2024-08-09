import axios from "axios";
import PATHS from "./apiEndPoints";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://api.pcmcdivyangbhavan.org";

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
    static getUsers = async () => {
      try {
        const url = BASE_URL + PATHS.GET_USERS;
        const response = await axios.get(url,getHeaders());
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
    static addCompetetion = async (data) => {
      try {
        const url = BASE_URL + PATHS.CREATE_CONTEST;
        const response = await axios.post(url, data,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static getCompetetions = async () => {
      try {
        const url = BASE_URL + PATHS.GET_CONTESTS;
        const response = await axios.get(url,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static addInCompetetion = async (data) => {
      try {
        const url = BASE_URL + PATHS.ADD_IN_CONTEST
        const response = await axios.post(url,data,getHeaders());
        return response
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static getCompetetionDetail = async (id) => {
      try {
        const url = BASE_URL + PATHS.CREATE_CONTEST
        const response = await axios.get(`${url}/${id}`,getHeaders());
        return response
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static getSubmissions = async () => {
      try {
        const url = BASE_URL + PATHS.GET_SUBMISSIONS;
        const response = await axios.get(url,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static getUserDetails = async (id) => {
      try {
        const url = BASE_URL + PATHS.GET_USER_DETAIL;
        const response = await axios.get(`${url}/${id}`,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static updateUserDetails = async (id,data) => {
      try {
        const url = BASE_URL + PATHS.GET_USER_DETAIL;
        const response = await axios.patch(`${url}/${id}`,data,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static getSubmissionByContest = async (id) => {
      try {
        const url = BASE_URL + PATHS.GET_SUBMISSIONS_NY_CONTEST
        const response = await axios.get(`${url}/${id}`,getHeaders());
        return response
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static updateWinner = async (id,data) => {
      try {
        const url = BASE_URL + PATHS.UPDATE_WINNER;
        const response = await axios.patch(`${url}/${id}`,data,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static editSubmission = async (id,data) => {
      try {
        const url = BASE_URL + PATHS.ADD_IN_CONTEST;
        const response = await axios.patch(`${url}/${id}`,data,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
    static getSubmissionsByUser = async (id) => {
      try {
        const url = BASE_URL + PATHS.GET_SUBMISSIONS_BY_USER;
        const response = await axios.get(`${url}/${id}`,getHeaders());
        return response;
      } catch (error) {
        console.log(error);
        return error?.response
      }
    }
}

export default ApiManager;