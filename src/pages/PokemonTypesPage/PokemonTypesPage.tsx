import React, {useEffect, FC} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useAction } from '../../hooks/useAction';
import style from "./PokemonTypesPage.module.css";
import { useHistory } from 'react-router-dom';

export interface IPokemonType {
    name: string
    url: string,
    id: string
}

const PokemonTypes: FC = () => {
    const {loading, error, types} = useSelector((state: RootState) => state.pokemons);
    const {fetchPokemonTypes} = useAction();
    const history = useHistory();

    useEffect(() => {
        fetchPokemonTypes();
    }, [])

    console.log(types);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {loading ?
                <div className={style.loadingWrapper}>
                    <div className={style.loading}></div>
                </div>
            :   
                <div className={style.pokemonTypesWrapper}>
                    {types.map((type : IPokemonType) =>
                        <div onClick={() => history.push('/type/' + type.id)} key={type.name} style={{padding: 15, border: '1px solid gray'}}>
                            {type.name}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PokemonTypes;