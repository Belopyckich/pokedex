import React, {useEffect, FC, useContext} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useAction } from '../../hooks/useAction';
import style from "./TypesPage.module.css";
import { useHistory } from 'react-router-dom';
import Loading from '../../components/UI/Loading/Loading';
import {PokemonTypesIcons} from "../../images/typeIcons/typeImages";
import { SearchContext } from '../../context/SearchContext';
import Footer from '../../components/UI/Footer/Footer';

const PokemonTypes: FC = () => {
    const loading = useSelector((state: RootState) => state.pokemons.loading);
    const types = useSelector((state: RootState) => state.pokemons.types);
    
    const {fetchTypes} = useAction();

    const {setIsLimitActive, setIsSearchBarActive} = useContext(SearchContext);

    const history = useHistory();

    useEffect(() => {
        setIsSearchBarActive(false);
        setIsLimitActive(false);
        fetchTypes();
    }, [])


    return (
        <div className={style.typesPage}>
            {loading ?
                    <Loading/>
                :   
                        <div className={style.pokemonTypesWrapper}>
                            {types.map(type => 
                                <div style={{padding: '30px'}} key={type.id}>
                                    <img src={PokemonTypesIcons[type.name]} onClick={() => history.push(`types/${type.name}/1`)} alt={`${type.name}main`} className={style.pokemonTypeIcon}/>
                                        <div className={style.pokemonTypeText}>{type.name}</div>
                                </div>
                            )}
                        </div>
            }
            <Footer/>
        </div>
    );
};

export default PokemonTypes;
