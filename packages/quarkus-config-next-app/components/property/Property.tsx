import { IProperty } from "quarkus-config-types";
import PropertyHeader from "./PropertyHeader";
import PropertyFooter from "./PropertyFooter";
import PropertyDescription from "./PropertyDescription";

interface Props {
  property: IProperty;
}

export default function Property({ property }: Props) {
  return (
    <div id={property.id} className="pb-8">
      <PropertyHeader property={property} />
      <PropertyDescription property={property} />
      <PropertyFooter property={property} />
    </div>
  );
}
