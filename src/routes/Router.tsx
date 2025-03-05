import { JSX } from "react";
import { Route, Routes } from "react-router";
import Splash from "../components/splash";
import Home from "../components/home";
import Toggle from "../components/common/Toggle";
import Packages from "../components/packages";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route element={<Toggle />}>
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
