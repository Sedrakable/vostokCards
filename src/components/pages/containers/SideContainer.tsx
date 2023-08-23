import React from "react";
import styles from "./SideContainer.module.scss";
import cn from "classnames";
import { Heading } from "../../reuse/Heading";
import { Paragraph } from "../../reuse/Paragraph";
import { Button } from "../../reuse/Button";
import { Link } from "../../reuse/Link";

export interface SideContainerProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctas?: {
    text: string;
    path: string;
    link?: boolean;
  };
  side?: "left" | "right";
}

export const SideContainer: React.FC<SideContainerProps> = ({
  title,
  subtitle,
  description,
  ctas,
  side = "left",
}) => {
  return (
    <div className={cn(styles.wrapper, { [styles.right]: side === "right" })}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Heading
            as="h2"
            level="2"
            color="gold-grad"
            textAlign={side === "right" ? "right" : "left"}
          >
            {title}
          </Heading>
          {subtitle && (
            <Paragraph level="1" color="white" weight="regular">
              {subtitle}
            </Paragraph>
          )}
          {description && (
            <Paragraph level="2" color="white" className={styles.description}>
              {description}
            </Paragraph>
          )}
        </div>
        {ctas &&
          (ctas?.link ? (
            <Link href={ctas?.path} target="_blank">
              <Button variant="primary">{ctas?.text!}</Button>
            </Link>
          ) : (
            <Button variant="primary" path={ctas?.path}>
              {ctas?.text!}
            </Button>
          ))}
      </div>
    </div>
  );
};
