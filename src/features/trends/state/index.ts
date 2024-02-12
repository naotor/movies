import { getPageState as pageState } from "nrstate";

export const statePath = "/";

export type PageState = {
  backgroundImageUrl: string;
};

export const initPageState = {
  backgroundImageUrl:
    "https://image.tmdb.org/t/p/original/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg",
} as PageState;

export function getPageState() {
  const state: PageState = pageState<PageState>(initPageState, statePath);
  return state;
}
