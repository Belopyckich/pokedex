import React, {FC} from 'react';
import style from "./PokemonBlock.module.css";
import { PokemonTypesIcons } from '../../images/typeIcons/typeImages';
import { useHistory } from 'react-router-dom';
import { IPokemon } from '../../types/pokemons';
interface PokemonProps {
    pokemon: IPokemon,
    typeID: string
}

const PokemonBlock: FC<PokemonProps> = ({pokemon, typeID}) => {
    const history = useHistory()

    return (
        <div className={style.block} onClick={() => history.push(`/type/${typeID}/${pokemon.name}`)}>
            <img className={style.img}src={pokemon?.sprites.icon} alt={pokemon?.name}/>
            <div className={style.types}>
                {pokemon?.types.map((type : string) => 
                    <img className={style.icon}  src={PokemonTypesIcons[type]} alt={type} key={`${type}mini`}/>
                )}
            </div>
            <div className={style.name}>{pokemon?.name}</div>
        </div>
    );
};

export default PokemonBlock;