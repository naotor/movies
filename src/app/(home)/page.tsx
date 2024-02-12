import { MediaItemList } from "@/features/trends/components/MediaItemList";
import { getPageState } from "@/features/trends/state";

export default function Home() {
  const state = getPageState();

  return (
    <>
      <div
        className="relative mb-8 min-h-96 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${state.backgroundImageUrl})`,
        }}
      >
        <div
          className="absolute inset-0 size-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center p-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              Trending Movies and TV Shows
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <MediaItemList />
      </div>
    </>
  );
}
