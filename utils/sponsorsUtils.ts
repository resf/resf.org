import type { Tier } from "@/types/sponsors/Tier";

export const sortTiers = (direction: "ASC" | "DESC") => (a: Tier, b: Tier) =>
  direction === "ASC" ? a.order - b.order : b.order - a.order;
