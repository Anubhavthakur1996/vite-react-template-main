import { useNavigate } from "react-router";
import { useEffect } from "react";
import Logo from "../../assets/logo.png";
import SplashUI from "./SplashUI";

const Splash: React.FC = () => {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => nav("/home"), 1000);
  }, [nav]);

  const props = {
    Logo,
  };

  return <SplashUI {...props} />;
};

export default Splash;
