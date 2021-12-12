import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import PokemonBlock from "../../components/PokemonBlock/PokemonBlock";
import Footer from "../../components/UI/Footer/Footer";
import Pagination from "../../components/UI/Pagination/Pagination";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { useAction } from "../../hooks/useAction";
import { RootState } from "../../redux/reducers";
import style from "./SearchPage.module.css";
import Loading from "../../components/UI/Loading/Loading";
import { IPokemon } from "../../types/pokemons";
import { getPokemonsBySelectedSort } from "../../utils/getPokemonsBySelectedSort";
import { useHistory, useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import EmptyPage from "./EmptyPage";

const SearchPage: React.FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const loading = useSelector((state: RootState) => state.pokemons.loading);

  const {page} = useParams<{ searchBy: string; page: string }>();

  const history = useHistory();

  const [pageCount, setPageCount] = useState<number>(1);
  const [isPageEmpty, setIsPageEmpty] = useState<boolean>(false);
  const [currentPokemons, setCurrentPokemons] = useState<IPokemon[]>([]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      Number(page) !== pageCount
        ? history.push(`/pokemons/${Number(page) + 1}`)
        : 0,
    onSwipedRight: () =>
      Number(page) !== 1 ? history.push(`/pokemons/${Number(page) - 1}`) : 0,
  });

  const { userLikes } = useContext(AuthContext);
  const {
    search,
    limit,
    setIsSearchBarActive,
    setIsLimitActive,
    selectedSort,
  } = useContext(SearchContext);

  const { fetchPokemons } = useAction();

  useEffect(() => {
    fetchPokemons(userLikes);
    setIsLimitActive(true);
    setIsSearchBarActive(true);
  }, []);

  useEffect(() => {
    const { sortedPokemons, sortedPokemonsCount } = getPokemonsBySelectedSort(
      Object.values(pokemons).filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      ),
      selectedSort
    );
    setCurrentPokemons(sortedPokemons);
    sortedPokemonsCount > 0 ? setIsPageEmpty(false) : setIsPageEmpty(true);
    setPageCount(Math.ceil(sortedPokemonsCount / limit));
  }, [loading, selectedSort, search, limit, pokemons]);

  return (
    <div className={style.search}>
      {loading 
      ? <Loading/>
      :
      isPageEmpty
      ? <EmptyPage/>
      : 
      <div {...handlers}>
        <div className={style.searchWrapper}>
          {currentPokemons
            .map((pokemon: IPokemon) => (
              <PokemonBlock
                pokemon={pokemon}
                key={pokemon.id}
                onClick={() =>
                  history.push(`/pokemons/${page}/${pokemon.name}`)
                }
              />
            ))
            .slice((Number(page) - 1) * limit, Number(page) * limit)}
        </div>
        {pageCount > 1 ? <Pagination pageCount={pageCount} /> : <Footer />}
      </div>
      }
    </div>
  )
}
export default SearchPage;
