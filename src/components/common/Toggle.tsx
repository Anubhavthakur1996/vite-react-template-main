import { JSX, useState } from "react";
import { Space, Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  userThemeSelector,
  useScrollPosition,
  classNames,
} from "../../utils/utils";
import Footer from "./footer/Footer";
import Logo from "../../assets/logo.png";

const Toggle: React.FC = (): JSX.Element => {
  const { mobile } = useSelector((state) => state.base);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const nav = useNavigate();
  const location = useLocation();

  const scrollPosition = useScrollPosition();

  if (!theme) {
    const val = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setTheme(val);
  }

  const setVal = (checked: boolean) => {
    const val = checked ? "dark" : "light";
    localStorage.setItem("theme", val);
    setTheme(val);
    userThemeSelector(val);
  };

  const goTo = (path: string) => {
    nav(path);
  };

  return (
    <div>
      {/* Menu */}
      <div
        className={classNames(
          scrollPosition > 0
            ? "fixed top-0 z-20 w-screen bg-white transition-all duration-300 ease-in shadow"
            : "shadow-none",
          "w-screen z-40 fixed top-0 flex justify-between items-center lg:px-20 px-5 pt-2 transition-all duration-300 ease-out"
        )}
      >
        {/* logo */}
        <div className="">
          <img src={Logo} alt="logo" className="w-25" />
        </div>
        {/* menu items */}
        <div
          className={
            !mobile
              ? classNames(
                  scrollPosition > 0 ? "text-black" : "text-white",
                  "flex justify-center items-center mr-20 font-quicksand font-bold hover:cursor-pointer"
                )
              : classNames(
                  scrollPosition > 0 ? "text-black" : "text-white",
                  "flex justify-center items-center mr-1 font-quicksand font-bold hover:cursor-pointer h-10vw text-sm"
                )
          }
        >
          <span
            className={location?.pathname === "/home" ? "text-buttons" : ""}
            onClick={() => goTo("/home")}
          >
            Home
          </span>
          <span
            className={
              (location?.pathname === "/packages" ? "text-buttons" : "") +
              " mx-5"
            }
            onClick={() => goTo("/packages")}
          >
            Packages
          </span>
          <span
            className={location?.pathname === "/contact" ? "text-buttons" : ""}
            onClick={() => goTo("/contact")}
          >
            Contact
          </span>
        </div>
      </div>

      {/* theme switcher */}
      <Space direction="vertical" className={!mobile ? "fixed top-6 right-10 z-40" : "fixed top-2 right-2 z-40"}>
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          onChange={setVal}
          value={theme === "dark" ? true : false}
        />
      </Space>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Toggle;
