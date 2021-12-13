import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routs';
import {AuthContext} from '../context/AuthContext';
import { SearchContext } from '../context/SearchContext';

const AppRouter: React.FC = () => {
    const {isAuth} = React.useContext(AuthContext);

    const {searchBy} = React.useContext(SearchContext);

    return (
        isAuth ?

        <Switch>
            {privateRoutes.map(route => 
                <Route
                    path={route.path}
                    key={route.name}
                    component={route.component}
                    exact={route.exact}
                />
            )}
            <Redirect to={`/pokedex/${searchBy}/1`}/>
        </Switch>

        :

        <Switch>
            {publicRoutes.map(route => 
                <Route
                    path={route.path}
                    key={route.name}
                    component={route.component}
                    exact={route.exact}
                />
            )}
            <Redirect to="/pokedex/login"/>
        </Switch>
    );
};

export default AppRouter;