import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
  headers: {
    Authorization: "Bearer 9d1054e9-5599-4efe-a464-7aff8e8aff52",
  },
});
