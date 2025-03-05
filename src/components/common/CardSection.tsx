import { Avatar, Button, Card, Carousel, Col } from "antd";
import { JSX, ReactNode } from "react";
import { useSelector } from "react-redux";
import {
  FaComments,
  FaBuilding,
  FaCar,
  FaBinoculars,
  FaLocationDot,
} from "react-icons/fa6";

const { Meta } = Card;

type CardSectionProps = {
  titleData:
    | {
        partOne: { text: string; highlight: boolean };
        partTwo: { text: string; highlight: boolean };
        partThree: { text: string; highlight: boolean };
        decription: string | null | undefined;
      }
    | null
    | undefined;
  cardData: {
    comment: ReactNode;
    name: ReactNode;
    city: ReactNode;
    address: ReactNode;
    duration: ReactNode;
    id: number;
    title: string;
    description: string;
    src: string;
  }[];
  type: number;
};

const CardSection: React.FC<CardSectionProps> = ({
  titleData,
  cardData,
  type,
}): JSX.Element => {
  const { mobile } = useSelector((state) => state.base);
  if (type === 1) {
    return (
      <div className="flex justify-evenly items-center flex-col bg-back-yellow">
        {/* title */}
        {titleData?.partOne?.text && (
          <div className="flex lg:flex-row flex-col lg:h-auto h-[20vh] text-center justify-between items-center text-typography font-quicksand lg:text-4xl text-2xl font-bold my-5">
            <div>
              {(Object.keys(titleData) as Array<keyof typeof titleData>).map(
                (key, index) => {
                  if (
                    typeof titleData[key] === "object" &&
                    titleData[key]?.highlight
                  ) {
                    return (
                      <span key={index} className="text-buttons">
                        {typeof titleData[key] === "object" &&
                          titleData[key]?.text}{" "}
                      </span>
                    );
                  }

                  return (
                    <span key={index}>
                      {typeof titleData[key] === "object"
                        ? titleData[key]?.text
                        : titleData[key]}{" "}
                    </span>
                  );
                }
              )}
            </div>{" "}
          </div>
        )}

        {/* CArds */}

        <div className="w-screen flex justify-evenly items-center flex-wrap">
          {cardData.map((item) => (
            <Card
              key={item.id}
              hoverable
              title={
                <span className="text-buttons text-xl font-bold">
                  {item?.duration}
                </span>
              }
              style={{ width: 300 }}
              className="!m-5 !font-quicksand"
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button className="!text-buttons">Price On Request</Button>,
                <Button
                  className="!text-buttons pulse"
                  icon={<FaComments className="text-xl" />}
                >
                  Get Quotes
                </Button>,
              ]}
            >
              <Meta
                className="!my-5"
                title={item?.title}
                description={
                  <span className="flex justify-start items-center">
                    <FaLocationDot className="text-buttons mr-5" />
                    {item?.address}
                  </span>
                }
              />
              <div className="flex justify-evenly flex-wrap">
                <div className="flex flex-col justify-between items-center">
                  <FaBuilding className="text-buttons" />

                  <b>Hotel</b>
                </div>

                <div className="flex flex-col justify-between items-center">
                  <FaCar className="text-buttons" />

                  <b>cab</b>
                </div>

                <div className="flex flex-col justify-between items-center">
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                  <b>meals</b>
                </div>

                <div className="flex flex-col justify-between items-center">
                  <FaBinoculars className="text-buttons" />
                  <b>sightseeing</b>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-evenly items-center flex-col bg-back-yellow">
      {titleData?.partOne?.text && (
        <div className="flex lg:flex-row flex-col lg:h-auto h-[20vh] text-center justify-between items-center text-typography font-quicksand lg:text-4xl text-2xl font-bold my-5">
          <div>
            {(Object.keys(titleData) as Array<keyof typeof titleData>).map(
              (key, index) => {
                if (
                  typeof titleData[key] === "object" &&
                  titleData[key]?.highlight
                ) {
                  return (
                    <span key={index} className="text-buttons">
                      {typeof titleData[key] === "object" &&
                        titleData[key]?.text}{" "}
                    </span>
                  );
                }

                if (key === "description") {
                  return (
                    <div key={index}>
                      <br />
                      <b className="text-[1rem]">{titleData[key]}</b>
                    </div>
                  );
                }

                return (
                  <span key={index}>
                    {typeof titleData[key] === "object"
                      ? titleData[key]?.text
                      : titleData[key]}{" "}
                  </span>
                );
              }
            )}
          </div>{" "}
        </div>
      )}
      <div className="flex justify-center items-center">
        <Carousel
          slidesToShow={!mobile ? 4 : 1}
          infinite
          autoplay
          draggable
          arrows
          className="!flex-wrap flex font-quicksand w-[95vw]"
        >
          {cardData.map((item) => (
            <Col key={item?.id} span={8}>
              <Card
                key={item.id}
                style={!mobile ? { width: 300 } : { width: 350 }}
                hoverable
              >
                {/* <Meta title={item?.comment} /> */}
                <div className="text-base mb-10">{item?.comment}</div>
                <Meta
                  className="flex flex-col !justify-center items-center"
                  avatar={<Avatar size={100} src={item.src} />}
                />
                {/* name and city */}
                <div className="flex flex-col justify-evenly items-center font-quicksand mt-5">
                  {/* name */}
                  <div className="text-xl font-bold text-buttons">
                    {item?.name}
                  </div>
                  {/* city */}
                  <div className="text-base font-500">{item?.city}</div>
                </div>
              </Card>
            </Col>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardSection;
