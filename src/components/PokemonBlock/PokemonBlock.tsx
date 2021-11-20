import React, {FC, useEffect, useState} from 'react';
import { getPokemonProp } from '../../api/api';
import style from "./PokemonBlock.module.css";
import { PokemonTypesIcons } from '../../images/typeIcons/typeImages';
import { useHistory } from 'react-router-dom';
interface PokemonProps {
    pokemon: {name: string, url: string},
    typeID: string
}
export interface IPokemon {
    img: string,
    types: string[]
}

const PokemonBlock: FC<PokemonProps> = ({pokemon, typeID}) => {
    const [pokemonProperty, setPokemonProperty] = useState<IPokemon>({img: '', types: []});
    const history = useHistory()
    
    useEffect(() => {
        getPokemonProp(pokemon.url, setPokemonProperty);
    }, [])

    return (
        <div className={style.block} onClick={() => history.push(`/type/${typeID}/${pokemon.name}`)}>
            <img className={style.img}src={pokemonProperty.img} alt={pokemon.name}/>
            <div className={style.types}>
                {pokemonProperty.types.map((type : string) => 
                    <img className={style.icon}  src={PokemonTypesIcons[type]} alt={type} key={`${type}mini`}/>
                )}
            </div>
            <div className={style.name}>{pokemon.name}</div>
        </div>
    );
};

export default PokemonBlock;