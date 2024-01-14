import clsx from "@/utils/clsx";
import getVersions from "@/utils/getVersions";
import ThemeButton from "@/components/shared/buttons/ThemeButton";
import SearchField from "@/components/shared/fields/SearchField";
import HomeLink from "@/components/shared/links/HomeLink";
import VersionsField from "@/components/shared/fields/VersionsField";

export default function Header() {
  const versions = getVersions();
  return (
    <header
      className={clsx(
        "sticky top-0 flex justify-between items-center",
        "px-10 py-2 w-full bg-background",
        "border-solid border-b-2 border-foreground",
        "z-50"
      )}
    >
      <div className="flex space-x-2">
        <HomeLink />
        <VersionsField versions={versions} />
      </div>
      <div className="flex items-center space-x-2">
        <SearchField />
        <ThemeButton />
      </div>
    </header>
  );
}
