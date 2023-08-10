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
const allCards: string = require("../../../assets/photos/Steampunk/Cards/Cards Spread.png");

//Product Images
const azureDeck: string = require("../../../assets/photos/Steampunk/Deck/Azure Deck.png");
const amberDeck: string = require("../../../assets/photos/Steampunk/Deck/Amber Deck.png");
const crimsonDeck: string = require("../../../assets/photos/Steampunk/Deck/Crimson Deck.png");
const jadeDeck: string = require("../../../assets/photos/Steampunk/Deck/Jade Deck.png");
const book: string = require("../../../assets/photos/Steampunk/Book/PaperBack.png");

//Suit themes
const azureSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Azure.png");
const amberSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Amber.png");
const crimsonSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Crimson.png");
const jadeSuit: string = require("../../../assets/photos/Steampunk/Deck/SuitThemes/Jade.png");

const spadesCards: string = require("../../../assets/photos/Steampunk/Cards/Spades.png");
const heartsCards: string = require("../../../assets/photos/Steampunk/Cards/Hearts.png");
const diamondsCards: string = require("../../../assets/photos/Steampunk/Cards/Diamonds.png");
const clubsCards: string = require("../../../assets/photos/Steampunk/Cards/Clubs.png");
const aceCards: string = require("../../../assets/photos/Steampunk/Cards/Aces.png");
const jokerCards: string = require("../../../assets/photos/Steampunk/Cards/Jokers_1.png");
const backCards: string = require("../../../assets/photos/Steampunk/Cards/Back Side.png");
const numberCards: string = require("../../../assets/photos/Steampunk/Cards/Number animation.gif");

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

export const steampunkDynastySpliderData1: SpliderProps[] = [
  {
    content: {
      title: "Amber Deck",
      description:
        "The Amber tuck box indicated the warm orange sunrise of Hearts Islands allowing the silver foil design to summon the strength and fury of their nations’ sea fleet.",
    },
    image: { src: amberSuit, alt: "deck and card" },
  },
  {
    content: {
      title: "Azure Deck",
      description:
        "The Azure tuck box contains the cool blue lights of the Spades City permitting the silver foil accents to demonstrate the sleekness and cunningness of their nation.",
    },
    image: { src: azureSuit, alt: "deck and card" },
  },
  {
    content: {
      title: "Crimson Deck",
      description:
        "The Crimson tuck box demonstrates colors of royalty through the bright red of the Diamond Kingdom while exemplifying the gold foil to suggest their wealth and dominance throughout the nations.",
    },
    image: { src: crimsonSuit, alt: "deck and card" },
  },
  {
    content: {
      title: "Jade Deck",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Gears & Glory",
    },
    image: { src: jadeSuit, alt: "deck and card" },
  },
];

export const steampunkDynastySpliderData2: SpliderProps[] = [
  {
    content: {
      title: "Hearts",
      subtitle: "Heart Court Cards",
      description:
        "The court cards of Hearts boast a warm and inviting color scheme, primarily showcasing shades of orange. Accent with black, white, and red - the traditional heart suit colors. Drawing inspiration from the Nordic nations' seafaring and exploration heritage, these cards feature imagery of boats and long-range weaponry.",
    },
    image: { src: heartsCards, alt: "Heart Court Cards" },
  },
  {
    content: {
      title: "Spades",
      description:
        "The face cards for Spades exudes a sleek sophistication with a vibrant blue color scheme reminiscent of futuristic city lights. The sharp black-and-white imagery adds intensity and captivation to the design. Each court card showcases blades and advanced technology, inspired by the realm of assassins and weaponry.",
      subtitle: "Spade Court Cards",
    },
    image: { src: spadesCards, alt: "Spade Court Cards" },
  },
  {
    content: {
      title: "Diamonds",
      description:
        "From Cards to Chapters: Immerse Yourself in the Steampunk Dynasty",
      subtitle: "Diamond Court Cards",
    },
    image: { src: diamondsCards, alt: "Diamond Court Cards" },
  },
  {
    content: {
      title: "Clubs",
      description:
        "The court cards of Clubs exhibit a striking industrial design, reminiscent of powerful machinery, coal mines, and salvage yards. The black and white color scheme enhances the starkness, while green accents add an enigmatic and captivating energy. The depicted weaponry exudes strength and durability, reminiscent of rugged construction machinery.",
      subtitle: "Club Court Cards",
    },
    image: { src: clubsCards, alt: "Club Court Cards" },
  },
  {
    content: {
      title: "Aces",
      description:
        "The Aces are the powerhouses of the deck, representing the core, driving engine of each nation. As a combination of the pips on the number cards and the intricate details of the court cards, they embody the very essence of each suit.",
    },
    image: { src: aceCards, alt: "Ace Cards" },
  },
  {
    content: {
      title: "Jokers",
      description:
        "The Jokers…One with a striking red color scheme and the other with a sleek black design. The enigmatic figures depicted on these cards seem to hold some kind of secret. It's unclear what role they play, but one thing is certain: these Jokers are no ordinary court jesters…",
    },
    image: { src: jokerCards, alt: "Joker Cards" },
  },
  {
    content: {
      title: "Number Cards",
      description:
        "The number cards have been meticulously crafted to ensure a smooth and seamless playing experience. The cards are organized in a specific order and pattern that not only looks slick but also helps players quickly and easily understand what each card represents. The combination of bold numbers and elegant designs makes it easy to identify each card, even from a distance.",
    },
    image: { src: numberCards, alt: "Number Cards" },
  },
  {
    content: {
      title: "Back Cards",
      description:
        "The back cards showcase four unique color schemes, each distinct and eye-catching. The blue variant with a white background represents the Spades. The green variant with a white background represents the Clubs. The orange variant with a black background represents the Diamonds and the yellow variant with a black background represents the Hearts. Each back design adds clear visibility and demonstrates the sleekness of each nation.",
    },
    image: { src: backCards, alt: "Back Cards" },
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
    thumbnailImage: { src: amberDeck, alt: "amber deck" },
    images: [
      { src: amberDeck, alt: "amber deck" },
      { src: amberDeck, alt: "amber deck" },
    ],
    path: "amber",
    price: 22,
    description:
      "The Amber tuck box indicated the warm orange sunrise of Hearts Islands allowing the silver foil design to summon the strength and fury of their nations’ sea fleet.",
  },
  {
    name: "Azure",
    thumbnailImage: { src: azureDeck, alt: "azure deck" },
    path: "azure",
    price: 22,
    description:
      "The Azure tuck box contains the cool blue lights of the Spades City permitting the silver foil accents to demonstrate the sleekness and cunningness of their nation.",
  },
  {
    name: "Crimson",
    thumbnailImage: { src: crimsonDeck, alt: "crimson deck" },
    path: "crimson",
    price: 22,
    description:
      "The Crimson tuck box demonstrates colors of royalty through the bright red of the Diamond Kingdom while exemplifying the gold foil to suggest their wealth and dominance throughout the nations.",
  },
  {
    name: "Jade",
    thumbnailImage: { src: jadeDeck, alt: "jade deck" },
    path: "jade",
    price: 22,
    description:
      "The Jade tuck box reflects the green glow of the machinery that powers the Club Caverns allowing the gold accents to demonstrate the power and status of their nation.",
  },
  {
    name: "Gears & Glory",
    thumbnailImage: { src: book, alt: "animal gangdom" },
    path: "gears_glory",
    price: 20,
    description:
      "Steampunk Dynasty: Gears and Glory was created to bring a deck of playing cards to life. By blending Victorian-Era aesthetics and futuristic technology, this project immerses readers into a captivating world of adventure and intrigue. With the incorporation of a novel component, this Kickstarter stands out from the rest, offering a truly exceptional and unparalleled experience for steampunk, playing cards and novel enthusiasts.",
  },
];

export const animalGangdomProducts: ProductType[] = [
  {
    name: "Animal Gangdom",
    thumbnailImage: { src: azureDeck, alt: "animal gangdom" },
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
      link: true,
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
    image: { src: allCards, alt: "Cards spread" },
    title: "Card Design",
    subtitle: "As Steampunk as it can get",
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
    infoContainers: [
      {
        spliderData: steampunkDynastySpliderData1,
        displayContainer: SDDisplayContainers[0],
      },
      {
        spliderData: steampunkDynastySpliderData2,
        displayContainer: SDDisplayContainers[1],
      },
    ],
  },
  {
    name: "Animal Gangdom",
    description: "Animal Gangdom description",
    thumbnailImage: { src: animalThumbnail2, alt: "animal gangdom" },
    path: "/collection/animal_gangdom",
    items: animalGangdomProducts,
    descriptionPannel: SDdescriptionPannel,
    infoContainers: [
      {
        spliderData: animalGangdomSpliderData,
        displayContainer: SDDisplayContainers[0],
      },
      {
        spliderData: animalGangdomSpliderData,
        displayContainer: SDDisplayContainers[1],
      },
    ],
  },
];
