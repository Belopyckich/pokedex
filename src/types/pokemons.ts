export interface IPokemon {
    name: string,
    height: number,
    weight: number,
    id: string,
    isLike: boolean,
    stats: {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number
    }
    sprites: {
        icon: string,
        main: string,
        graphic: string,
        artwork: string,
    }
    types: string[],
    abilities: {name: string, url: string}[],
    moves: {name: string, url: string}[]
}
export interface IPokemonType {
    id: string,
    name: string,
    pokemons: string[],
    count: number
}
export interface PokemonsState {
    types: IPokemonType[],
    loading: boolean,
    error: null | string,
    pokemons: {[pokemon: string] : IPokemon},
    moves: {[move: string] : string},
    abilities: {[ability: string] : string}
}

export enum PokemonsActionTypes {
    LOADING_ON = "LOADING_ON",
    FETCH_ERROR = "FETCH_ERROR",
    FETCH_TYPES = "FETCH_TYPES",
    FETCH_ABILITY = "FETCH_ABILITY",
    FETCH_MOVE = "FETCH_MOVE",
    ACTIVATE_LIKE = "ACTIVATE_LIKE",
    DEACTIVATE_LIKE = "DEACTIVATE_LIKE",
    FETCH_POKEMONS = "FETCH_POKEMONS"
}
interface ActivateLike {
    type: PokemonsActionTypes.ACTIVATE_LIKE;
    payload: string,
}
interface DeactivateLike {
    type: PokemonsActionTypes.DEACTIVATE_LIKE;
    payload: string
}
interface LoadingOnAction {
    type: PokemonsActionTypes.LOADING_ON;
}

interface FetchTypesAction {
    type: PokemonsActionTypes.FETCH_TYPES;
    payload: IPokemonType[];
}
interface FetchErrorAction {
    type: PokemonsActionTypes.FETCH_ERROR;
    payload: string;
}
interface FetchMoveAction {
    type: PokemonsActionTypes.FETCH_MOVE;
    payload: {name: string, description: string};
}

interface FetchAbilityAction {
    type: PokemonsActionTypes.FETCH_ABILITY;
    payload: {name: string, description: string};
}
interface FetchPokemonsAction {
    type: PokemonsActionTypes.FETCH_POKEMONS;
    payload:  {[pokemon: string] : IPokemon}
}

export type PokemonsAction = LoadingOnAction | 
                             FetchTypesAction | 
                             FetchErrorAction |
                             FetchMoveAction |
                             FetchAbilityAction |
                             ActivateLike |
                             DeactivateLike |
                             FetchPokemonsAction