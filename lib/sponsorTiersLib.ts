import { RESFApiAxios } from "@/utils/Axios";

import type { Tiers } from "@/types/sponsors/Tier";

export const getSponsorTiersServer = async () => {
  try {
    const tiers = await RESFApiAxios.get<Tiers>("/api/sponsors/tiers");
    return tiers.data;
  } catch {}
};
