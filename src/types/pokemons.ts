export interface PokemonsState {
    pokemons: any[],
    types: any[],
    loading: boolean,
    error: null | string
}

export enum PokemonsActionTypes {
    FETCH_POKEMONS = "FETCH_POKEMONS",
    FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS",
    FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR",
    FETCH_POKEMONTYPES = "FETCH_POKEMONTYPES",
    FETCH_POKEMONTYPES_SUCCESS = "FETCH_POKEMONTYPES_SUCCESS",
    FETCH_POKEMONTYPES_ERROR = "FETCH_POKEMONTYPES_ERROR"
}

interface FetchPokemonsAction {
    type: PokemonsActionTypes.FETCH_POKEMONS;
}
interface FetchPokemonsSuccessAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS;
    payload: any[];
}
interface FetchPokemonsErrorAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_ERROR;
    payload: string;
}
interface FetchPokemonTypesAction {
    type: PokemonsActionTypes.FETCH_POKEMONTYPES;
}
interface FetchPokemonTypesSuccessAction {
    type: PokemonsActionTypes.FETCH_POKEMONTYPES_SUCCESS;
    payload: any[];
}
interface FetchPokemonTypesErrorAction {
    type: PokemonsActionTypes.FETCH_POKEMONTYPES_ERROR;
    payload: string;
}

export type PokemonsAction = FetchPokemonsAction | 
                             FetchPokemonsSuccessAction | 
                             FetchPokemonsErrorAction |
                             FetchPokemonTypesAction | 
                             FetchPokemonTypesSuccessAction | 
                             FetchPokemonTypesErrorAction