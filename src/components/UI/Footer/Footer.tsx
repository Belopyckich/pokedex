import React from 'react';
import style from "./Footer.module.css";
import reactIcon from "../../../images/Footer/react.svg";
import axiosIcon from "../../../images/Footer/axios.svg";
import reduxIcon from "../../../images/Footer/redux.svg";
import pokeapi from "../../../images/Footer/pokeapi.png";
import pikachu from '../../../images/Footer/pikachu.svg';
import wiggly from '../../../images/Footer/wiggly.png'

const Footer : React.FC = () => {
    return (
        <div className={style.myFooter}>
            <img src={pikachu} className={style.myPikachu} alt='pikachu'/>
            <img src={wiggly} className={style.myWiggly} alt='wiggly'/>
            <div className={style.myFooter__header}>SITE WAS CREATED</div>
            <div className={style.myFooter__wrapper}>
                <div className={style.myFooter__component}>
                    <div className={style.component__header}>IN</div>
                    <div className={style.component__wrapper}>
                        <div className={style.component__icon__wrapper}>
                            <img className={style.component__icon} src={reactIcon} alt="react"></img>
                            <div>REACT</div>
                        </div>
                        <div className={style.component__icon__wrapper}>
                            <img className={style.component__icon} src={reduxIcon} alt="redux"></img>
                            <div>REDUX</div>
                        </div>
                        <div className={style.component__icon__wrapper}>
                            <img className={style.component__icon} src={axiosIcon} alt="axios"></img>
                            <div>AXIOS</div>
                        </div>
                    </div>
                </div>
                <div className={style.myFooter__component}>
                    <div className={style.component__header}>WITH</div>
                    <img className={style.component__pokeapi__icon} src={pokeapi} alt="pokeapi"></img>
                </div>
            </div>
        </div>
    );
};

export default Footer;