"use client";

import NavigationTransitionContext from "@/contexts/navigationTransitionContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useContext } from "react";

export default function HomeLink() {
  const router = useRouter();
  const [_isNavigating, startNavigationTransition] = useContext(
    NavigationTransitionContext
  );

  function handleClickHome(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    startNavigationTransition(() => {
      router.push(e.currentTarget.getAttribute("href") || "/");
    });
  }

  return (
    <Link href="/" onClick={handleClickHome}>
      <h1 className="font-bold text-xl">Quarkus</h1>
    </Link>
  );
}
