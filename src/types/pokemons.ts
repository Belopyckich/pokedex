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
    abilities: {[ability: string] : string},
    pokemonsCount: number
}

export enum PokemonsActionTypes {
    FETCH_DATA = "FETCH_DATA",
    FETCH_ERROR = "FETCH_ERROR",
    FETCH_TYPE = "FETCH_TYPE",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    CLEAR_TYPES = "CLEAR_TYPES",
    FETCH_ABILITY = "FETCH_ABILITY",
    FETCH_MOVE = "FETCH_MOVE",
    FETCH_POKEMON = "FETCH_POKEMON",
    ACTIVATE_LIKE = "ACTIVATE_LIKE",
    DEACTIVATE_LIKE = "DEACTIVATE_LIKE",
    FETCH_POKEMONS_COUNT = "FETCH_POKEMONS_COUNT",
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
interface FetchDataAction {
    type: PokemonsActionTypes.FETCH_DATA;
}

interface ClearTypes {
    type: PokemonsActionTypes.CLEAR_TYPES;
}

interface FetchTypeAction {
    type: PokemonsActionTypes.FETCH_TYPE;
    payload: IPokemonType;
}
interface FetchErrorAction {
    type: PokemonsActionTypes.FETCH_ERROR;
    payload: string;
}
interface FetchPokemonAction {
    type: PokemonsActionTypes.FETCH_POKEMON;
    payload: {name: string, property:  IPokemon};
}

interface FetchSuccessAction {
    type: PokemonsActionTypes.FETCH_SUCCESS;
}
interface FetchMoveAction {
    type: PokemonsActionTypes.FETCH_MOVE;
    payload: {name: string, description: string};
}

interface FetchAbilityAction {
    type: PokemonsActionTypes.FETCH_ABILITY;
    payload: {name: string, description: string};
}

interface FetchPokemonsCountAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_COUNT;
    payload: number
}

interface FetchPokemonsAction {
    type: PokemonsActionTypes.FETCH_POKEMONS;
    payload:  {[pokemon: string] : IPokemon}
}

export type PokemonsAction = FetchDataAction | 
                             FetchTypeAction | 
                             FetchErrorAction | 
                             FetchPokemonAction |
                             FetchMoveAction |
                             FetchAbilityAction |
                             FetchSuccessAction |
                             ClearTypes |
                             ActivateLike |
                             DeactivateLike |
                             FetchPokemonsCountAction |
                             FetchPokemonsAction