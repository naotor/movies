import { Movie } from "../type/movie";

type Response = {
  page?: number;
  results: Movie[];
  total_pages?: number;
  total_results?: number;
};

function request<TResponse>(
  url: string,
  options: RequestInit = {},
): Promise<TResponse> {
  const response = fetch(url, options)
    .then((reponse) => reponse.json())
    .then((data) => data as TResponse);

  return response;
}

export async function fetchData() {
  const data = await request<Response>(
    "https://api.themoviedb.org/3/trending/all/day?language=ja",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_APIKEY}`,
      },
    },
  );

  return data;
}
