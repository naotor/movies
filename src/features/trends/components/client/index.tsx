"use client";

import { usePageState } from "nrstate-client/PageStateClient";
import { useEffect } from "react";

import { PageState, statePath } from "../../state";

interface ClientProps {
  state: {
    backgroundImageUrl: string;
  };
}

export function Client({ state }: ClientProps) {
  const [pageState, setPageState] = usePageState<PageState>();
  const { backgroundImageUrl } = pageState;

  useEffect(() => {
    setPageState({ ...pageState, ...state }, statePath);
  }, [backgroundImageUrl]);

  return <></>;
}
