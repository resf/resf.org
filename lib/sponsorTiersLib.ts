import { RESFApiAxios } from "@/utils/Axios";

import type { Tiers } from "@/types/sponsors/Tier";

export const getSponsorTiersServer = async (): Promise<Tiers | undefined> => {
  try {
    const tiers = await RESFApiAxios.get<Tiers>("/api/sponsors/tiers");
    return tiers.data;
  } catch (error) {
    console.error("Failed to fetch sponsor tiers:", error);
    return undefined;
  }
};
