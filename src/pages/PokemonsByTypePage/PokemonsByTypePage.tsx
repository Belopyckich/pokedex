import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PokemonBlock from "../../components/PokemonBlock/PokemonBlock";
import Loading from "../../components/UI/Loading/Loading";
import { useAction } from "../../hooks/useAction";
import { RootState } from "../../redux/reducers";
import { IPokemonProperty, IPokemonType } from "../../types/pokemons";
import style from "./PokemonsByTypePage.module.css";

const PokemonsByTypePage: React.FC = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const loading = useSelector((state: RootState) => state.pokemons.loading);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [currentPokemons, setCurrentPokemons] = useState<IPokemonProperty[]>(
    []
  );

  const limit = 20;

  const { fetchPokemonsByPage } = useAction();
  const {id} = useParams<{ id: string }>();

  useEffect(() => {
      console.log(pokemons);
      if(id && pokemons[id]) {
        setPageCount(Math.ceil(pokemons[id].count / 20));
        setCurrentPokemons(pokemons[id].pokemons.slice((currentPage - 1) * limit, currentPage * limit));
      }
  }, [currentPage, pokemons, id]);

  useEffect(() => {
    fetchPokemonsByPage(id);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.pokemonsByType}>
          <div className={style.pokemonsWrapper}>
            {currentPokemons.map((pokemon) => (
              <PokemonBlock pokemon={pokemon} key={pokemon.name} typeID={id}/>
            ))}
          </div>
          <div className={style.pagesWrapper}>
            <div className={style.pagesContainer}>
              <button
                className={
                    currentPage === 1
                    ? `${style.arrowDisable} ${style.pushLeftArrow}`
                    : style.pushLeftArrow
                }
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              />
              <button
                className={
                    currentPage === 1
                    ? `${style.arrowDisable} ${style.leftArrow}`
                    : style.leftArrow
                }
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              <div className={style.pageNavigation}>
                {currentPage}/{pageCount}
              </div>
              <button
                className={
                  currentPage === pageCount
                    ? `${style.arrowDisable} ${style.rightArrow}`
                    : style.rightArrow
                }
                disabled={currentPage === pageCount}
                onClick={() => setCurrentPage(currentPage + 1)}
              />
              <button
                className={
                  currentPage === pageCount
                    ? `${style.arrowDisable} ${style.pushRightArrow}`
                    : style.pushRightArrow
                }
                disabled={currentPage === pageCount}
                onClick={() => setCurrentPage(pageCount)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonsByTypePage;
