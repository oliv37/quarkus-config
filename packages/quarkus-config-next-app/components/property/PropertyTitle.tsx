import { IProperty } from "quarkus-config-types";

interface Props {
  property: IProperty;
}

export default function PropertyTitle({ property }: Props) {
  return property.names.map((name: string) => (
    <p key={name} className="font-bold">
      {name}
    </p>
  ));
}
