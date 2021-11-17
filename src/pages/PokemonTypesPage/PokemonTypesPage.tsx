import React, {useEffect, FC} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useAction } from '../../hooks/useAction';
import style from "./PokemonTypesPage.module.css";
import { useHistory } from 'react-router-dom';
import Loading from '../../components/UI/Loading/Loading';
import {PokemonTypesIcons} from "../../images/typeIcons/typeImages";

export interface IPokemonType {
    name: string
    url: string,
    id: string
}

const PokemonTypes: FC = () => {
    const {loading, error, types} = useSelector((state: RootState) => state.pokemons);
    const {fetchPokemonTypes} = useAction();
    const history = useHistory();

    useEffect(() => {
        fetchPokemonTypes();
    }, [])

    return (
        <div className={style.typesPage}>
            {loading ?
                <Loading isLoad={loading}/>
            :   
                error ?
                     <h1>{error}</h1>
                     :
                    <div className={style.pokemonTypesWrapper}>
                        {types.map((type : IPokemonType) => 
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