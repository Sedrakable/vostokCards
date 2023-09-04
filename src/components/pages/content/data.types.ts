import { ImageProps } from "../../reuse/Image";

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

export interface CTAsType {
  amazon?: string;
  etsy?: string;
}
export interface ProductType {
  name: string;
  description: string;
  thumbnailImage: ImageProps;
  columns?: 1 | 2;
  images?: ImageProps[];
  path?: string;
  price?: number;
  ctas?: CTAsType;
}
