import { Avatar, Button, Card, Carousel, List } from "antd";
import { JSX, ReactNode } from "react";
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
      <Carousel infinite arrows className="!flex-wrap">
        {cardData.map((item) => (
          <Card key={item.id} style={{ width: 300 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSection;
