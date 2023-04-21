import useSWR from "swr";
import { RESFAPIFetcher } from "@/utils/fetcher";

import type { Sponsor } from "@/types/sponsors/Sponsor";

export const useSponsor = (slug: string) => {
  const { data, error, isLoading } = useSWR<Sponsor>(
    `/api/sponsors/${slug}`,
    RESFAPIFetcher
  );

  return {
    sponsor: data,
    sponsorError: error,
    sponsorIsLoading: isLoading,
  };
};
