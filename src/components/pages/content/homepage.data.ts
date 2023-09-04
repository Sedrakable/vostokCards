import { DisplayContainerProps } from "../containers/DisplayContainer";
import { SpliderProps } from "../containers/Splider";
import { CollectionNames } from "./data.types";

//Steampunk
const bothSidesDecks: string = require("../../../assets/photos/Steampunk/Deck/Decks both Sides.png");
const steampunkThumbnail1: string = require("../../../assets/photos/Steampunk/Thumbnail/Thumbnail 1.png");
const steampunkMap: string = require("../../../assets/photos/Steampunk/Book/Map.png");
const kickstarterThumbnail: string = require("../../../assets/photos/Steampunk/Thumbnail/Kickstarter.png");
const insagramThumbnail: string = require("../../../assets/photos/Steampunk/Thumbnail/Instagram.png");

const animalThumbnail: string = require("../../../assets/photos/Animal/AG_1.jpg");

export const displayData: DisplayContainerProps = {
  image: { src: bothSidesDecks, alt: "2 decks" },
  content: {
    title: "Luxury",
    subtitle: "At it's finest",
  },
};

export const homepageSpliderData: SpliderProps[] = [
  {
    content: {
      title: "Steampunk Dynasty" as CollectionNames,
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
      ctas: { path: "/collections/steampunk_dynasty", text: "Collection" },
      side: "right",
    },
    image: { src: steampunkThumbnail1, alt: "deck and card" },
  },
  {
    content: {
      title: "Steampunk Dynasty Universe" as CollectionNames,
      description:
        "Gears and Glory is a novel set in the universe of The Steampunk Dynasty, where technology and fashion are heavily influenced by the Victorian Era. The story takes place in a world ruled by four monarchies, each possessing specific resources to wield power over other nations.",
      side: "left",
    },
    image: { src: steampunkMap, alt: "map" },
  },
  {
    content: {
      title: "Animal Gangdom" as CollectionNames,
      description:
        "Did you ever imagine a card where the Jack of Spades is in a tracksuit, has a ski mask on, and not to mention is a wolf!? In this deck, every suit is associated with a different gang, from a different culture and a different animal kingdom. Every character has its own personality, while still keeping the traditional, minimalistic look of a playing card. We wanted a product that could be used as a collectible, for cardistry, for magic, and for playing games.",
      ctas: { path: "/collection/animal_gangdom", text: "Collection" },
    },
    image: { src: animalThumbnail, alt: "deck and card" },
  },
  {
    content: {
      title: "Steampunk Dynasty Kickstarter",
      description:
        "View the Kickstarter to experience the SteamPunk Dynasty in all its glory",
      ctas: {
        path:
          "https://www.kickstarter.com/projects/vostokcards/steampunk-dynasty-gears-and-glory",
        text: "Kickstarter",
        link: true,
      },
      side: "right",
    },
    image: { src: kickstarterThumbnail, alt: "Kickstarter Thumbnail" },
  },
  {
    content: {
      title: "Instagram",
      subtitle: "Follow on Instagram",
      ctas: {
        path: "https://www.instagram.com/vostokcards/?hl=en",
        text: "Follow",
        link: true,
      },
    },
    image: { src: insagramThumbnail, alt: "Instgram Collage" },
  },
];
