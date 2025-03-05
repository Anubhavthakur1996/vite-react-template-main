import { JSX } from "react";
import PackagesUI from "./PackagesUI";
import { topSelling } from "../../data/topSelling";
import { customers } from "../../data/customers";

const Packages: React.FC = (): JSX.Element => {
  const toggleRead = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots && moreText && btnText) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
      }
    }
  };

  const titleData = {
    partOne: { text: "Top Selling", highlight: false },
    partTwo: { text: "Himachal Packages", highlight: true },
    partThree: { text: "", highlight: false },
    description: null,
  };

  const titleDataTwo = {
    partOne: { text: "Over 33k+", highlight: false },
    partTwo: { text: "Happy Customers", highlight: true },
    partThree: { text: "", highlight: false },
    description: "Book Your Next Tour Plan with Us",
  };

  const props = { toggleRead, topSelling, titleData, titleDataTwo, customers };

  return <PackagesUI {...props} />;
};

export default Packages;
