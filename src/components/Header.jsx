import { FULL_NAME, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { Typography } from "./atom/Typography";

export const Header = () => {
  return (
    <header className="flex py-8">
      <Typography variant={"gradient"} className={"text-2xl"}>
        {FULL_NAME}
      </Typography>
      <SocialNetworks className="ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};
