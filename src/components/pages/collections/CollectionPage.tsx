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
import { ImageProps, ProductType } from "../content/data.types";

export interface CollectionType {
  name: string;
  description: string;
  thumbnailImage: ImageProps;
  columns?: 1 | 2;
  path: string;
  items: ProductType[];
  descriptionPannel: DescriptionPannelProps;
  spliderData: SpliderProps[];
  displayContainers: DisplayContainerProps[];
}

export const CollectionPage: React.FC<{ collection: CollectionType }> = ({
  collection,
}) => {
  // const items: ItemsType[] = [
  //   {
  //     side: "title",
  //     image: image_main,
  //     text: "Check out and support our Kickstarter!",
  //   },
  //   {
  //     side: "right",
  //     image: image_into,
  //     title: "Intro",
  //     text:
  //       "Did you ever imagine a card where the Jack of Spades is in a tracksuit, has a ski mask on, and not to mention is a wolf!? In this deck, every suit is associated with a different gang, from a different culture and a different animal kingdom. Every character has its own personality, while still keeping the traditional, minimalistic look of a playing card. We wanted a product that could be used as a collectible, for cardistry, for magic, and for playing games.",
  //   },
  //   {
  //     side: "left",
  //     image: image_box,
  //     title: "Box Materials",
  //     text:
  //       "The tuck box has a smooth black matte finish, with gold foil and embossing. From the front to the back, the sides, and the opening flaps, the surface of the box is embroidered with intricate designs of the animal kingdom and the gang world. The gold foil and its reflections in different light conditions give the final touch contributing to the luxurious look of the deck, whereas the embossing gives a 3D feel when holding the box in your hands.",
  //   },
  //   {
  //     side: "right",
  //     image: image_card,
  //     title: "Card Materials",
  //     text:
  //       "We have chosen to print our designs on 310g German black core cards. Thus, each card contains an inner layer that helps the card remain straight after being twisted and bent, as well as making sure that one cannot see through the card. A good core to a card is what a good spine is to a human." +
  //       "In addition, the cards have an air-cushion finish, which in principle, are extremely small indentations on the finish of the card that pass particles of air in between them, which eases the manipulation of the deck during magic tricks and shuffling, giving the feeling of an “air-cushion” in-between the cards.",
  //   },
  //   {
  //     side: "left",
  //     image: image_concept,
  //     title: "Card Concept",
  //     text:
  //       "The project is revolving around the theme of mafias from different epochs and regions of the world. Each suite is associated with a unique yet recognizable group. However, to spice up the social interactions when using the cards, we have decided to add a sense of humor to the deck by blending the theme of mafias with that of animals, and hence the name: Animal Gangdom! Each suite is represented by the animals living in the environment and culture of the faction.",
  //   },
  //   {
  //     side: "right",
  //     image: image_clubs,
  //     transY: 30,
  //     title: "Clubs / Domestic Bruvs",
  //     text:
  //       "Western European mafias from the late 19th century, in the style of “Peaky Blinders”, featuring domestic animals: Rat, Cat (Sphynx), Bulldog",
  //   },
  //   {
  //     side: "left",
  //     image: image_hearts,
  //     transY: 40,
  //     title: "Hearts / Farm Borthers",
  //     text:
  //       "North American bikers, in the style of “Hell’s Angels”, featuring farm animals: Rooster, Pig, Bull",
  //   },
  //   {
  //     side: "right",
  //     image: image_spades,
  //     transY: 30,
  //     title: "Clubs / Taiga Bratans",
  //     text:
  //       "Eastern European mafias from the 1990s, featuring forest animals: Wolf, Fox, Bear",
  //   },
  //   {
  //     side: "left",
  //     image: image_diamonds,
  //     transY: 40,
  //     title: "Diamonds / Grassland Brothas",
  //     text:
  //       "American gangsters, featuring jungle animals: Hyena, Cobra, Crocodile",
  //   },
  // ];

  return (
    <div>
      <DescriptionPannel {...collection.descriptionPannel} />

      <ItemGrid
        items={collection.items}
        commingSoon={false}
        title={collection.name}
      />
      {collection.displayContainers.map((container: DisplayContainerProps) => {
        return <DisplayContainer {...container} />;
      })}

      <Splider spliders={collection.spliderData} />

      {/* <Splider /> */}
    </div>
  );
};
