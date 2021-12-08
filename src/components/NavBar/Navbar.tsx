import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import style from "./Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Navbar = () => {
  const [name, setName] = useState<string | null>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    search,
    setSearch,
  } = useContext(SearchContext);
  
  useEffect(() => {
    setName(localStorage.getItem("user"));
  }, [name]);
  return (
    <div style={isOpen ? {borderBottom: 'none'} : {}} className={style.navbar}>
        <NavLink
          to="/pokemons/1"
          onClick={() => setSearch("")}
          className={style.userText}
        >
          {name} POKEDEX
        </NavLink>
        <MobileNavigation setIsOpen={setIsOpen} isOpen={isOpen}/>
        <Navigation/>
    </div>
  );
};

export default Navbar;
