import axios from "axios";
import { IPokemon, IPokemonType, PokemonsAction, PokemonsActionTypes } from "../../types/pokemons"
import { Dispatch } from "redux";

const instance = axios.create();

export const fetchTypes = () => {
    return async (dispatch: Dispatch<PokemonsAction>) => {
        try {
            dispatch({ type: PokemonsActionTypes.LOADING_ON})
            setTimeout(async () => {
                const typesUrl = await instance.get("https://pokeapi.co/api/v2/type").then(response => response.data.results.slice(0, 18));
                const types : IPokemonType[] = await Promise.all(typesUrl.map(async (type: { name: string, url: string }) => {
                    const typeProperty : IPokemonType = await fetchType(type.url).then((data : IPokemonType) => data);
                    return typeProperty;
                }))
                dispatch({type: PokemonsActionTypes.FETCH_TYPES, payload: types});
            }, 1000);
        } catch (e) {
            dispatch({ type: PokemonsActionTypes.FETCH_ERROR, payload: 'Произошла ошибка загрузки списка покемонов' });
        }
    }
}

export const fetchType = async (url: string) => {
    const response = await instance.get(url);
    return {
        id: response.data.id,
        name: response.data.name,
        pokemons: response.data.pokemon.map(((item: { pokemon: { name: string, url: string }, slot: number }) => item.pokemon.name)),
        count: response.data.pokemon.length
    }
}

export const fetchPokemons = (userLikes: string[]) => {
    return async (dispatch: Dispatch<PokemonsAction>) => {
        try {
            dispatch({ type: PokemonsActionTypes.LOADING_ON });
            const pokemonsCount = await instance.get(`https://pokeapi.co/api/v2/pokemon`).then(response => response.data.count);
            const pokemons = await instance.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsCount}`);
            const pokemonsProperties : IPokemon[] = await Promise.all(pokemons.data.results.map(async (pokemon: {name: string, url: string}) => {
                const isLikeValue = userLikes.includes(pokemon.name);
                const property : IPokemon = await fetchPokemon(pokemon.url, isLikeValue).then(data => data);
                return property;
            }))
            let tempPokemons : {[pokemon: string] : IPokemon} = {};
            pokemonsProperties.forEach((property : IPokemon) => tempPokemons = {...tempPokemons, [property.name] : property});
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS, payload: tempPokemons});
        } catch (e) {
            dispatch({ type: PokemonsActionTypes.FETCH_ERROR, payload: 'Произошла ошибка загрузки покемонов' });
        }
    }
}

export const fetchPokemonMove = (name: string, url: string) => {
    return async (dispatch: Dispatch<PokemonsAction>) => {
        try {
            await instance.get(url)
                .then(response => dispatch({ type: PokemonsActionTypes.FETCH_MOVE, payload: { name: name, description: response.data.effect_entries[0].effect } }))
        } catch (e) {
            dispatch({ type: PokemonsActionTypes.FETCH_ERROR, payload: 'Произошла ошибка загрузка способностей покемона' });
        }
    }
}

export const fetchPokemonAbility = (name: string, url: string) => {
    return async (dispatch: Dispatch<PokemonsAction>) => {
        try {
            await instance.get(url)
                .then(response => dispatch({ type: PokemonsActionTypes.FETCH_ABILITY, payload: { name: name, description: response.data.effect_entries[1].effect } }))
        } catch (e) {
            dispatch({ type: PokemonsActionTypes.FETCH_ERROR, payload: 'Произошла ошибка загрузка способностей покемона' });
        }
    }
}

export const fetchPokemon = async (url: string, isLikeValue: boolean) => {
    const response = await instance.get(url);
    return {
        name: response.data?.name,
        height: response.data?.height / 10,
        weight: response.data?.weight / 10,
        id: response.data?.id,
        isLike: isLikeValue,
        stats: {
            hp: response.data?.stats[0].base_stat,
            attack: response.data?.stats[1].base_stat,
            defense: response.data?.stats[2].base_stat,
            specialAttack: response.data?.stats[3].base_stat,
            specialDefense: response.data?.stats[4].base_stat,
            speed: response.data.stats[5]?.base_stat
        },
        sprites: {
            icon: response.data.sprites?.front_default,
            main: response.data.sprites?.other.dream_world.front_default,
            graphic: response.data.sprites?.other.home.front_default,
            artwork: response.data.sprites?.other['official-artwork'].front_default,
        },
        types: response.data.types?.map((item: { slot: number, type: { name: string, url: string } }) => item.type.name),
        abilities: response.data.abilities?.map((item: { ability: { name: string, url: string }, is_hidden: boolean, slot: number }) => {
            return { name: item.ability.name, url: item.ability.url }
        }),
        moves: response.data.moves?.map((item: { move: { name: string, url: string } }) => {
            return { name: item.move.name, url: item.move.url }
        }),
    }
}


