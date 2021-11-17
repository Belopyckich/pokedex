import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import style from "./Navbar.module.css";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className={style.navbar}>
      <div className={style.navbarLinks}>
        <NavLink to="/type">О постах</NavLink>
        <button style={{cursor: 'pointer'}} onClick={logout}>Выйти</button>
      </div>
    </div>
  );
};

export default Navbar;
