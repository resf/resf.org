import { RESFApiAxios } from "@/utils/Axios";

export const RESFAPIFetcher = (url: string) =>
  RESFApiAxios.get(url).then((res) => res.data);
