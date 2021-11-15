import { PokemonsAction, PokemonsActionTypes } from "../../types/pokemons"
import {Dispatch} from "redux";
import {instance} from "./axiosConfig";
import { type } from "os";

interface typeProps {
    name: string,
    url: string
}

export const fetchPokemonTypes = () => {
    return async (dispatch: Dispatch <PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS})
            const response = await instance.get('/type');
            let counter = 0;
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONTYPES_SUCCESS,
                      payload: response.data.results.map((type: typeProps) => {
                        counter += 1;
                        return {...type, id: counter}
                    })});
        } catch (e) {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONTYPES_ERROR, payload: 'Произошла ошибка загрузки списка покемонов'});
        }
    }
}

export const fetchPokemonsByType = (id: string) => {
    return async (dispatch: Dispatch <PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS})
            console.log(`/type/${id}`);
            const response = await instance.get(`/type/${id}`);
            console.log(response.data.pokemon);
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS, payload: 
                      response.data.pokemon.map((item : {pokemon: any}) =>  {
                        return {...item.pokemon}
                      })});
        } catch (e) {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_ERROR, payload: 'Произошла ошибка загрузки списка типов покемонов'});

        }
    }
}