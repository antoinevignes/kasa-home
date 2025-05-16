import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-[90vw] mx-auto flex justify-between items-center py-10">
      <NavLink to={"/"}>
        <img src="/LOGO.svg" alt="Logo KasaHome" />
      </NavLink>
      <div className="flex items-center gap-4 text-[24px]">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: "#FF6060",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          style={({ isActive }) => ({
            color: "#FF6060",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          A propos
        </NavLink>
      </div>
    </nav>
  );
}
