export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  uri: string;
  description: string;
}

export type News = NewsItem[];
