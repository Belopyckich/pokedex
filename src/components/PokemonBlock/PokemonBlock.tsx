import React, {FC, useEffect, useState} from 'react';
import { getPokemonProp } from '../../api/api';
import style from "./PokemonBlock.module.css";

interface PokemonProps {
    pokemon: {name: string, url: string}
}
export interface IPokemon {
    img: string,
    type: any[]
}

const PokemonBlock: FC<PokemonProps> = ({pokemon}) => {
    const [pokemonProperty, setPokemonProperty] = useState<IPokemon>({img: '', type: []});
    const [isLoad, setIsLoad] = useState<boolean>(false); 
    useEffect(() => {
        setIsLoad(true);
        getPokemonProp(pokemon.url, setPokemonProperty);
        setIsLoad(false);
    }, [])
    console.log(pokemon);
    return (
        <div>
            <img src={pokemonProperty.img} alt={pokemon.name}/>
            {pokemon.name}
        </div>
    );
};

export default PokemonBlock;