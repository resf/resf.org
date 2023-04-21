import { Tier } from "./Tier";

export interface Sponsor {
  name: string;
  founding?: boolean;
  description?: string;
  href: string;
  logoUrl?: string;
}

export type Sponsors = Sponsor[];

export type SponsorWithTierPerks = Sponsor &
  Pick<Tier, "hasDescription" | "hasLogo">;

export type SponsorsWithTierPerks = SponsorWithTierPerks[];
