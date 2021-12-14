import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { PokemonTypesIcons } from "../../images/typeIcons/typeImages";
import { RootState } from "../../redux/reducers";
import style from "./PokemonPage.module.css";
import weight__icon from "../../images/PokemonPageImages/weight.svg";
import height__icon from "../../images/PokemonPageImages/height.svg";
import { SearchContext } from "../../context/SearchContext";
import Footer from "../../components/UI/Footer/Footer";

const PokemonPage: React.FC = () => {
  const {setIsLimitActive, setIsSearchBarActive} = useContext(SearchContext);

  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const abilities = useSelector((state: RootState) => state.pokemons.abilities);

  const { pokemon } = useParams<{ pokemon: string }>();
   
  const { fetchPokemonAbility } = useAction();

  useEffect(() => {
    setIsLimitActive(false);
    setIsSearchBarActive(false);
    pokemons[pokemon].abilities.forEach((ability) => {
      fetchPokemonAbility(ability.name, ability.url);
    });
  }, []);

  const pokemon__img = Object.values(pokemons[pokemon].sprites).find((sprite, index) => sprite !== null && index !== 0);
  
  return (
    <div className={style.pokemon}>
      <div className={style.info}>
        <div className={style.header}>
          {pokemons[pokemon].name.toUpperCase()}
        </div>
        <div className={style.stats}>
        <div className={style.stat}>
            <div className={style.stat_name}>Attack</div>
            <div className={style.stat_value}>
              {pokemons[pokemon].stats.attack}
            </div>
          </div>
          <div className={style.stat}>
            <div className={style.stat_name}>Defense</div>
            <div className={style.stat_value}>
              {pokemons[pokemon].stats.defense}
            </div>
          </div>
          <div className={style.stat}>
            <div className={style.stat_name}>Hp</div>
            <div className={style.stat_value}>{pokemons[pokemon].stats.hp}</div>
          </div>
          <div className={style.stat}>
            <div className={style.stat_name}>Special Attack</div>
            <div className={style.stat_value}>
              {pokemons[pokemon].stats.specialAttack}
            </div>
          </div>
          <div className={style.stat}>
            <div className={style.stat_name}>Special Defense</div>
            <div className={style.stat_value}>
              {pokemons[pokemon].stats.specialDefense}
            </div>
          </div>
          <div className={style.stat}>
            <div className={style.stat_name}>Speed</div>
            <div className={style.stat_value}>
              {pokemons[pokemon].stats.speed}
            </div>
          </div>
        </div>
          <img
            className={style.img}
            src={pokemon__img}
            alt={`${pokemons[pokemon].name}mainimg`}
          ></img>
        <div className={style.properties}>
          <div className={style.property}>
            <img className={style.propertyIcon} src={weight__icon} alt="weight" />
            <div className={style.propertyText}>{pokemons[pokemon].weight} kg</div>
          </div>
          <div className={style.property}>
            <img className={style.propertyIcon} src={height__icon} alt="height" />
            <div className={style.propertyText}>{pokemons[pokemon].height} m</div>
          </div>
          <div className={style.propertyTypeWrapper}>
            <div className={style.propertyTypeText}>Type</div>
            <div className={style.propertyTypes}>
              {pokemons[pokemon].types.map((type) => (
                <img
                  className={style.propertyIcon}
                  key={`${type}inPokemonPage`}
                  src={PokemonTypesIcons[type]}
                  alt={`pokemon${type}`}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.abilities}>
        {pokemons[pokemon].abilities.map((ability) => (
          <div key={ability.name} className={style.ability}>
            <div className={style.ability_header}>{ability.name}</div>
            <div className={style.ability_description}>
              {abilities[ability.name]}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default PokemonPage;
