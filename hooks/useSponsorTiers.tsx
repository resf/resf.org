import useSWR from "swr";
import { useMemo } from "react";
import { RESFAPIFetcher } from "@/utils/fetcher";

import type { Tiers } from "@/types/sponsors/Tier";
import type { SponsorWithTierPerks } from "@/types/sponsors/Sponsor";

export const useSponsorTiers = (staleData?: Tiers) => {
  const { data, error, isLoading } = useSWR<Tiers>(
    "/api/sponsors/tiers",
    RESFAPIFetcher,
    {
      fallbackData: staleData,
    }
  );

  const allSponsors = useMemo(() => {
    return data
      ? data.flatMap<SponsorWithTierPerks>((t) =>
          t.sponsors!.map((sponsor) => ({
            ...sponsor,
            hasDescription: t.hasDescription,
            hasLogo: t.hasLogo,
          }))
        )
      : [];
  }, [data]);

  return {
    sponsorTiers: data,
    allSponsors,
    sponsorTiersError: error,
    sponsorTiersIsLoading: isLoading,
  };
};
