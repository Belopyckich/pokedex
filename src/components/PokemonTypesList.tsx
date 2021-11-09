import React, {useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import { fetchPokemonTypes } from '../redux/action-creator/pokemonTypes';

const PokemonTypesList: React.FC = () => {
    const {types, error, loading} = useTypedSelector(state => state.pokemonTypes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonTypes())
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {types.map(type =>
                <div key={type.name}>{type.name}</div>
            )}
        </div>
    );
};

export default PokemonTypesList;