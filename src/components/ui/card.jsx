import { NavLink } from "react-router-dom";
import bgDots from "@/assets/images/card-bg-dots.svg";

export const Card = ({ name, imageSrc, url, color }) => {
  return (
    <NavLink to={url}>
      <div
        className="group rounded-lg border border-solid border-black px-4 py-7 flex justify-end items-center relative shadow-lg bg-no-repeat "
        style={{
          backgroundImage: `url(${bgDots})`,
          backgroundSize: "30%",
          backgroundPosition: "50% -20px",
          backgroundColor: `${color}`,
        }}
      >
        <img
          src={imageSrc}
          alt={name}
          className="absolute -left-2 -top-12 h-[140px]"
        />
        <p className="text-2xl font-bold text-white text-right transition-all group-hover:mr-4">
          {name}
        </p>
      </div>
    </NavLink>
  );
};
