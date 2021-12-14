import NavLinks from './NavLinks';
import style from "./Navbar.module.css";
import hamburgerOpen from "../../images/NavBar/hamburgerOpen.svg";
import hamburgerClose from "../../images/NavBar/hamburgerClose.svg";
import back from "../../images/NavBar/leftArrow.svg";
import { useHistory } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { useState } from 'react';

interface MobileNavigationProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, setIsOpen }) => {
    const history = useHistory();

    return (
        <div className={style.mobileNavigation}>
            <CSSTransition
                in={isOpen}
                timeout={1000}
                classNames={{
                    enterActive: style["hamburgerEnterActive"],
                    exitActive: style["hamburgerExitActive"],
                }}
            >
                <img 
                src={isOpen ? hamburgerClose : hamburgerOpen} 
                alt="hamburger"
                className={style.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                />
            </CSSTransition>

            <img
                style={{ display: 'flex' }}
                src={back}
                className={style.back}
                alt="back"
                onClick={() => history.goBack()}
            />

            <CSSTransition
                in={isOpen}
                timeout={1000}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enterActive: style["navbarWrapperEnterActive"],
                    enterDone: style["navbarWrapperEnterDone"],
                    exitActive: style["navbarWrapperExitActive"],
                    exitDone: style["navbarWrapperExitDone"]
                }}
            >
                <NavLinks className={style.navbarWrapper} />
            </CSSTransition>
        </div>
    );
};

export default MobileNavigation;