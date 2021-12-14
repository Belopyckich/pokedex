import NavLinks from './NavLinks';
import style from "./Navbar.module.css";

const DesktopNavigation = () => {
    return (
        <div className={style.navigation}>
            <NavLinks className={style.navbarWrapper}/>
        </div>
    );
};

export default DesktopNavigation;