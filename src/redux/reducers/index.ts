import {combineReducers} from "redux";
import {PokemonsReducer} from "./pokemonsReducer";
import {reducer as FormReducer} from 'redux-form';

export const rootReducer = combineReducers( {
    pokemons: PokemonsReducer,
    form: FormReducer
})

export type RootState = ReturnType<typeof rootReducer>