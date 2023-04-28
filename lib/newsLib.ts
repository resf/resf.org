import { RESFApiAxios } from "@/utils/Axios";

import type { News, NewsItem } from "@/types/news/News";

export const getNews = async () => {
  try {
    const news = await RESFApiAxios.get<News>("/api/news");
    return news.data;
  } catch {}
};

export const getNewsItem = async (slug: string) => {
  try {
    const newsItem = await RESFApiAxios.get<NewsItem>(`/api/news/${slug}`);
    return newsItem.data;
  } catch {}
};
