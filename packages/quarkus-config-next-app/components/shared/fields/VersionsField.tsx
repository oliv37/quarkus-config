"use client";

import NavigationTransitionContext from "@/contexts/navigationTransitionContext";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useContext, useEffect, useState } from "react";

interface Props {
  versions: any[];
}

function versionParamToVersion(versionParam: string | undefined) {
  return versionParam || "latest";
}

function versionToUrl(version: string) {
  return version === "latest" ? "/" : `/${version}`;
}

export default function VersionsField({ versions }: Props) {
  const router = useRouter();
  const [_isNavigating, startNavigationTransition] = useContext(
    NavigationTransitionContext
  );
  const params = useParams<{ version: string }>();
  const [version, setVersion] = useState<string>(
    versionParamToVersion(params.version)
  );

  useEffect(() => {
    setVersion(versionParamToVersion(params.version));
  }, [params.version]);

  function handleChangeVersion(e: ChangeEvent<HTMLSelectElement>) {
    const newVersion = e.target.value;
    setVersion(newVersion);
    startNavigationTransition(() => {
      router.push(versionToUrl(newVersion), { scroll: false });
    });
  }

  return (
    <select
      className="w-32 sm:w-auto"
      value={version}
      onChange={handleChangeVersion}
    >
      {versions.map((v) => (
        <option key={v.id} value={v.id}>
          {v.name}
        </option>
      ))}
    </select>
  );
}
