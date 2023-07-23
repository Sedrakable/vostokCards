import React, { ReactNode } from "react";
import styles from "./Icon.module.scss";
import cn from "classnames";
import { ColorType } from "./Heading";

import { ReactComponent as LogoSimple } from "../../assets/illu/LogoSimple.svg";
import { ReactComponent as Burger } from "../../assets/illu/Burger.svg";
import { ReactComponent as Close } from "../../assets/illu/Close.svg";
import { ReactComponent as Diamond } from "../../assets/illu/Diamond.svg";
import { ReactComponent as Arrow } from "../../assets/illu/LittleArrow.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagramSquare,
  faKickstarter,
  faTiktok,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  kickstarter: faKickstarter,
  instagram: faInstagramSquare,
  tiktok: faTiktok,
  facebook: faFacebookSquare,
  burger: <Burger />,
  logo: <LogoSimple />,
  diamond: <Diamond />,
  close: <Close />,
  arrow: <Arrow />,
};

export const IconTypeArray = Object.keys(icons) as Array<keyof typeof icons>;

export type IconType = typeof IconTypeArray[number];

export const Rotations = [90, 180, 270] as const;

export type RotateType = typeof Rotations[number];

export type IconSizes = "extra-small" | "small" | "regular" | "big";

export interface IconProps {
  icon: IconType;
  rotate?: RotateType;
  color?: ColorType;
  size?: IconSizes;
  className?: string;
}

const isIconDefinition = (
  icon: IconDefinition | ReactNode
): icon is IconDefinition => {
  return (icon as IconDefinition).iconName !== undefined;
};

export const Icon: React.FC<IconProps> = ({
  icon,
  rotate,
  color = "gold",
  size = "regular",
  className,
}) => {
  const IconComponent = isIconDefinition(icons[icon]) ? (
    <FontAwesomeIcon icon={icons[icon] as IconDefinition} />
  ) : (
    (icons[icon] as ReactNode)
  );

  return (
    <span
      className={cn(styles.icon, className, {
        [styles[`rotate_${rotate}deg`]]: rotate,
        [styles[`icon_${color}`]]: color,
        [styles[size]]: size,
      })}
    >
      {IconComponent}
    </span>
  );
};
