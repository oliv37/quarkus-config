import { IProperty } from "quarkus-config-types";

interface Props {
  property: IProperty;
}

export default function PropertyDescription({ property }: Props) {
  return (
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: property.description }}
    />
  );
}
