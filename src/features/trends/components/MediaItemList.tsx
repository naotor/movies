import { MediaItem } from "@/features/trends/components/MediaItem";
import { fetchData } from "@/features/trends/lib/fetchData";
import { Movie } from "@/features/trends/type/movie";

import { Client } from "./client";

export async function MediaItemList() {
  const data = await fetchData();

  return (
    <>
      {data.results.length > 0 && (
        <Client
          state={{
            backgroundImageUrl: `https://image.tmdb.org/t/p/original${data.results[0] && data.results[0].backdrop_path}`,
          }}
        />
      )}
      {data.results.map((movie: Movie) => (
        <MediaItem movie={movie} key={movie.id} />
      ))}
    </>
  );
}
