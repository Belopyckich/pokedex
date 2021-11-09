import { PokemonTypesReducer } from "./pokemonTypesReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers( {
    pokemonTypes: PokemonTypesReducer
})

export type RootState = ReturnType<typeof rootReducer>