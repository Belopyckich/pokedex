import { IPokemon } from "../types/pokemons";

export const getPokemonsBySelectedSort = (sortedPokemons : IPokemon[], selectedSort : string) => {

    switch (selectedSort) {
        case "alphabet":
          return {sortedPokemons : sortedPokemons.sort((a: IPokemon, b: IPokemon) => a.name.localeCompare(b.name)),
                  sortedPokemonsCount : sortedPokemons.sort((a: IPokemon, b: IPokemon) => a.name.localeCompare(b.name)).length
          }
  
        case "favorite":
            return {sortedPokemons: sortedPokemons.filter((pokemon) => pokemon.isLike === true),
                    sortedPokemonsCount: sortedPokemons.filter((pokemon) => pokemon.isLike === true).length
            }
  
        case "weight":
        case "height":
        case "id":
            return {sortedPokemons: sortedPokemons.sort((a: IPokemon, b: IPokemon) => Number(b[selectedSort]) - Number(a[selectedSort])),
                    sortedPokemonsCount: sortedPokemons.sort((a: IPokemon, b: IPokemon) => Number(b[selectedSort]) - Number(a[selectedSort])).length
            }
  
        case "hp":
        case "attack":
        case "defense":
        case "speed":
            return {sortedPokemons: sortedPokemons.sort((a: IPokemon, b: IPokemon) => +b.stats[selectedSort] - +a.stats[selectedSort]),
                    sortedPokemonsCount: sortedPokemons.sort((a: IPokemon, b: IPokemon) => +b.stats[selectedSort] - +a.stats[selectedSort]).length}
  
        default:
          return {sortedPokemons: sortedPokemons, sortedPokemonsCount: sortedPokemons.length}
    }
}