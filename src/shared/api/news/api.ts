import { baseInstance } from "../base";

export const getLatestNews = async () =>
  (await baseInstance.get("/latest-news")).data;

export const getNews = async (
  page_number: number,
  page_size: number,
  category: string | null,
  keywords: string
) =>
  (
    await baseInstance.get("/search", {
      params: { page_number, page_size, category, keywords },
    })
  ).data;


