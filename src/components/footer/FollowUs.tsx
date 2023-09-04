import React from "react";
import { Link } from "../reuse/Link";
import styles from "./FollowUs.module.scss";
import { IconType } from "../reuse/Icon";
import { Heading } from "../reuse/Heading";
import { IconButton } from "../reuse/IconButton";

interface IconLinkProps {
  icon: IconType;
  href: string;
}
const iconsLinks: IconLinkProps[] = [
  { icon: "instagram", href: "https://www.instagram.com/vostokcards/?hl=en" },
  {
    icon: "kickstarter",
    href: "https://www.kickstarter.com/projects/vostokcards",
  },
  //   { icon: "facebook", href: "#" },
  { icon: "tiktok", href: "https://www.tiktok.com/@vostokcards" },
];

export const FollowUs: React.FC = () => {
  return (
    <div className={styles.contact}>
      <Heading as="h3" level="3" color="white">
        Follow US!
      </Heading>
      <div className={styles.icons}>
        {iconsLinks.map((iconsLink: IconLinkProps) => {
          return (
            <Link key={iconsLink.href} href={iconsLink.href} target="_blank">
              <IconButton
                iconProps={{
                  icon: iconsLink.icon,
                  size: "regular",
                  color: "gold",
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
