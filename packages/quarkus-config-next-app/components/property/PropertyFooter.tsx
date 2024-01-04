import { IProperty } from "quarkus-config-types";
import LockIcon from "../shared/icons/LockIcon";

interface Props {
  property: IProperty;
}

export default function PropertyFooter({ property }: Props) {
  return (
    <div className="text-foreground-subtle pt-1">
      {property.fixed && <LockIcon className="w-6 h-6 inline-block mr-2" />}
      <span className="border-solid border-b-2 border-foreground-subtle mr-2">
        {property.type}
      </span>
      {property.defaultValue && <span>{property.defaultValue}</span>}
    </div>
  );
}
