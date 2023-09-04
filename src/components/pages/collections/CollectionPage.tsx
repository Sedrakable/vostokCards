import React from "react";
import { Splider, SpliderProps } from "../containers/Splider";
import {
  DescriptionPannel,
  DescriptionPannelProps,
} from "../containers/DescriptionPannel";
import {
  DisplayContainer,
  DisplayContainerProps,
} from "../containers/DisplayContainer";
import { ItemGrid } from "../Item/ItemGrid";
import { ImageProps } from "../../reuse/Image";
import { ProductType } from "../content/data.types";

export interface CollectionType {
  name: string;
  description: string;
  thumbnailImage: ImageProps;
  columns?: 1 | 2;
  path: string;
  items: ProductType[];
  descriptionPannel: DescriptionPannelProps;
  infoContainers: {
    spliderData?: SpliderProps[];
    displayContainer?: DisplayContainerProps;
  }[];
}

export const CollectionPage: React.FC<{ collection: CollectionType }> = ({
  collection,
}) => {
  return (
    <div>
      <DescriptionPannel {...collection.descriptionPannel} />

      <ItemGrid
        items={collection.items}
        commingSoon={false}
        title={"Products"}
        openModalOnClick
      />

      {collection.infoContainers.map((info) => {
        return (
          <>
            {info.displayContainer && (
              <DisplayContainer {...info.displayContainer} />
            )}
            {info.spliderData && <Splider slides={info.spliderData} />}
          </>
        );
      })}

      {/* <Splider /> */}
    </div>
  );
};
