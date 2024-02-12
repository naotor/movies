export type Movie = {
  id: number;
  backdrop_path: string;
  title?: string;
  name?: string;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  video?: boolean;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  original_contry: string[];
};
