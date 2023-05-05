import useSWR from "swr";
import { useEffect, useMemo } from "react";
import { RESFAPIFetcher } from "@/utils/fetcher";

import type { Tiers } from "@/types/sponsors/Tier";
import type { SponsorWithTierPerks } from "@/types/sponsors/Sponsor";

export const useSponsorTiers = (staleData?: Tiers | null) => {
  const { data, error, isLoading } = useSWR<Tiers>(
    "/api/sponsors/tiers",
    RESFAPIFetcher,
    {
      fallbackData: staleData !== null ? staleData : undefined,
    }
  );

  const processSponsorPerks = (data: Tiers) =>
    data.flatMap<SponsorWithTierPerks>((t) =>
      t.sponsors!.map((sponsor) => ({
        ...sponsor,
        hasDescription: t.hasDescription,
        hasLogo: t.hasLogo,
      }))
    );

  const allSponsors = useMemo(() => {
    if (data) {
      return processSponsorPerks(data);
    }

    if (staleData) {
      return processSponsorPerks(staleData);
    }
    return [];
  }, [data, staleData]);

  return {
    sponsorTiers: data,
    allSponsors,
    sponsorTiersError: error,
    sponsorTiersIsLoading: isLoading,
  };
};
