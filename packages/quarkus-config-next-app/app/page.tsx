import { Metadata } from "next";
import Main from "./Main";

export const metadata: Metadata = {
  title: "Quarkus configuration properties",
  description: "Quarkus: Supersonic Subatomic Java",
};

export default function Page() {
  return <Main version="latest" />;
}
