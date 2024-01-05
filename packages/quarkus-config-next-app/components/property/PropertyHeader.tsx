import { IProperty } from "quarkus-config-types";

interface Props {
  property: IProperty;
}

export default function PropertyHeader({ property }: Props) {
  return property.names.map((name: string) => (
    <div key={name} className="font-bold pb-1">
      <a href={`#${property.id}`}>{name}</a>
    </div>
  ));
}
