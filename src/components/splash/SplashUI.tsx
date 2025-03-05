import { JSX } from "react";

type SplashProps = {
  Logo: string;
};

const SplashUI: React.FC<SplashProps> = ({ Logo }): JSX.Element => (
  <div className="h-screen w-screen flex justify-center items-center bg-primary">
    <img src={Logo} className="animate-pulse h-35" />
  </div>
);

export default SplashUI;
