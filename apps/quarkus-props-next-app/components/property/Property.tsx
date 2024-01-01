import Property from "@/models/property";
import LockIcon from "../shared/icons/LockIcon";
import PropertyTitle from "./PropertyTitle";
import PropertyFooter from "./PropertyFooter";

interface Props {
  property: Property;
}

export default function ({ property }: Props) {
  return (
    <div className="pb-8">
      <PropertyTitle property={property} />
      <div dangerouslySetInnerHTML={{ __html: property.description }} />
      <PropertyFooter property={property} />
    </div>
  );
}
