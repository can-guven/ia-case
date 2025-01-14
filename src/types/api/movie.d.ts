export interface MovieFilters {
  name: string;
  year?: number;
  type?: "movie" | "series" | "episode" | undefined;
  page: number;
}
