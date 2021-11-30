import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routs';
import {AuthContext} from '../context/AuthContext';

const AppRouter: React.FC = () => {
    const {isAuth} = React.useContext(AuthContext);


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
            <Redirect to="/pokemons"/>
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
            <Redirect to="/login"/>
        </Switch>
    );
};

export default AppRouter;