import { HttpClient } from "./client";

export const END_POINTS = {
  MOVIES: "/",
};

class Client {
  movies = {
    search: ({ ...params }: Partial<any>) =>
      HttpClient.get<any>(END_POINTS.MOVIES, {
        ...params,
      }),
    getById: (IMDbId: string) =>
      HttpClient.get<any>(END_POINTS.MOVIES, {
        i: IMDbId,
      }),
  };
}

const client = new Client();

export default client;
