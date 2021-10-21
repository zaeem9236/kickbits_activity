import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


 const ProtectedRoute = (MainPage, userData) =>{
     let auth = userData.verified;
    if (auth) {
        return (<Route exact path='/mainpage' component={MainPage} />)
      } else {
        return (<Route exact path='/mainpage'> <Redirect to='/' /> </Route>)
      }
}

export default ProtectedRoute;