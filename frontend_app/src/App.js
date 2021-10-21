import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import MainPage from './Components/MainPage/MainPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import { useSelector} from 'react-redux';
import { selectUserData } from './Redux/Slices/userSlice';

import './App.css';



function App() {
  let userData = useSelector(selectUserData)

  return (

    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path='/' component={LoginPage} ></Route>
          {ProtectedRoute(MainPage, userData)} 
          <Redirect to='/' />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
