import axios from "axios";
import { FormData as FormDataRegistration } from "../modules/auth/component/CoachRegistration";
import { FormData as FormDataLogin } from "../modules/auth/component/CoachLogin";
import { FormData as FormDataRoom } from "../component/menu/component/Online";

const axiosInstance = axios.create({
  baseURL: "CreateAxiosDefaults",
  timeout: 1000,
});

export const registration = async (data: FormDataRegistration) => {
  return (await axiosInstance.post("/registration", data)).data;
};

export const login = async (data: FormDataLogin) => {
  return (await axiosInstance.post("/login", data)).data;
};

export const logout = async () => {
  return (await axiosInstance.post("/logout")).data;
};

export const createFood = async (data: FormDataLogin) => {
  return (await axiosInstance.post("/food", data)).data;
};

export const createTraining = async () => {
  return (await axiosInstance.post("/training")).data;
};

export const createRoom = async (data: FormDataRoom) => {
  return (await axiosInstance.post("/room", data)).data;
};
