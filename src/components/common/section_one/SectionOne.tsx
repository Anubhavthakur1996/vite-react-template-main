import { JSX } from "react";
import React from "react";
import { FaComments } from "react-icons/fa6";
import { Button } from "antd";
import HoliadayForm from "../HolidayForm";
import Iso from "../../../assets/iso.png";
import Ratings from "../../../assets/ratings.png";
import Secure from "../../../assets/secure.png";
import "./SectionStyle.css";

const SectionOne: React.FC = (): JSX.Element => {
  return (
    <>
      {/* mask */}
      <div className="lg:h-[85vh] h-[150vh] section-mask absolute top-0 left-0 w-screen"></div>
      {/* container */}
      <div className="lg:h-[85vh] h-[150vh] w-screen py-15 lg:px-25 flex lg:flex-row flex-col justify-evenly items-center section-one">
        {/* Form Section */}
        <HoliadayForm />
        {/* Expert Section */}
        <div className="z-10 flex flex-col justify-center items-center lg:w-4/6 lg:py-40 py-5 lg:pl-20 px-5 text-center">
          <h1 className="!text-white lg:!text-5xl !text-2xl font-bold mb-6">
            Get The <span className="text-buttons">Best Travel</span> Packages !
          </h1>
          <div className="!text-white lg:!text-xl !text-md font-bold mb-4">
            Submit a Request &{" "}
            <span className="text-buttons">Get Customized Quotes for</span>
          </div>
          <h1 className="!text-white lg:!text-5xl !text-2xl font-bold">
            Himachal Tour Package
          </h1>
          <div className="flex justify-center items-center my-5">
            <img className="lg:w-1/8 w-1/6" src={Secure} alt="secure"></img>
            <img
              className="mx-5 lg:w-1/8 w-1/6"
              src={Ratings}
              alt="ratings"
            ></img>
            <img className="lg:w-1/8 w-1/6" src={Iso} alt="iso"></img>
          </div>
          {/* <Typography.Link>
            
          </Typography.Link> */}
          <Button
            className="!bg-buttons !py-8 !px-10 !rounded-full hover:!border-4 hover:!bg-transparent active:!border-4 active:!bg-transparent"
            ghost
          >
            <FaComments className="text-4xl" />
            <span className="text-2xl">Talk To Expert</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
