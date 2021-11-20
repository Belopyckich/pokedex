import React from 'react';
import style from "./Loading.module.css";
import pokedex from "../../../images/Loading/pokedex.png"
import pokedexLeft from "../../../images/Loading/left-pokedex-display.png";
import pokedexRight from "../../../images/Loading/right-pokedex-display.png";

const Loading: React.FC = () => {
    return (
        <div className={style.loadingWrapper}>
            <img className={style.pokedex} src={pokedex} alt="pokedexLoading"/>
            <img className={style.leftPokedox} src={pokedexLeft} alt="pokedexLeft"/>
            <img className={style.rightPokedox} src={pokedexRight} alt="pokedexRight"/>
        </div>
    );
};

export default Loading;