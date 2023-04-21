import useSWR from "swr";
import { RESFAPIFetcher } from "@/utils/fetcher";

import type { Sponsors } from "@/types/sponsors/Sponsor";

export const useSponsors = (tierSlug: string) => {
  const { data, error, isLoading } = useSWR<Sponsors>(
    `/api/sponsors/tiers/${tierSlug}/sponsors`,
    RESFAPIFetcher
  );

  return {
    sponsors: data,
    sponsorsError: error,
    sponsorsIsLoading: isLoading,
  };
};
