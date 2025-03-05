import { JSX } from "react";
import SectionOne from "../common/section_one/SectionOne";
import HorizontalSlide from "../common/horizontal_slide/HorizontalSlide";

type SliderProps = {
  title: {
    partOne:
      | {
          text: string;
          highlight: boolean;
        }
      | null
      | undefined;
    partTwo:
      | {
          text: string;
          highlight: boolean;
        }
      | null
      | undefined;
    partThree:
      | {
          text: string;
          highlight: boolean;
        }
      | null
      | undefined;
  };
  cardData: { id: number; title: string; description: string; src: string }[];
  buttonData: { title: string; path: string };
  colour: string;
  slides: number | null | undefined;
  height: string | undefined | null;
  width: string | undefined | null;
};

type HomeUIProps = {
  destinationSliderProps: SliderProps;
  packagesSliderProps: SliderProps;
  adventureSliderProps: SliderProps;
};

const HomeUI: React.FC<HomeUIProps> = ({
  destinationSliderProps,
  packagesSliderProps,
  adventureSliderProps,
}): JSX.Element => (
  <div className="flex flex-col w-max-screen">
    <SectionOne />
    <HorizontalSlide {...destinationSliderProps} />
    <HorizontalSlide {...packagesSliderProps} />
    <HorizontalSlide {...adventureSliderProps} />
  </div>
);

export default HomeUI;
