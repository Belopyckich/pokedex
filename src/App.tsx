import React, {useContext, useEffect} from 'react';
import { AuthContext } from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () =>  {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])

  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
