export type CollectionNames =
  | "Steampunk Dynasty"
  | "Animal Gangdom"
  | "Coming Soon";

export type ProductNames =
  | "S.D Azure"
  | "S.D Amber"
  | "S.D Jade"
  | "S.D Crimson"
  | "Animal Gangdom";

export interface ImageProps {
  src: string;
  alt: string;
}

export interface ProductType {
  name: string;
  description: string;
  image: ImageProps;
  path: string;
  price: number;
}
