import { baseInstance } from "../base";

export const getNews = async () =>
  (await baseInstance.get("/latest-news")).data;
