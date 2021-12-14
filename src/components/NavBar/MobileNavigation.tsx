import NavLinks from './NavLinks';
import style from "./Navbar.module.css";
import "./Navbar.module.css";
import hamburgerOpen from "../../images/NavBar/hamburgerOpen.svg";
import hamburgerClose from "../../images/NavBar/hamburgerClose.svg";
import back from "../../images/NavBar/leftArrow.svg";
import { useHistory } from 'react-router-dom';
import { Transition } from "react-transition-group";

interface MobileNavigationProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileNavigation : React.FC<MobileNavigationProps> = ({isOpen, setIsOpen}) => {
    const history = useHistory();

    return (
        <div className={style.mobileNavigation}>
            <img src={isOpen ? hamburgerClose : hamburgerOpen} alt="hamburger" className={style.hamburger} onClick={() => setIsOpen(!isOpen)}/>
            <img
                style={{display: 'flex'}}
                src={back}
                className={style.back}
                alt="back"
                onClick={() => history.goBack()}
            />
            {isOpen &&<NavLinks className={style.navbarWrapper}/>}
        </div>
    );
};

export default MobileNavigation;