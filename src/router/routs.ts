import Login from "../pages/LoginPage/LoginPage";
import PokemonsByTypePage from "../pages/PokemonsByTypePage/PokemonsByTypePage";
import PokemonTypes from "../pages/PokemonTypesPage/PokemonTypesPage";


export const privateRoutes = [
    {name: 'type', component: PokemonTypes, path: '/type', exact: true},
    {name: 'pokemonsByType', component: PokemonsByTypePage, path: '/type/:id', exact: true}
]

export const publicRoutes = [
    {name: 'login', component: Login, path: '/login', exact: true}
]