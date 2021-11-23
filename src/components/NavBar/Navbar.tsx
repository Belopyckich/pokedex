import React, {SetStateAction, useContext, useEffect, useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [name, setName] = useState<string | null>('');
  const {setIsAuth} = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    setName(localStorage.getItem('user'));
  }, [name])

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
  }
  return (
    <div className={style.navbar}>
      <div className={style.navbarLinks}>
        <div className={style.userText}>{name} POKEDEX</div>
        <button onClick={() => history.goBack()}>Назад</button>
        <NavLink to="/type">О постах</NavLink>
        <button style={{cursor: 'pointer'}} onClick={logout}>Выйти</button>
      </div>
    </div>
  );
};

export default Navbar;
