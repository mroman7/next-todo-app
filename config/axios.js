import axios from "axios";
import { CONSTANTS } from "./constants";

export const AxiosInstance = axios.create({
    baseURL: CONSTANTS.BASE_URL,
});