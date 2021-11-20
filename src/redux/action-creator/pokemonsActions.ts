import { instance } from '../../api/api';
import { IPokemonProperty, PokemonsAction, PokemonsActionTypes } from "../../types/pokemons"
import {Dispatch} from "redux";
interface typeProps {
    name: string,
    url: string
}

export const fetchPokemonTypes = () => {
    return async (dispatch: Dispatch <PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_DATA})
            setTimeout(async () => {
                let counter = 0;
                const response = await instance.get("https://pokeapi.co/api/v2/type").then(
                    response => dispatch({type: PokemonsActionTypes.FETCH_TYPES_SUCCESS,
                        payload: response.data.results.map((type: typeProps) => {
                              counter += 1;
                              return {...type, id: counter}
                        }).slice(0, 18)
                    })
                )
            }, 1000);
        } catch (e) {
            dispatch({type: PokemonsActionTypes.FETCH_TYPES_ERROR, payload: 'Произошла ошибка загрузки списка покемонов'});
        }
    }
}

export const fetchPokemonsByPage = (id: string) => {
    return async (dispatch: Dispatch <PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_DATA})
            const response = await instance.get(`https://pokeapi.co/api/v2/type/${id}`);
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_BY_TYPE_SUCCESS, payload: {
                    type: id,
                    pokemons: {
                        pokemons: response.data.pokemon.map((item : {pokemon: IPokemonProperty}) =>  {
                            return item.pokemon
                            })
                        ,
                        count: response.data.pokemon.length
                    }
                }
            })
        } catch (e) {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_BY_TYPE_ERROR, payload: 'Произошла ошибка загрузки списка типов покемонов'});
        }
    }
}


