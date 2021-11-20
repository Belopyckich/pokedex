export interface IPokemonProperty {
    name: string,
    url: string
}
export interface IPokemonType {
    name: string
    url: string,
    id: string
}

export interface IPokemonTypeProperty {
    pokemons: IPokemonProperty[],
    count: number
}
export interface PokemonsState {
    types: IPokemonType[],
    pokemons: { [type: string] : IPokemonTypeProperty},
    loading: boolean,
    error: null | string,
    pokemonsCount: number
}

export enum PokemonsActionTypes {
    FETCH_DATA = "FETCH_DATA",
    FETCH_POKEMONS_BY_TYPE_SUCCESS = "FETCH_POKEMONS_BY_TYPE_SUCCESS",
    FETCH_POKEMONS_BY_TYPE_ERROR = "FETCH_POKEMONS_BY_TYPE_ERROR",
    FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS",
    FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
    FETCH_POKEMONS_COUNT = "FETCH_POKEMONS_COUNT",
}

interface FetchPokemonsByTypeAction {
    type: PokemonsActionTypes.FETCH_DATA;
}
interface FetchPokemonsByTypeSuccessAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_BY_TYPE_SUCCESS;
    payload: {type: string, pokemons: IPokemonTypeProperty};
}
interface FetchPokemonsByTypeErrorAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_BY_TYPE_ERROR;
    payload: string;
}
interface FetchTypesSuccessAction {
    type: PokemonsActionTypes.FETCH_TYPES_SUCCESS;
    payload: IPokemonType[];
}
interface FetchTypesErrorAction {
    type: PokemonsActionTypes.FETCH_TYPES_ERROR;
    payload: string;
}
interface FetchPokemonsCountAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_COUNT;
    payload: number;
}

export type PokemonsAction = FetchPokemonsByTypeAction | 
                             FetchPokemonsByTypeSuccessAction | 
                             FetchPokemonsByTypeErrorAction |
                             FetchTypesSuccessAction | 
                             FetchTypesErrorAction |
                             FetchPokemonsCountAction