declare module "*.jpg" {
  const value: string;
}

declare module "*.png" {
  const value: string;
  export default src;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.scss";
