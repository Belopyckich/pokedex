import { instance } from '../../api/api';
import { PokemonsAction, PokemonsActionTypes } from "../../types/pokemons"
import {Dispatch} from "redux";
interface typeProps {
    name: string,
    url: string
}

export const fetchPokemonTypes = () => {
    return async (dispatch: Dispatch <PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS})
            setTimeout(async () => {
                const response = await instance.get("https://pokeapi.co/api/v2/type");
                let counter = 0;
                dispatch({type: PokemonsActionTypes.FETCH_POKEMONTYPES_SUCCESS,
                      payload: response.data.results.map((type: typeProps) => {
                            counter += 1;
                            return {...type, id: counter}
                      }).slice(0, 18)
                    });
            }, 1000);
        } catch (e) {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONTYPES_ERROR, payload: 'Произошла ошибка загрузки списка покемонов'});
        }
    }
}

export const fetchPokemonsByPage = (id: string, page: number, limit = 20) => {
    return async (dispatch: Dispatch <PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS})
            const response = await instance.get(`https://pokeapi.co/api/v2/type/${id}`);
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_COUNT, payload: response.data.pokemon.length});
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS, payload: 
                      response.data.pokemon.map((item : {pokemon: any}) =>  {
                        return {...item.pokemon}
                      }).slice((page - 1) * limit, page * limit)
                    })
        } catch (e) {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_ERROR, payload: 'Произошла ошибка загрузки списка типов покемонов'});

        }
    }
}