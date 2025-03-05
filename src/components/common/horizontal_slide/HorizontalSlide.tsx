import { JSX } from "react";
import { Button, Carousel, Card, Col } from "antd";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import "./HorizontalStyle.css";

const { Meta } = Card;

type HorizontalSlideProps = {
  title:
    | {
        partOne: { text: string; highlight: boolean };
        partTwo: { text: string; highlight: boolean };
        partThree: { text: string; highlight: boolean };
      }
    | null
    | undefined;
  cardData: { id: number; title: string; description: string; src: string }[];
  buttonData: { title: string; path: string } | null | undefined;
  colour: string;
  slides: number | null | undefined;
  height: string | undefined | null;
  width: string | undefined | null;
};

const HorizontalSlide: React.FC<HorizontalSlideProps> = ({
  title,
  cardData,
  buttonData,
  colour,
  slides,
  height,
  width,
}): JSX.Element => {
  const nav = useNavigate();
  const { mobile } = useSelector((state) => state.base);

  const goTO = () => {
    if (buttonData?.path) {
      nav(buttonData.path);
    }
  };

  if (slides === 1) {
    return (
      <div
        style={
          colour === "primary"
            ? { background: "#F0F2F5" } // "#F5F5F5"
            : { background: "#FDF5ED" }
        }
        className="flex justify-center items-center w-screen py-10 px-10"
      >
        <Carousel
          className="w-[90vw] flex-wrap"
          arrows
          infinite
          autoplay={{ dotDuration: true }}
          fade
        >
          {cardData.map((card, index) => (
            <img
              key={index}
              alt={card.title}
              src={card.src}
              className="h-[30vw] w-[80vw] rounded-2xl"
            />
          ))}
        </Carousel>
      </div>
    );
  }

  return (
    <div
      style={
        colour === "primary"
          ? { background: "#F0F2F5" } // "#F5F5F5"
          : { background: "#FDF5ED" }
      }
      className="py-10 px-5 w-screen"
    >
      {/* top row */}

      {title?.partOne?.text && (
        <div className="flex lg:flex-row flex-col lg:h-auto h-[20vh] text-center justify-between items-center text-typography font-quicksand lg:text-4xl text-2xl font-bold my-5">
          <div>
            {(Object.keys(title) as Array<keyof typeof title>).map(
              (key, index) => {
                if (title[key]?.highlight) {
                  return (
                    <span key={index} className="text-buttons">
                      {title[key]?.text}{" "}
                    </span>
                  );
                }

                return <span key={index}>{title[key]?.text} </span>;
              }
            )}
          </div>{" "}
          <Button
            onClick={goTO}
            className="hover:!bg-buttons hover:!text-secondary !rounded-full !border-4 !text-[1rem] !p-5 !border-buttons !text-buttons !bg-transparent"
            ghost
          >
            {buttonData?.title}
          </Button>
        </div>
      )}

      {/* Cards */}
      <Carousel
        className="flex-wrap"
        slidesToShow={(slides && !mobile) ? 4 : 1}
        arrows
        infinite
        autoplay
        draggable
      >
        {cardData.map((card, index) => {
          return (
            <Col key={index} span={8}>
              <Card
                key={card.id}
                hoverable
                cover={
                  <img
                    alt={card.title}
                    src={card.src}
                    style={
                      !mobile
                        ? (slides ?? 0) >= 4
                          ? { height: "20vh" }
                          : { height: "auto" }
                        : { height: "auto" }
                    }
                  />
                }
                style={
                  !mobile
                    ? {
                        height: height ? height : "30vh",
                        width: width ? width : "20vw",
                      }
                    : { width: 350 }
                }
                className="m-10"
              >
                {card?.title && (
                  <Meta
                    className="text-primary font-quicksand text-center"
                    title={card.title}
                    description={card.description}
                  />
                )}
              </Card>
            </Col>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HorizontalSlide;
