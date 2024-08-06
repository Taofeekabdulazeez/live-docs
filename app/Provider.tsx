"use client";

import Loader from "@/components/loader";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
}
