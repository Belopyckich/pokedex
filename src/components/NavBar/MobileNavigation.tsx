import React, { useContext, useState } from 'react';
import NavLinks from './NavLinks';
import style from "./Navbar.module.css";
import hamburgerOpen from "../../images/NavBar/hamburgerOpen.svg";
import hamburgerClose from "../../images/NavBar/hamburgerClose.svg";
import { AuthContext } from '../../context/AuthContext';
import back from "../../images/NavBar/leftArrow.svg";
import exit from "../../images/NavBar/exit.svg";
import { useHistory } from 'react-router-dom';

interface MobileNavigationProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileNavigation : React.FC<MobileNavigationProps> = ({isOpen, setIsOpen}) => {
    
    const history = useHistory();
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
      }

    return (
        <div className={style.mobileNavigation}>
            <img src={isOpen ? hamburgerClose : hamburgerOpen} alt="hamburger" className={style.hamburger} onClick={() => setIsOpen(!isOpen)}/>
            <img style={{display: 'flex'}} src={exit} className={style.exit} onClick={logout} alt="exit" />
            <img
                style={{display: 'flex'}}
                src={back}
                className={style.back}
                alt="back"
                onClick={() => history.goBack()}
            />
            {isOpen && <NavLinks/>}
        </div>
    );
};

export default MobileNavigation;