import axios from "axios";
import { IPokemon } from "../components/PokemonBlock/PokemonBlock";

export const instance = axios.create()

export const getPokemonProp = async (url : string, setPokemon : React.Dispatch<React.SetStateAction<IPokemon>>) => {
    const response =  await instance.get(url);
    setPokemon({
        img: response.data.sprites.front_default,
        types: response.data.types.map((type : any) => type.type.name)
    })
}
