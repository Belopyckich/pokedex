import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PokemonBlock from "../../components/PokemonBlock/PokemonBlock";
import Pagination from "../../components/UI/Pagination/Pagination";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { useAction } from "../../hooks/useAction";
import { RootState } from "../../redux/reducers";
import { IPokemonType, PokemonsActionTypes } from "../../types/pokemons";
import style from "./PokemonsByTypePage.module.css";

const PokemonsByTypePage: React.FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const types = useSelector((state: RootState) => state.pokemons.types);

  const { id } = useParams<{ id: string }>();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(1);

  const {userLikes} = useContext(AuthContext);
  const {limit, setIsLimitActive, setIsSearchBarActive} = useContext(SearchContext);

  const currentType = types.find(
    (type: IPokemonType) => type.id.toString() === id
  );

  const { fetchPokemonsByType } = useAction();

  useEffect(() => {
    setIsLimitActive(true);
    setIsSearchBarActive(false);
    fetchPokemonsByType(id, userLikes);
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
              />
            ) : (
              <div></div>
            )
          )
          .slice((currentPage - 1) * limit, currentPage * limit)}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount}/>
    </div>
  );
};

export default PokemonsByTypePage;
