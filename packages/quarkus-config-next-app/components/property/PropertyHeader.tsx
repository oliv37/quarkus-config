import { IProperty } from "quarkus-config-types";

interface Props {
  property: IProperty;
}

export default function PropertyHeader({ property }: Props) {
  return (
    <a href={`#${property.id}`}>
      {property.names.map((name: string) => (
        <p key={name} className="font-bold pb-1">
          {name}
        </p>
      ))}
    </a>
  );
}
