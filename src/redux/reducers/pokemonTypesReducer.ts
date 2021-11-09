import { PokemonTypesState, PokemonTypesAction, PokemonTypesActionTypes  } from "../../types/pokemonTypes";

const initialState: PokemonTypesState = {
    types: [],
    loading: false,
    error: null
}

export const PokemonTypesReducer = (state = initialState, action: PokemonTypesAction) : PokemonTypesState => {
    switch (action.type) {
        case PokemonTypesActionTypes.FETCH_POKEMONTYPES:
            return {...state, loading: true}
        case PokemonTypesActionTypes.FETCH_POKEMONTYPES_SUCCESS:
            return {...state, loading: false, types: action.payload}
        case PokemonTypesActionTypes.FETCH_POKEMONTYPES_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
} 