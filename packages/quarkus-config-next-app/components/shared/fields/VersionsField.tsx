"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const params = useParams<{ version: string }>();
  const [version, setVersion] = useState<string>(
    versionParamToVersion(params.version)
  );

  useEffect(() => {
    setVersion(versionParamToVersion(params.version));
  }, [params.version]);

  useEffect(() => {
    router.push(versionToUrl(version), { scroll: false });
  }, [version]);

  return (
    <select
      className="w-32 sm:w-auto"
      value={version}
      onChange={(e) => setVersion(e.target.value)}
    >
      {versions.map((v) => (
        <option key={v.id} value={v.id}>
          {v.name}
        </option>
      ))}
    </select>
  );
}
