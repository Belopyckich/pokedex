import MobileNavigation from "./MobileNavigation";
import Navigation from "./DesktopNavigation";
import style from "./Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import DesktopNavigation from "./DesktopNavigation";

const Navbar = () => {
  const [name, setName] = useState<string | null>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const {
    setSearch,
  } = useContext(SearchContext);
  
  useEffect(() => {
    setName(localStorage.getItem("user"));
  }, [name]);
  return (
    <div style={isOpen ? {borderBottom: 'none'} : {}} className={style.navbar}>
        <NavLink
          to="/pokedex/pokemons/1"
          onClick={() => setSearch("")}
          className={style.userText}
        >
          {name} POKEDEX
        </NavLink>
        <MobileNavigation setIsOpen={setIsOpen} isOpen={isOpen}/>
        <DesktopNavigation/>
    </div>
  );
};

export default Navbar;
