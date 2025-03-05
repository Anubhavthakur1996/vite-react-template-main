import { JSX } from "react";
import Logo from "../../../assets/logo.png";
import "./Footer.css";

const Footer: React.FC = (): JSX.Element => {
  return (
    // container
    <div className="footer-app lg:px-10 lg:pt-10 font-quicksand font-bold">
      {/* Row One */}
      <div className="flex px-10 py-5 lg:flex-row flex-col">
        {/* Left Side */}
        <div className="flex flex-col items-start lg:w-1/3 pr-15">
          <img src={Logo} alt="logo" className="w-38" />
          <p className="text-[0.875rem]">
            We work pro-actively to provide an incredible experience in every
            single trip we create, so you can have memories worth taking home.
          </p>
        </div>
        <br />
        <br />
        {/* Right Side */}
        <div className="flex lg:flex-row flex-col lg:w-2/3">
          <div className="flex-1 pr-15">
            {/* heading */}
            <div className="text-[1.25rem]">Contact Info </div>
            <br />
            <p className="text-[0.875rem]">
              OPPOSITE BARFANI MANDIR MARKET, SHOP NO 2, NH- 44, DESHMESH
              COLONY, NALWA BRIDGE, PATHANKOT, Pathankot, Punjab, 145001
            </p>
            <br />
            <p className="text-[0.875rem]">
              +91- 7087875272 info@himachaltourism.info
            </p>
          </div>
          <br />
          <br />
          <div className="flex-1">
            {/* heading */}
            <div className="text-[1.25rem]">Support & Help</div>
            <br />
            <p className="text-[0.875rem]">
              <li>Home</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Contact Us</li>
            </p>
            <br />
          </div>
          <br />
          <br />
          <div className="flex-1">
            <div className="text-[1.25rem]">Follow with us</div>
            <br />
            <p className="text-[0.875rem]">Follow us social media platforms</p>
          </div>
        </div>
      </div>

      {/* Row Two */}
      <div className="flex justify-center items-center text-center font-quicksand py-5 border-t-1">
        Copyright © 2022 -2023 HimachalTourism.Info. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
