import HomePage from './Components/Home/HomePage';
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {HomePage}/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/signUp" component = {SignUp}/>
      </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;
