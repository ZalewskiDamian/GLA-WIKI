import { NavLink } from "react-router-dom";
import Navigation from "./navigation";
import logo from "@/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="border-b mb-8">
      <div className="flex items-center container max-w-[1280px] mx-auto px-4">
        <NavLink to="/">
          <div className="flex items-center justify-start">
            <img src={logo} alt="logo" className="w-14" />
            <p className="text-lg font-medium">GLA - Wiki</p>
          </div>
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
