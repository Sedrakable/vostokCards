import { CollectionType } from "../collections/CollectionPage";
import { ProductType } from "./data.types";
import { DescriptionPannelProps } from "../containers/DescriptionPannel";
import { DisplayContainerProps } from "../containers/DisplayContainer";
import { SpliderProps } from "../containers/Splider";

const animalThumbnail: string = require("../../../assets/photos/Animal/AG_1.jpg");
const animalThumbnail2: string = require("../../../assets/photos/Animal/AG_2.jpg");

const product_thumbnail: string = require("../../../assets/photos/Animal/AG_5.jpg");
const product_image_1: string = require("../../../assets/photos/Animal/AG_7.jpg");
const product_image_2: string = require("../../../assets/photos/Animal/AG_3.jpg");
const product_image_3: string = require("../../../assets/photos/Animal/AG_4.jpg");

const spades: string = require("../../../assets/photos/Animal/Spades.jpg");
const clubs: string = require("../../../assets/photos/Animal/Clubs.jpg");
const hearts: string = require("../../../assets/photos/Animal/Hearts.jpg");
const diamonds: string = require("../../../assets/photos/Animal/Diamonds.jpg");

const spliderData_AG: SpliderProps[] = [
  {
    content: {
      title: "Clubs",
      description:
        "Western European mafias from the late 19th century, in the style of “Peaky Blinders”, featuring domestic animals: Rat, Cat (Sphynx), Bulldog",

      subtitle: "Domestic Bruvs",
      side: "right",
    },
    image: { src: clubs, alt: "clubs" },
  },
  {
    content: {
      title: "Hearts",
      description:
        "North American bikers, in the style of “Hell’s Angels”, featuring farm animals: Rooster, Pig, Bull",
      subtitle: "Farm Borthers",
    },
    image: { src: hearts, alt: "hearts" },
  },
  {
    content: {
      title: "Spades",
      description:
        "Eastern European mafias from the 1990s, featuring forest animals: Wolf, Fox, Bear",
      subtitle: "Taiga Bratans",
      side: "right",
    },
    image: { src: spades, alt: "spades" },
  },

  {
    content: {
      title: "Diamonds",
      description:
        "American gangsters, featuring jungle animals: Hyena, Cobra, Crocodile",
      subtitle: "Grassland Brothas",
      side: "right",
    },
    image: { src: diamonds, alt: "diamonds" },
  },
];

const descriptionPannel_AG: DescriptionPannelProps = {
  content: {
    title: "Animal Gangdom",
    description:
      "Luxurious deck of playing cards, tediously designed, and produced from high quality materials.",
    ctas: {
      path:
        "https://www.kickstarter.com/projects/vostokcards/vostok-cards-animal-gangdom",
      text: "View Kickstarter",
      link: true,
    },
  },
  image: { src: animalThumbnail, alt: "steampunk thumbnail" },
};

const displayContainers_AG: DisplayContainerProps[] = [
  {
    image: { src: animalThumbnail2, alt: "luxury deck" },
    content: { title: "Luxury" },
  },
  {
    image: { src: product_image_2, alt: "close up" },
    content: { title: "Close Up" },
  },
  {
    image: { src: product_image_3, alt: "The Back" },
    content: { title: "The Back" },
  },
];

export const products_AG: ProductType[] = [
  {
    name: "Animal Gangdom",
    thumbnailImage: { src: product_thumbnail, alt: "animal gangdom deck" },
    images: [
      { src: product_thumbnail, alt: "animal gangdom deck" },
      { src: product_image_1, alt: "animal gangdom deck" },
      { src: product_image_2, alt: "animal gangdom deck" },
      { src: product_image_3, alt: "animal gangdom deck" },
    ],
    description:
      "Luxurious deck of playing cards, tediously designed, and produced from high quality materials",
    ctas: {
      amazon:
        "https://www.amazon.ca/Luxury-Custom-Animal-Gangdom-Playing/dp/B0B4GTNGNT",
      etsy:
        "https://www.etsy.com/ca/listing/1095416205/luxury-custom-animal-gang-playing-cards",
    },
  },
];

export const collectionItem_AG: CollectionType = {
  name: "Animal Gangdom",
  description: "Animal Gangdom description",
  thumbnailImage: { src: animalThumbnail2, alt: "animal gangdom" },
  path: "/collection/animal_gangdom",
  items: products_AG,
  descriptionPannel: descriptionPannel_AG,
  infoContainers: [
    {
      displayContainer: displayContainers_AG[0],
    },
    {
      displayContainer: displayContainers_AG[1],
    },
    {
      spliderData: spliderData_AG,
      displayContainer: displayContainers_AG[2],
    },
  ],
};
