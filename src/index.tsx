import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/index";
import {Provider} from "react-redux";
import {AuthContextComponent} from "./context/AuthContext";

ReactDOM.render(
  <Provider store={store}>
    <AuthContextComponent>
      <App/>
    </AuthContextComponent>
  </Provider>,
  document.getElementById('root')
);
