import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/index";
import {Provider} from "react-redux";
import {AuthContextComponent} from "./context/AuthContext";
import { SearchContextComponent } from './context/SearchContext';

ReactDOM.render(
  <Provider store={store}>
    <AuthContextComponent>
      <SearchContextComponent>
        <App/>
      </SearchContextComponent>
    </AuthContextComponent>
  </Provider>,
  document.getElementById('root')
);
