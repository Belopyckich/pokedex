import { PokemonsState, PokemonsAction, PokemonsActionTypes  } from "../../types/pokemons";

const initialState: PokemonsState = {
    pokemons: [],
    types: [],
    loading: false,
    error: null,
    pokemonsCount: 0
}

export const PokemonsReducer = (state = initialState, action: PokemonsAction) : PokemonsState => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_POKEMONS:
            return {...state, loading: true}
        case PokemonsActionTypes.FETCH_POKEMONTYPES_SUCCESS:
            return {...state, loading: false, types: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONTYPES_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS_SUCCESS:
            return {...state, loading: false, pokemons: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS_COUNT:
            return {...state, pokemonsCount: action.payload}
        default:
            return state;
    }
} 