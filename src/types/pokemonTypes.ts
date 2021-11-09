export interface PokemonTypesState {
    types: any[];
    loading: boolean;
    error: null | string;
}

export enum PokemonTypesActionTypes {
    FETCH_POKEMONTYPES = "FETCH_POKEMONTYPES",
    FETCH_POKEMONTYPES_SUCCESS = "FETCH_POKEMONTYPES_SUCCESS",
    FETCH_POKEMONTYPES_ERROR = "FETCH_POKEMONTYPES_ERROR"
}

interface FetchPokemonTypesAction {
    type: PokemonTypesActionTypes.FETCH_POKEMONTYPES;
}
interface FetchPokemonTypesSuccessAction {
    type: PokemonTypesActionTypes.FETCH_POKEMONTYPES_SUCCESS;
    payload: any[];
}
interface FetchPokemonTypesErrorAction {
    type: PokemonTypesActionTypes.FETCH_POKEMONTYPES_ERROR;
    payload: string;
}

export type PokemonTypesAction = FetchPokemonTypesAction | FetchPokemonTypesSuccessAction | FetchPokemonTypesErrorAction
