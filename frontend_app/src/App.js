import { BrowserRouter, Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import PageA from './Components/pageA/PageA';
import PageB from './Components/pageB/PageB';
import './App.css';



function App() {

  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/A' component={PageA} ></Route>
          <Route exact path='/B' component={PageB} ></Route>
          <Redirect to='/' />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
