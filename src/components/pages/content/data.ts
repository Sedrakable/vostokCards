import { CollectionType } from "../collections/CollectionPage";
import { DescriptionPannelProps } from "../containers/DescriptionPannel";
import { DisplayContainerProps } from "../containers/DisplayContainer";
import { SpliderProps } from "../containers/Splider";
import { CollectionNames, ProductType } from "./data.types";
const steampunkThumbnail1: string = require("../../../assets/photos/Steampunk/Thumbnail/Thumbnail 1.png");
const steampunkThumbnail3: string = require("../../../assets/photos/Steampunk/Thumbnail/Thumbnail 3.png");
const steampunkThumbnail2: string = require("../../../assets/photos/Steampunk/Thumbnail/Thumbnail 2.png");

//Steampunk
const bothSidesDecks: string = require("../../../assets/photos/Steampunk/Deck/Decks both Sides.png");
const allVariants: string = require("../../../assets/photos/Steampunk/Deck/Variants.png");
const blackCards: string = require("../../../assets/photos/Steampunk/Cards/Queens Black.png");
const redCards: string = require("../../../assets/photos/Steampunk/Cards/Jack and King red.png");

//Product Images
const azureDeck: string = require("../../../assets/photos/Steampunk/Deck/Azure Deck.png");
const amberDeck: string = require("../../../assets/photos/Steampunk/Deck/Amber Deck.png");
const crimsonDeck: string = require("../../../assets/photos/Steampunk/Deck/Crimson Deck.png");
const jadeDeck: string = require("../../../assets/photos/Steampunk/Deck/Jade Deck.png");

//Suit themes
const azureSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Azure.png");
const amberSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Amber.png");
const crimsonSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Crimson.png");
const jadeSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Jade.png");

const animalThumbnail: string = require("../../../assets/photos/Animal/AG_1.jpg");
const animalThumbnail2: string = require("../../../assets/photos/Animal/AG_2.jpg");

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
      title: "Animal Gangdom" as CollectionNames,
      description:
        "Did you ever imagine a card where the Jack of Spades is in a tracksuit, has a ski mask on, and not to mention is a wolf!? In this deck, every suit is associated with a different gang, from a different culture and a different animal kingdom. Every character has its own personality, while still keeping the traditional, minimalistic look of a playing card. We wanted a product that could be used as a collectible, for cardistry, for magic, and for playing games.",
      ctas: { path: "/collection/animal_gangdom", text: "Collection" },
    },
    image: { src: animalThumbnail, alt: "deck and card" },
  },
  {
    content: {
      title: "Steampunk Dynasty Decks",
      description:
        "Did you ever imagine a card where the Jack of Spades is in a tracksuit, has a ski mask on, and not to mention is a wolf!? In this deck, every suit is associated with a different gang, from a different culture and a different animal kingdom. Every character has its own personality, while still keeping the traditional, minimalistic look of a playing card. We wanted a product that could be used as a collectible, for cardistry, for magic, and for playing games.",
      ctas: { path: "/collections/steampunk_dynasty", text: "view decks" },
    },
    image: { src: steampunkThumbnail3, alt: "deck and card" },
  },
];

export const steampunkDynastySpliderData: SpliderProps[] = [
  {
    content: {
      title: "Steampunk Dynasty",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
      ctas: { path: "/products", text: "Collection" },
      // side: "right",
    },
    image: { src: amberSuit, alt: "deck and card" },
  },
  {
    content: {
      title: "Steampunk Dynasty",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
      ctas: { path: "/products", text: "Collection" },
      // side: "right",
    },
    image: { src: azureSuit, alt: "deck and card" },
  },
  {
    content: {
      title: "Steampunk Dynasty",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
      ctas: { path: "/products", text: "Collection" },
      // side: "right",
    },
    image: { src: crimsonSuit, alt: "deck and card" },
  },
  {
    content: {
      title: "Steampunk Dynasty",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
      ctas: { path: "/products", text: "Collection" },
      // side: "right",
    },
    image: { src: jadeSuit, alt: "deck and card" },
  },
];

export const animalGangdomSpliderData: SpliderProps[] = [
  {
    content: {
      title: "Steampunk Dynasty",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
      ctas: { path: "/products", text: "Collection" },
      // side: "right",
    },
    image: { src: steampunkThumbnail3, alt: "deck and card" },
  },
  {
    content: {
      title: "Animal Gangdom",
      description:
        "Did you ever imagine a card where the Jack of Spades is in a tracksuit, has a ski mask on, and not to mention is a wolf!? In this deck, every suit is associated with a different gang, from a different culture and a different animal kingdom. Every character has its own personality, while still keeping the traditional, minimalistic look of a playing card. We wanted a product that could be used as a collectible, for cardistry, for magic, and for playing games.",
      ctas: { path: "/products", text: "Collection" },
      // side: "right",
    },
    image: { src: animalThumbnail, alt: "deck and card" },
  },
];

export const displayData: DisplayContainerProps = {
  image: { src: bothSidesDecks, alt: "2 decks" },
  title: "Luxury",
  subtitle: "At it's finest",
};

export const SDProducts: ProductType[] = [
  {
    name: "Amber",
    image: { src: amberDeck, alt: "animal gangdom" },
    path: "amber",
    price: 22,
    description: "lorem",
  },
  {
    name: "Azure",
    image: { src: azureDeck, alt: "animal gangdom" },
    path: "azure",
    price: 22,
    description: "lorem",
  },
  {
    name: "Crimson",
    image: { src: crimsonDeck, alt: "animal gangdom" },
    path: "crimson",
    price: 22,
    description: "lorem",
  },
  {
    name: "Jade",
    image: { src: jadeDeck, alt: "animal gangdom" },
    path: "jade",
    price: 22,
    description: "lorem",
  },
];

export const animalGangdomProducts: ProductType[] = [
  {
    name: "Animal Gangdom",
    image: { src: azureDeck, alt: "animal gangdom" },
    path: "animal_gangdom",
    price: 20,
    description: "lorem",
  },
];

//SD desction pannel
const SDdescriptionPannel: DescriptionPannelProps = {
  content: {
    title: "Steampunk Dynasty",
    subtitle: "Gears and Glory",
    description:
      "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
    ctas: {
      path:
        "https://www.kickstarter.com/projects/vostokcards/steampunk-dynasty-gears-and-glory",
      text: "View Kickstarter",
    },
  },
  image: { src: steampunkThumbnail1, alt: "steampunk thumbnail" },
};
//SD display containers
const SDDisplayContainers: DisplayContainerProps[] = [
  {
    image: { src: allVariants, alt: "Four Variants" },
    title: "Four Variants",
    subtitle: "Pick your vibe!",
  },
  {
    image: { src: blackCards, alt: "Queen of Spades and Queen of Clubs" },
    title: "Spades and Clubs",
  },
  {
    image: { src: redCards, alt: "Jack of Diamonds and King of Hearts" },
    title: "Hearts and Diamonds",
  },
];

export const collectionItems: CollectionType[] = [
  {
    name: "Steampunk Dynasty",
    description: "Steampunk description",
    columns: 2,
    thumbnailImage: { src: steampunkThumbnail2, alt: "steampunk dynasty" },
    path: "/collection/steampunk_dynasty",
    items: SDProducts,
    descriptionPannel: SDdescriptionPannel,
    spliderData: steampunkDynastySpliderData,
    displayContainers: SDDisplayContainers,
  },
  {
    name: "Animal Gangdom",
    description: "Animal Gangdom description",
    thumbnailImage: { src: animalThumbnail2, alt: "animal gangdom" },
    path: "/collection/animal_gangdom",
    items: animalGangdomProducts,
    descriptionPannel: SDdescriptionPannel,
    spliderData: animalGangdomSpliderData,
    displayContainers: SDDisplayContainers,
  },
];
