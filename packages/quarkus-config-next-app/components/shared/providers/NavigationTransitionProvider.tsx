"use client";

import NavigationTransitionContext from "@/contexts/navigationTransitionContext";
import { TransitionStartFunction, useMemo, useTransition } from "react";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavigating, startNavigationTransition] = useTransition();

  const transitionContextValue = useMemo<[boolean, TransitionStartFunction]>(
    () => [isNavigating, startNavigationTransition],
    [isNavigating, startNavigationTransition]
  );

  return (
    <NavigationTransitionContext.Provider value={transitionContextValue}>
      {children}
    </NavigationTransitionContext.Provider>
  );
}
