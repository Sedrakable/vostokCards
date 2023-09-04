import { CollectionType } from "../collections/CollectionPage";
import { ProductType } from "./data.types";
import { DescriptionPannelProps } from "../containers/DescriptionPannel";
import { DisplayContainerProps } from "../containers/DisplayContainer";
import { SpliderProps } from "../containers/Splider";

const steampunkThumbnail1: string = require("../../../assets/photos/Steampunk/Thumbnail/Thumbnail 1.png");
const steampunkThumbnail2: string = require("../../../assets/photos/Steampunk/Thumbnail/Thumbnail 2.png");

const allVariants: string = require("../../../assets/photos/Steampunk/Deck/Variants.png");
const bookDisplay: string = require("../../../assets/photos/Steampunk/Book/Book Open.png");
const allCards: string = require("../../../assets/photos/Steampunk/Cards/Cards Spread.png");
const rotatingDeck: string = require("../../../assets/photos/Steampunk/Deck/Rotating Deck.gif");
const insideDeck: string = require("../../../assets/photos/Steampunk/Deck/Inside the deck.gif");
const decksBothSides: string = require("../../../assets/photos/Steampunk/Deck/Decks both Sides.png");

//Product Images
const azureDeck: string = require("../../../assets/photos/Steampunk/Deck/Azure Deck.png");
const amberDeck: string = require("../../../assets/photos/Steampunk/Deck/Amber Deck.png");
const crimsonDeck: string = require("../../../assets/photos/Steampunk/Deck/Crimson Deck.png");
const jadeDeck: string = require("../../../assets/photos/Steampunk/Deck/Jade Deck.png");
const book: string = require("../../../assets/photos/Steampunk/Book/PaperBack.png");
const eBook: string = require("../../../assets/photos/Steampunk/Tiers/The Steam Reader Tier.png");
const stickers: string = require("../../../assets/photos/Steampunk/Addons/Stickers Addon.png");
const bookmarks: string = require("../../../assets/photos/Steampunk/Addons/Bookmarks Addon.png");
const artbook: string = require("../../../assets/photos/Steampunk/Addons/Artbook Addon.png");
const artbook2: string = require("../../../assets/photos/Steampunk/Addons/Artbook 2.png");
const box: string = require("../../../assets/photos/Steampunk/Addons/Box.png");

//Combos
const combo_1: string = require("../../../assets/photos/Steampunk/Tiers/Gears and Pages Tier.png");
const combo_2: string = require("../../../assets/photos/Steampunk/Tiers/Collector's case.png");
const combo_3: string = require("../../../assets/photos/Steampunk/Tiers/The Triumphant.png");

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

//Book display
const map: string = require("../../../assets/photos/Steampunk/Book/Map.png");
const bookWithArrows: string = require("../../../assets/photos/Steampunk/Book/Book with Arrows.png");
const chapter1: string = require("../../../assets/photos/Steampunk/Book/Book Chapter 1 GreyScale.png");
const bookBack: string = require("../../../assets/photos/Steampunk/Book/Full Back.png");
const summary: string = require("../../../assets/photos/Steampunk/Book/Summary.png");

//Nations
const spadeCity: string = require("../../../assets/photos/Steampunk/Book/Nations/Spade City.png");
const clubCaverns: string = require("../../../assets/photos/Steampunk/Book/Nations/Club Caverns.png");
const diamondKingdom: string = require("../../../assets/photos/Steampunk/Book/Nations/Diamond Kingdom.png");
const heartLot: string = require("../../../assets/photos/Steampunk/Book/Nations/Heart Lot Islands.png");

const products_SD: ProductType[] = [
  {
    name: "Azure",
    thumbnailImage: { src: azureDeck, alt: "azure deck" },
    images: [
      { src: azureDeck, alt: "azure deck" },
      { src: azureSuit, alt: "azure combo" },
    ],
    price: 0,
    description:
      "The Azure tuck box contains the cool blue lights of the Spades City permitting the silver foil accents to demonstrate the sleekness and cunningness of their nation.",
  },
  {
    name: "Jade",
    thumbnailImage: { src: jadeDeck, alt: "jade deck" },
    images: [
      { src: jadeDeck, alt: "jade deck" },
      { src: jadeSuit, alt: "jade combo" },
    ],
    price: 0,
    description:
      "The Jade tuck box reflects the green glow of the machinery that powers the Club Caverns allowing the gold accents to demonstrate the power and status of their nation.",
  },
  {
    name: "Crimson",
    thumbnailImage: { src: crimsonDeck, alt: "crimson deck" },
    images: [
      { src: crimsonDeck, alt: "crimson deck" },
      { src: crimsonSuit, alt: "crimson combo" },
    ],
    price: 0,
    description:
      "The Crimson tuck box demonstrates colors of royalty through the bright red of the Diamond Kingdom while exemplifying the gold foil to suggest their wealth and dominance throughout the nations.",
  },
  {
    name: "Amber",
    thumbnailImage: { src: amberDeck, alt: "amber deck" },
    images: [
      { src: amberDeck, alt: "amber deck" },
      { src: amberSuit, alt: "amber combo" },
    ],
    price: 0,
    description:
      "The Amber tuck box indicated the warm orange sunrise of Hearts Islands allowing the silver foil design to summon the strength and fury of their nations’ sea fleet.",
  },

  {
    name: "Stickers",
    thumbnailImage: { src: stickers, alt: "stickers" },
    price: 0,
    description:
      "four high-quality stickers featuring the symbols from the Ace cards. Perfect for Steampunk Dynasty enthusiasts and collectors, these durable weather-resistant vinyl stickers showcase vibrant, high-quality prints of the corresponding Ace card symbols.",
  },
  {
    name: "Artbook",
    thumbnailImage: { src: artbook, alt: "artbook" },
    images: [
      { src: artbook, alt: "2 artbooks" },
      { src: artbook2, alt: "artbook open " },
    ],
    price: 0,
    description:
      "A delightful addition to your collection, showcasing intricate face card designs. Each page features a stunning visual of the court card and provides a detailed backstory on the character and design elements. Appreciate the artistry and craftsmanship behind each card with our Artbook.",
  },
  {
    name: "Combo 1",
    thumbnailImage: { src: combo_2, alt: "Collector's Case", fit: true },
    images: [
      { src: combo_2, alt: "Collector's Case" },
      { src: azureDeck, alt: "azure deck" },
      { src: jadeDeck, alt: "jade deck" },
      { src: crimsonDeck, alt: "crimson deck" },
      { src: amberDeck, alt: "amber deck" },
      { src: stickers, alt: "stickers" },
      { src: artbook, alt: "artbook" },
      { src: box, alt: "artbook" },
    ],
    price: 0,
    columns: 2,
    description:
      "This collector's set comes in a lavishing dark-brown case to accommodate all four deck variants. This set also includes four Ace symbol stickers and an Artbook to showcase each court card.",
  },
  {
    name: "Gears & Glory",
    thumbnailImage: { src: book, alt: "novel" },
    images: [
      { src: bookWithArrows, alt: "book with arrows", fit: true },
      { src: bookDisplay, alt: "book display" },
      { src: summary, alt: "summary", fit: true },
      { src: chapter1, alt: "chapter one", fit: true },
      { src: bookBack, alt: "book back", fit: true },
    ],
    price: 0,
    description:
      "Steampunk Dynasty: Gears and Glory was created to bring a deck of playing cards to life. By blending Victorian-Era aesthetics and futuristic technology, this project immerses readers into a captivating world of adventure and intrigue. With the incorporation of a novel component, this Kickstarter stands out from the rest, offering a truly exceptional and unparalleled experience for steampunk, playing cards and novel enthusiasts.",
  },
  {
    name: "Combo 2",
    thumbnailImage: { src: combo_1, alt: "gears and pages", fit: true },
    images: [
      { src: combo_1, alt: "gears and pages" },
      { src: book, alt: "novel" },
      { src: bookmarks, alt: "bookmarks" },
      { src: eBook, alt: "eBook" },
    ],
    price: 0,
    columns: 2,
    description:
      "This set comes with the Steampunk Dynasty: Gears and Glory paperback novel, an electronic code for the E-book, and a deck variant of your choice. Along with a sticker and a bookmark to represent the variant",
  },
  {
    name: "E-book",
    thumbnailImage: { src: eBook, alt: "eBook" },
    price: 0,
    description:
      "Steampunk Dynasty: Gears and Glory was created to bring a deck of playing cards to life. By blending Victorian-Era aesthetics and futuristic technology, this project immerses readers into a captivating world of adventure and intrigue. With the incorporation of a novel component, this Kickstarter stands out from the rest, offering a truly exceptional and unparalleled experience for steampunk, playing cards and novel enthusiasts.",
  },
  {
    name: "Bookmarks",
    thumbnailImage: { src: bookmarks, alt: "bookmarks" },
    price: 0,
    description:
      "Four unique Bookmarks, each depicting the suits. Perfect for marking your place in any book, they are especially fitting for the Steampunk Dynasty: Gears and Glory novel. With intricate designs and high-quality printing, these bookmarks are visually appealing and durable. Whether you're an avid reader or a collector of stylish accessories, these must-have bookmarks will enhance your collection.",
  },

  {
    name: "Combo 3",
    thumbnailImage: { src: combo_3, alt: "The Triumphant", fit: true },
    images: [
      { src: combo_3, alt: "Collector's Case" },
      { src: azureDeck, alt: "azure deck" },
      { src: jadeDeck, alt: "jade deck" },
      { src: crimsonDeck, alt: "crimson deck" },
      { src: amberDeck, alt: "amber deck" },
      { src: stickers, alt: "stickers" },
      { src: artbook, alt: "artbook" },
      { src: box, alt: "artbook" },
      { src: book, alt: "novel" },
      { src: bookmarks, alt: "bookmarks" },
      { src: eBook, alt: "eBook" },
    ],
    price: 0,
    columns: 2,
    description:
      "With all four decks, a luxurious case will be provided. Purchasers will also receive a code granting access to the online E-book version of our novel, as well as a paperback copy. An artbook will be included with detailed and captivating designs of each card, four Ace stickers and four bookmarks representing each nation.",
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
  },
  {
    image: { src: allCards, alt: "Cards spread" },
    content: {
      title: "Card Design",
      subtitle: "As Steampunk as it can get",
    },
  },
  {
    image: { src: bookDisplay, alt: "Book display" },
    content: {
      title: "Gears & Glory",
      subtitle: "Bring a deck of playing cards to life",
    },
  },
];

export const steampunkDynastySpliderData1: SpliderProps[] = [
  {
    image: { src: decksBothSides, alt: "both sides of the deck" },
  },
  {
    image: { src: rotatingDeck, alt: "deck rotating", fit: true },
  },
  {
    image: { src: insideDeck, alt: "inside the deck", fit: true },
  },
  {
    image: { src: amberSuit, alt: "deck and card", mobileFit: true },
  },
  {
    image: { src: azureSuit, alt: "deck and card", mobileFit: true },
  },
  {
    image: { src: crimsonSuit, alt: "deck and card", mobileFit: true },
  },
  {
    image: { src: jadeSuit, alt: "deck and card", mobileFit: true },
  },
];

export const steampunkDynastySpliderData2: SpliderProps[] = [
  {
    image: { src: heartsCards, alt: "Heart Court Cards" },
  },
  {
    image: { src: spadesCards, alt: "Spade Court Cards" },
  },
  {
    image: { src: diamondsCards, alt: "Diamond Court Cards" },
  },
  {
    image: { src: clubsCards, alt: "Club Court Cards" },
  },
  {
    image: { src: aceCards, alt: "Ace Cards", fit: true },
  },
  {
    image: { src: jokerCards, alt: "Joker Cards" },
  },
  {
    image: { src: numberCards, alt: "Number Cards", fit: true },
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

export const steampunkDynastySpliderData3: SpliderProps[] = [
  {
    content: {
      title: "The Map",
      subtitle:
        "The story takes place in a world ruled by four monarchies, each possessing specific resources to wield power over other nations. ",
    },
    image: { src: map, alt: "Map" },
  },
  {
    image: { src: spadeCity, alt: "spade city", fit: true },
  },
  {
    image: { src: clubCaverns, alt: "club caverns", fit: true },
  },
  {
    image: { src: heartLot, alt: "heart lot islands", fit: true },
  },
  {
    image: { src: diamondKingdom, alt: "diamond kingdom", fit: true },
  },
];

export const collectionItem_SD: CollectionType = {
  name: "Steampunk Dynasty",
  description: "Steampunk description",
  columns: 2,
  thumbnailImage: { src: steampunkThumbnail2, alt: "steampunk dynasty" },
  path: "/collection/steampunk_dynasty",
  items: products_SD,
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
    {
      spliderData: steampunkDynastySpliderData3,
      displayContainer: SDDisplayContainers[2],
    },
  ],
};
