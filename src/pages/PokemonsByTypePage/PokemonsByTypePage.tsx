import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PokemonBlock from "../../components/PokemonBlock/PokemonBlock";
import Pagination from "../../components/UI/Pagination/Pagination";
import { SearchContext } from "../../context/SearchContext";
import { RootState } from "../../redux/reducers";
import { IPokemonType} from "../../types/pokemons";
import style from "./PokemonsByTypePage.module.css";

const PokemonsByTypePage: React.FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const types = useSelector((state: RootState) => state.pokemons.types);

  const history = useHistory();

  const { type, page } = useParams<{ type: string, page: string }>();

  const [pageCount, setPageCount] = useState<number>(1);

  const {limit, setIsLimitActive, setIsSearchBarActive, searchBy} = useContext(SearchContext);

  const currentType = types.find((currentType: IPokemonType) => currentType.name === type);

  useEffect(() => {
    setIsLimitActive(true);
    setIsSearchBarActive(false);
    if (currentType) {
      setPageCount(Math.ceil(currentType?.count / limit));
    }
  }, [limit]);

  return (
    <div className={style.pokemonsByType}>
      <div className={style.pokemonsWrapper}>
        {currentType?.pokemons
          .map((pokemon, index) =>
            pokemons[pokemon] ? (
              <PokemonBlock
                pokemon={pokemons[pokemon]}
                key={`${pokemons[pokemon]?.id}${currentType}` ?? `${index}${currentType}`}
                onClick = {() => history.push(`/types/${currentType.name}/${page}/${pokemons[pokemon].name}`)}
              />
            ) : (
              <div></div>
            )
          )
          .slice((Number(page) - 1) * limit, Number(page) * limit)}
      </div>
      <Pagination pageCount={pageCount}/>
    </div>
  );
};

export default PokemonsByTypePage;
