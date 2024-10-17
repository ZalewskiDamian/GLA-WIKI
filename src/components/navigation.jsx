import { NavLink } from "react-router-dom";
const Navigation = () => {
  const routes = [
    {
      href: `/`,
      label: "Home",
    },
    {
      href: `/marineford`,
      label: "Marineford",
    },
    {
      href: `/skypia`,
      label: "Skypia",
    },
  ];
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 ml-auto">
      {routes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
