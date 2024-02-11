export const statePath = "/examples/page-state-demo";

export type PageState = {
  a: string;
  b: string;
};

export const initPageState = {
  a: "",
  b: "asc",
} as PageState;
