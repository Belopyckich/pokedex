import React from 'react';
import NavLinks from './NavLinks';
import style from "./Navbar.module.css";

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <NavLinks/>
        </div>
    );
};

export default Navigation;