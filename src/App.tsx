import {useContext, useEffect} from 'react';
import { AuthContext } from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers';

const App = () =>  {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const {loading} = useSelector((state: RootState) => state.pokemons) 

  useEffect(() => {
    localStorage.getItem('auth') && setIsAuth(true);
  }, [setIsAuth])

  return (
    <BrowserRouter>
        {(isAuth && !loading)  && <Navbar/>}
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
