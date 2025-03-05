import { JSX } from "react";
import HomeUI from "./HomeUI";
import { destinations } from "../../data/destinations";
import { packages } from "../../data/packages";
import { adventures } from "../../data/adventure";

const destinationSliderProps = {
  title: {
    partOne: {
      text: "Top Trending",
      highlight: false,
    },
    partTwo: {
      text: "Himachal Holiday",
      highlight: true,
    },
    partThree: {
      text: "Destinations",
      highlight: false,
    },
  },
  cardData: destinations,
  buttonData: { title: "View All Tours", path: "/home" },
  colour: "",
  slides: 3,
  width: "30vw",
  height: "25vw",
};

const packagesSliderProps = {
  title: {
    partOne: {
      text: "Trending Tour",
      highlight: false,
    },
    partTwo: {
      text: "Packages",
      highlight: true,
    },
    partThree: null,
  },
  cardData: packages,
  buttonData: { title: "View All Tours", path: "/home" },
  colour: "primary",
  slides: 4,
  width: null,
  height: "35vh",
};

const adventureSliderProps = {
  cardData: adventures,
  slides: 1,
  width: "100vw",
  height: null,
  title: undefined,
  buttonData: undefined,
  colour: "",
};

const props = {
  destinationSliderProps,
  packagesSliderProps,
  adventureSliderProps,
};

const Home: React.FC = (): JSX.Element => <HomeUI {...props} />;

export default Home;
