import React, {FC, useContext, useEffect} from 'react';
import style from "./PokemonBlock.module.css";
import { PokemonTypesIcons } from '../../images/typeIcons/typeImages';
import { IPokemon, PokemonsActionTypes } from '../../types/pokemons';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
interface PokemonProps {
    pokemon: IPokemon,
    onClick: any
}

const PokemonBlock: FC<PokemonProps> = ({pokemon, onClick}) => {
    const dispatch = useDispatch()
    const {userLikes, setUserLikes} = useContext(AuthContext);

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

    console.log(pokemon.sprites.artwork)

    useEffect(() => {
        localStorage.setItem("lovelyPokemons", JSON.stringify(userLikes));
    }, [userLikes])
    
    return (
        <div>
            <div className={style.block} onClick={onClick}>
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