import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonBlock from "../../components/PokemonBlock/PokemonBlock";
import Footer from "../../components/UI/Footer/Footer";
import Pagination from "../../components/UI/Pagination/Pagination";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { useAction } from "../../hooks/useAction";
import { RootState } from "../../redux/reducers";
import errorImage from "../../images/Error/psyduck.svg";
import style from "./SearchPage.module.css";
import Loading from "../../components/UI/Loading/Loading";
import { IPokemon, PokemonsActionTypes } from "../../types/pokemons";
import {throttle, debounce} from "lodash";
import { getPokemonsBySelectedSort } from "../../utils/getPokemonsBySelectedSort";

const SearchPage = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const loading = useSelector((state: RootState) => state.pokemons.loading);
  const pokemonsCount = useSelector((state: RootState) => state.pokemons.pokemonsCount);

  const [searchCurrentPage, setSearchCurrentPage] = useState(1);
  const [searchPageCount, setSearchPageCount] = useState<number>(1);
  const [isPageEmpty, setIsPageEmpty] = useState<boolean>(false);
  const [currentPokemons, setCurrentPokemons] = useState<IPokemon[]>([]);

  const { userLikes } = useContext(AuthContext);
  const {
    search,
    limit,
    setIsSearchBarActive,
    setIsLimitActive,
    selectedSort,
  } = useContext(SearchContext);

  const { fetchPokemons, fetchPokemonsCount } = useAction();

  useEffect(() => {
    fetchPokemonsCount();
    setIsLimitActive(true);
    setIsSearchBarActive(true);
  }, []);

  useEffect(() => {
    fetchPokemons(userLikes, pokemonsCount);
  }, [pokemonsCount])

  useEffect(() => {
    setSearchCurrentPage(1);
    debouncedPokemons();
  }, [loading, selectedSort, search, limit] )

  const debouncedPokemons = debounce(async() => {
      const {sortedPokemons, sortedPokemonsCount} = getPokemonsBySelectedSort(
      Object.values(pokemons).filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())),
      selectedSort
    )
    setCurrentPokemons(sortedPokemons);
    sortedPokemonsCount > 0 ? setIsPageEmpty(false) : setIsPageEmpty(true);
    setSearchPageCount(Math.ceil(sortedPokemonsCount / limit));
  }, 1000)





  if (loading) {
    return (
      <div className={style.search}>
        <Loading />
      </div>
    );
  }

  if (isPageEmpty) {
    return (
      <div className={style.search}>
          <div className={style.errorWrapper}>
            <img
              className={style.errorImage}
              src={errorImage}
              alt="errorImage"
            />
            <div className={style.errorMessage}>NO POKEMON MATCHED YOUR SEARCH</div>
          </div>
          {searchPageCount > 1 ? (
          <Pagination
            currentPage={searchCurrentPage}
            setCurrentPage={setSearchCurrentPage}
            pageCount={searchPageCount}
          />
          ) : (
          <Footer />
          )}
      </div>
    )
  } else {
    return (
      <div className={style.search}>
          <div className={style.searchWrapper}>
            {currentPokemons.map((pokemon: IPokemon) => (
                <PokemonBlock pokemon={pokemon} key={pokemon.id}></PokemonBlock>
              ))
              .slice(
                (searchCurrentPage - 1) * limit,
                searchCurrentPage * limit
              )}
          </div>
        {searchPageCount > 1 ? (
          <Pagination
            currentPage={searchCurrentPage}
            setCurrentPage={setSearchCurrentPage}
            pageCount={searchPageCount}
          />
        ) : (
          <Footer />
        )}
      </div>
    )
  }
}

export default SearchPage;
