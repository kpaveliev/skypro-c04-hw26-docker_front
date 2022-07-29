import axios from 'axios';
import { getCookie } from "../utils/cookies";

export default axios.create({
  baseURL: `http://kpaveliev-skypro.cf:5000`,
  // withCredentials: true,
  headers: {
    Authorization: "Bearer " + getCookie("AccessToken")
  }
});
