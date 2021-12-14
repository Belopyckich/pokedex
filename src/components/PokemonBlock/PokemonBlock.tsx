import React, {FC, useContext, useEffect} from 'react';
import style from "./PokemonBlock.module.css";
import { PokemonTypesIcons } from '../../images/typeIcons/typeImages';
import { IPokemon, PokemonsActionTypes } from '../../types/pokemons';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import heart__disabled from "../../images/PokemonPageImages/heart__disabled.svg";
import heart__enabled from "../../images/PokemonPageImages/heart__enabled.svg";


interface PokemonProps {
    pokemon: IPokemon,
    onClick: any
}

const PokemonBlock: FC<PokemonProps> = ({pokemon, onClick}) => {
    const dispatch = useDispatch()
    const {userLikes, setUserLikes} = useContext(AuthContext);
    const pokemon__icon = Object.values(pokemon?.sprites).find(sprite => sprite !== null);

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
            <div className={style.block} onClick={onClick}>
            <img src={pokemon.isLike ? heart__enabled : heart__disabled} className={style.heart__img} onClick={likePokemon} alt="heart"></img>
            <img className={style.img} src={pokemon__icon} alt={pokemon?.name}/>
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