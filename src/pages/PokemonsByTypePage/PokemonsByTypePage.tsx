import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PokemonBlock from '../../components/PokemonBlock/PokemonBlock';
import Loading from '../../components/UI/Loading/Loading';
import { useAction } from '../../hooks/useAction';
import { RootState } from '../../redux/reducers';
import { createPagesArray } from '../../utils/pagesArray';
import style from "./PokemonsByTypePage.module.css";

interface ParamsProps {
    id: string
}

const PokemonsByTypePage: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);
    const {pokemons, pokemonsCount, loading} = useSelector((state : RootState) => state.pokemons);
    const {fetchPokemonsByPage} = useAction();
    const {id} = useParams<ParamsProps>();
    const history = useHistory();

    useEffect(() => {
        fetchPokemonsByPage(id, page);
        setPages(Math.ceil(pokemonsCount / 20));
    }, [page, pokemonsCount])

    return (
        <div className={style.pokemonsByType}>
            <div className={style.pokemonsWrapper}>
                {pokemons.map(pokemon => 
                    <PokemonBlock pokemon={pokemon} key={pokemon.name}/>
                )}
            </div>
            <div className={style.pagesWrapper}>
                <button className={style.pushLeftArrow} disabled={page === 1} onClick={() => setPage(1)}/>
                <button className={style.leftArrow} disabled={page === 1} onClick={() => setPage(page - 1)}/>
                <div className={style.pageNavigation}>{page}/{pages}</div>
                <button className={style.rightArrow} disabled={page === pages} onClick={() => setPage(page + 1)}/>
                <button className={style.pushRightArrow} disabled={page === pages} onClick={() => setPage(pages)}/>
            </div> 
        </div>
    );
};

export default PokemonsByTypePage;