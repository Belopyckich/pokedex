import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonPage = () => {
    const pokemon = useParams();
    console.log(pokemon);
    return (
        <div>
           {pokemon} 
        </div>
    );
};

export default PokemonPage;