import Login from "../pages/LoginPage/LoginPage";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import PokemonsByTypePage from "../pages/PokemonsByTypePage/PokemonsByTypePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import PokemonTypes from "../pages/TypesPage/TypesPage";

export const privateRoutes = [
    {name: 'types', component: PokemonTypes, path: '/types', exact: true},
    {name: 'pokemonsByType', component: PokemonsByTypePage, path: '/types/:type/:page', exact: true},
    {name: 'pokemons', component: SearchPage, path: '/pokemons/:page', exact: true},
    {name: 'pokemon', component: PokemonPage, path: ['/pokemons/:page/:pokemon', '/types/:type/:page/:pokemon'] , exact: true},
]

export const publicRoutes = [
    {name: 'login', component: Login, path: '/login', exact: true}
]