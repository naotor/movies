import { currentPageState } from "nrstate";
import PageStateProvider from "nrstate-client/PageStateProvider";

import { ScrollArea } from "@/components/ui/scroll-area";

import { PageState, initPageState, statePath } from "@/features/trends/state";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageStateProvider
      current={currentPageState<PageState>(initPageState, statePath)}
    >
      <div className="flex h-screen overflow-hidden">
        <ScrollArea className="h-full">
          <main className="w-full px-8 pt-16">{children}</main>
        </ScrollArea>
      </div>
    </PageStateProvider>
  );
}
