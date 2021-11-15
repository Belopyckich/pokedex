import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { RootState } from '../../redux/reducers';

interface ParamsProps {
    id: string
}

const PokemonsByTypePage: React.FC = () => {
    const {pokemons} = useSelector((state : RootState) => state.pokemons);
    const {fetchPokemonsByType} = useAction();
    const {id} = useParams<ParamsProps>();

    useEffect(() => {
        fetchPokemonsByType(id);
    }, [])

    return (
        <div>
            {pokemons.map(pokemon => 
                <div key={pokemon.name}>{pokemon.name}</div>
            )}
        </div>
    );
};

export default PokemonsByTypePage;