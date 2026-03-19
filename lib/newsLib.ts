import { RESFApiAxios } from "@/utils/Axios";

import type { News, NewsItem } from "@/types/news/News";

export const getNews = async (): Promise<News | undefined> => {
  try {
    const news = await RESFApiAxios.get<News>("/api/news");
    return news.data;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return undefined;
  }
};

export const getNewsItem = async (
  slug: string
): Promise<NewsItem | undefined> => {
  try {
    const newsItem = await RESFApiAxios.get<NewsItem>(`/api/news/${slug}`);
    return newsItem.data;
  } catch (error) {
    console.error(`Failed to fetch news item "${slug}":`, error);
    return undefined;
  }
};
