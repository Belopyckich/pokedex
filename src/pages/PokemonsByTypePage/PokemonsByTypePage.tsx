import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PokemonBlock from "../../components/PokemonBlock/PokemonBlock";
import Pagination from "../../components/UI/Pagination/Pagination";
import { SearchContext } from "../../context/SearchContext";
import { RootState } from "../../redux/reducers";
import { IPokemonType} from "../../types/pokemons";
import style from "./PokemonsByTypePage.module.css";
import { useSwipeable } from 'react-swipeable';


const PokemonsByTypePage: React.FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const types = useSelector((state: RootState) => state.pokemons.types);

  const history = useHistory();

  const { type, page } = useParams<{ type: string, page: string }>();

  const [pageCount, setPageCount] = useState<number>(1);

  const {limit, setIsLimitActive, setIsSearchBarActive} = useContext(SearchContext);

  const handlers = useSwipeable({
    onSwipedLeft: () => Number(page) !== pageCount ? history.push(`/pokedex/types/${type}/${Number(page) + 1}`) : 0,
    onSwipedRight: () => Number(page) !== 1 ? history.push(`/pokedex/types/${type}/${Number(page) - 1}`) : 0,
  })

  const currentType = types.find((currentType: IPokemonType) => currentType.name === type);

  useEffect(() => {
    setIsLimitActive(true);
    setIsSearchBarActive(false);
    if (currentType) {
      setPageCount(Math.ceil(currentType?.count / limit));
    }
  }, [limit]);

  return (
    <div className={style.pokemonsByType} {...handlers}>
      <div className={style.pokemonsWrapper}>
        {currentType?.pokemons &&
          currentType?.pokemons.map((pokemon, index) =>
              <PokemonBlock
                pokemon={pokemons[pokemon]}
                key={`${pokemons[pokemon]?.id}${currentType}` ?? `${index}${currentType}`}
                onClick = {() => history.push(`/pokedex/types/${currentType.name}/${page}/${pokemons[pokemon].name}`)}
              />
          ).slice((Number(page) - 1) * limit, Number(page) * limit)}
      </div>
      <Pagination pageCount={pageCount}/>
    </div>
  );
};

export default PokemonsByTypePage;
