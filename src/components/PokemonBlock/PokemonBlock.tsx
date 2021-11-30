import React, {FC, useContext, useEffect} from 'react';
import style from "./PokemonBlock.module.css";
import { PokemonTypesIcons } from '../../images/typeIcons/typeImages';
import { useHistory } from 'react-router-dom';
import { IPokemon, PokemonsActionTypes } from '../../types/pokemons';
import { SearchContext } from '../../context/SearchContext';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
interface PokemonProps {
    pokemon: IPokemon,
}

const PokemonBlock: FC<PokemonProps> = ({pokemon}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {userLikes, setUserLikes} = useContext(AuthContext);

    const {setSearch} = useContext(SearchContext);

    const openPokemon = () => {
        history.push(`/pokemons/${pokemon.name}`);
        setSearch('');
    }

    const likePokemon = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (pokemon.isLike) {
            dispatch({type: PokemonsActionTypes.DEACTIVATE_LIKE, payload: pokemon.name});
            setUserLikes(userLikes.filter(item => item !== pokemon.name));
        }
        else {
            dispatch({type: PokemonsActionTypes.ACTIVATE_LIKE, payload: pokemon.name});
            setUserLikes([...userLikes, pokemon.name]);
        }
    }

    useEffect(() => {
        localStorage.setItem("lovelyPokemons", JSON.stringify(userLikes));
    }, [userLikes])
    
    return (
        <div>
            <div className={style.block} onClick={openPokemon}>
            <div className={pokemon.isLike ? style.heartIcon : `${style.heartIcon} ${style.heartDisabled}`} onClick={likePokemon}></div>
            <img className={style.img} src={Object.values(pokemon?.sprites).find(sprite => sprite !== null)} alt={pokemon?.name}/>
            <div className={style.types}>
                {pokemon?.types.map((type : string) => 
                    <img key={`${type}mini`} className={style.icon}  src={PokemonTypesIcons[type]} alt={type}/>
                )}
            </div>
            <div className={style.name}>{pokemon?.name}</div>
            </div>
        </div>
    );
};

export default PokemonBlock;