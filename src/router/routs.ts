import Login from "../pages/LoginPage/LoginPage";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import PokemonsByTypePage from "../pages/PokemonsByTypePage/PokemonsByTypePage";
import PokemonTypes from "../pages/TypesPage/TypesPage";


export const privateRoutes = [
    {name: 'type', component: PokemonTypes, path: '/type', exact: true},
    {name: 'pokemonsByType', component: PokemonsByTypePage, path: '/type/:id', exact: true},
    {name: 'pokemon', component: PokemonPage, path: '/type/:id/:pokemon', exact: true}
]

export const publicRoutes = [
    {name: 'login', component: Login, path: '/login', exact: true}
]