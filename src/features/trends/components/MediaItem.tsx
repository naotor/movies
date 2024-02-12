import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { Movie } from "../type/movie";

interface MediaItemProps {
  movie: Movie;
}

export function MediaItem({ movie }: MediaItemProps) {
  return (
    <>
      <Link
        href={
          movie.media_type && movie.media_type === "tv"
            ? `/tv/${movie.id}`
            : `/movie/${movie.id}`
        }
      >
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : `https://placehold.co/342x513?text=${movie.title || movie.name}`
              }
              alt={movie.title || movie.name || ""}
              className="aspect-[2/3] size-auto object-cover transition-all hover:scale-105"
              height={513}
              width={342}
            />
          </div>
          {movie.media_type && (
            <div className="flex-none">
              <Badge
                className={
                  movie.media_type === "tv"
                    ? "bg-lime-400 uppercase"
                    : "capitalize"
                }
              >
                {movie.media_type}
              </Badge>
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              {movie.title || movie.name}
            </h3>
            <h4 className="text-sm font-bold text-muted-foreground">
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4)}
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
}
