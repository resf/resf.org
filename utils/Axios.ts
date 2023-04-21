import axios from "axios";

export const RESFApiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RESF_API!,
});
