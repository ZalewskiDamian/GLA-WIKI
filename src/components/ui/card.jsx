import { NavLink } from "react-router-dom";

export const Card = ({ name, imageSrc, url }) => {
  return (
    <NavLink to={url}>
      <div className="rounded-lg border border-solid border-black px-2 py-5 flex content-start items-center relative bg-[#242424] shadow-lg">
        <img
          src={imageSrc}
          alt={name}
          className="absolute -left-2 -top-12"
        />
        <p className="text-2xl font-bold text-white ml-24">{name}</p>
      </div>
    </NavLink>
  );
};
