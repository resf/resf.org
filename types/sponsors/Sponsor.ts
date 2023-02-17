export interface Sponsor {
  name: string;
  founding?: boolean;
  description?: string;
  href: string;
  logoUrl?: string;
}

export type Sponsors = Sponsor[];
