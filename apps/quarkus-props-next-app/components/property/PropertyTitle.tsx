import Property from "@/models/property";

interface Props {
  property: Property;
}

export default function PropertyTitle({ property }: Props) {
  return property.names.map((name: string) => (
    <p key={name} className="font-bold">
      {name}
    </p>
  ));
}
