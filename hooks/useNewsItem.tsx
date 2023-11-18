import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { RESFAPIFetcher } from "@/utils/fetcher";
import { serialize } from "next-mdx-remote/serialize";

import type { NewsItem } from "@/types/news/News";

export const useNewsItem = (slug: string, staleData?: NewsItem) => {
  const [mdxContent, setMdxContent] = useState<{
    compiledSource: string;
    scope: Record<string, unknown>;
    frontmatter: Record<string, unknown>;
  } | null>(null);
  const [newsItemData, setNewsItemData] = useState<string | undefined>(
    undefined
  );
  const { data, error, isLoading } = useSWR<NewsItem>(
    `/api/news/${slug}`,
    RESFAPIFetcher,
    { fallbackData: staleData }
  );

  useEffect(() => {
    async function fetchMdxContent() {
      try {
        if (data) {
          const response = await axios.get(data.uri);
          setNewsItemData(response.data);
        }
      } catch (error) {
        console.error("Error fetching MDX content:", error);
      }
    }

    fetchMdxContent();
  }, [data]);

  useEffect(() => {
    async function serializeContent() {
      const mdxSource = newsItemData ?? "";
      const { compiledSource, scope, frontmatter } = await serialize(
        mdxSource,
        {
          mdxOptions: {
            development: process.env.NODE_ENV === "development",
          },
        }
      );
      setMdxContent({ compiledSource, scope, frontmatter });
    }

    serializeContent();
  }, [newsItemData]);

  return {
    newsItem: data,
    newsItemError: error,
    newsItemIsLoading: isLoading,
    newsItemContent: mdxContent,
  };
};
