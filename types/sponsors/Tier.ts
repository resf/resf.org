import type { Sponsors } from "./Sponsor";

export interface Tier {
  name: string;
  slug: string;
  order: number;
  hasLogo: boolean;
  hasDescription: boolean;
  sponsors?: Sponsors;
}

export type Tiers = Tier[];
