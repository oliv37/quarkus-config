import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Metadata } from "next";
import Main from "../Main";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const DATA_FOLDER = path.resolve(DIR_NAME, "../../../../data");

type Props = {
  params: { version: string };
};

export function generateStaticParams() {
  const versions: any[] = JSON.parse(
    fs.readFileSync(path.resolve(DATA_FOLDER, "versions.json"), "utf8")
  );

  return versions
    .filter((version) => version.id != "latest")
    .map((version) => ({
      version: version.id,
    }));
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Quarkus configuration properties - ${params.version}`,
    description: "Quarkus: Supersonic Subatomic Java",
  };
}

export default function Page({ params }: Props) {
  return <Main version={params.version} />;
}
