import React, {useEffect, FC, useMemo, useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useAction } from '../../hooks/useAction';
import style from "./TypesPage.module.css";
import { useHistory } from 'react-router-dom';
import Loading from '../../components/UI/Loading/Loading';
import {PokemonTypesIcons} from "../../images/typeIcons/typeImages";
import { IPokemonType } from '../../types/pokemons';

const PokemonTypes: FC = () => {
    const loading = useSelector((state: RootState) => state.pokemons.loading);
    const error = useSelector((state: RootState) => state.pokemons.error);
    const types = useSelector((state: RootState) => state.pokemons.types);

    const {fetchTypes} = useAction();

    const history = useHistory();

    useEffect(() => {
        fetchTypes();
    }, [])

    return (
        <div className={style.typesPage}>
            {loading ?
                <Loading/>
            :   
                error ?
                    <h1>{error}</h1>
                     :
                    <div className={style.pokemonTypesWrapper}>
                        {types.map(type => 
                            <div key={type.name}>
                                <img src={PokemonTypesIcons[type.name]} onClick={() => history.push('/type/' + type.id)} key={type.name} alt={type.name} className={style.pokemonTypeIcon}/>
                                <div className={style.pokemonTypeText}>{type.name}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PokemonTypes;


// const Types = useMemo(() => {
    //   console.log(types);
    //   for(let type in types) {
    //     if(typeof types.type?.name !== 'undefined') {
    //         return (
    //             <div key={types.type?.name}>
    //                 <img src={PokemonTypesIcons[types.type?.name]} onClick={() => history.push('/type/' + types.type)} key={types.type?.name} alt={types.type?.name} className={style.pokemonTypeIcon}/>
    //                 <div className={style.pokemonTypeText}>{types.type?.name}</div>
    //             </div>
    //         )
    //     }
    //  }
    // }, [types])
