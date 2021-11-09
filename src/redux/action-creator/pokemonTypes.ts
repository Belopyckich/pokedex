import { PokemonTypesAction, PokemonTypesActionTypes } from "../../types/pokemonTypes"
import {Dispatch} from "redux";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export const fetchPokemonTypes = () => {
    return async (dispatch: Dispatch <PokemonTypesAction>) => {
        try {
            dispatch({type: PokemonTypesActionTypes.FETCH_POKEMONTYPES})
            const response = await instance.get('/type');
            console.log(response.data.results);
            dispatch({type: PokemonTypesActionTypes.FETCH_POKEMONTYPES_SUCCESS, payload: response.data.results});
        } catch (e) {
            dispatch({type: PokemonTypesActionTypes.FETCH_POKEMONTYPES_ERROR, payload: 'Произошла ошибка загрузки списка типов покемонов'});

        }
    }
}