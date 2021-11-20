import { PokemonsState, PokemonsAction, PokemonsActionTypes  } from "../../types/pokemons";

const initialState: PokemonsState = {
    types: [],
    pokemons: {},
    loading: false,
    error: null,
    pokemonsCount: 0
}

export const PokemonsReducer = (state = initialState, action: PokemonsAction) : PokemonsState => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_DATA:
            return {...state, loading: true}
        case PokemonsActionTypes.FETCH_TYPES_SUCCESS:
            return {...state, loading: false, types: action.payload}
        case PokemonsActionTypes.FETCH_TYPES_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS_BY_TYPE_SUCCESS:
            console.log(action.payload);
            return {...state, loading: false, pokemons: {...state.pokemons, [action.payload.type] : action.payload.pokemons}}
        case PokemonsActionTypes.FETCH_POKEMONS_BY_TYPE_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS_COUNT:
            return {...state, pokemonsCount: action.payload}
        default:
            return state;
    }
} 