import { PokemonsState, PokemonsAction, PokemonsActionTypes  } from "../../types/pokemons";

const initialState: PokemonsState = {
    types: [],
    pokemons: {},
    loading: false,
    error: null,
    moves: {},
    abilities: {},
}

export const PokemonsReducer = (state = initialState, action: PokemonsAction) : PokemonsState => {
    switch (action.type) {
        case PokemonsActionTypes.LOADING_ON:
            return {...state, loading: true}
        case PokemonsActionTypes.FETCH_TYPES:
            return {...state, loading: false, types: action.payload}
        case PokemonsActionTypes.FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS:
            return {...state, loading: false, pokemons: action.payload}
        case PokemonsActionTypes.FETCH_MOVE:
            return {...state, moves: {...state.moves, [action.payload.name] : action.payload.description}}
        case PokemonsActionTypes.FETCH_ABILITY:
            return {...state, abilities: {...state.abilities, [action.payload.name] : action.payload.description}}
        case PokemonsActionTypes.DEACTIVATE_LIKE:
            return {...state, pokemons: {...state.pokemons, [action.payload] : {...state.pokemons[action.payload], isLike: false }}}
        case PokemonsActionTypes.ACTIVATE_LIKE:
            return {...state, pokemons: {...state.pokemons, [action.payload] : {...state.pokemons[action.payload], isLike: true }}}
        default:
            return state;
    }
} 