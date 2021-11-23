import { PokemonsState, PokemonsAction, PokemonsActionTypes  } from "../../types/pokemons";

const initialState: PokemonsState = {
    types: [],
    pokemons: {},
    loading: false,
    error: null,
    moves: {},
    abilities: {}
}

export const PokemonsReducer = (state = initialState, action: PokemonsAction) : PokemonsState => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_DATA:
            return {...state, loading: true}
        case PokemonsActionTypes.FETCH_TYPE:
            return {...state, types: [...state.types, action.payload]}
        case PokemonsActionTypes.FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.FETCH_POKEMON:
            return {...state, pokemons: {...state.pokemons, [action.payload.name] : action.payload.property}}
        case PokemonsActionTypes.FETCH_SUCCESS:
            return {...state, loading: false}
        case PokemonsActionTypes.CLEAR_TYPES:
            return {...state, types: []}
        case PokemonsActionTypes.FETCH_MOVE:
            return {...state, moves: {...state.moves, [action.payload.name] : action.payload.description}}
        case PokemonsActionTypes.FETCH_ABILITY:
            return {...state, abilities: {...state.abilities, [action.payload.name] : action.payload.description}}
        default:
            return state;
    }
} 