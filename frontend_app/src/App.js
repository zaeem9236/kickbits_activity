import { BrowserRouter, Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import MainPage from './Components/MainPage/MainPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import './App.css';



function App() {

  return (

    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path='/' component={LoginPage} ></Route>
          {ProtectedRoute(MainPage)} 
          <Redirect to='/' />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
