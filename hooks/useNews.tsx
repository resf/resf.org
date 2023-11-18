import useSWR from "swr";
import { RESFAPIFetcher } from "@/utils/fetcher";

import type { News } from "@/types/news/News";

export const useNews = () => {
  const { data, error, isLoading } = useSWR<News>("/api/news", RESFAPIFetcher);

  return {
    news: data,
    newsError: error,
    newsIsLoading: isLoading,
  };
};
