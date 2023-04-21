import useSWR from "swr";
import { RESFAPIFetcher } from "@/utils/fetcher";

import type { SponsorWithTierPerks } from "@/types/sponsors/Sponsor";

export const useSponsor = (slug: string, staleData?: SponsorWithTierPerks) => {
  const { data, error, isLoading } = useSWR<SponsorWithTierPerks>(
    `/api/sponsors/${slug}`,
    RESFAPIFetcher,
    { fallbackData: staleData }
  );

  return {
    sponsor: data,
    sponsorError: error,
    sponsorIsLoading: isLoading,
  };
};
