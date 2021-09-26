import HomePage from './Components/Home/HomePage';
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';

import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/" exact component = {HomePage}/>
          <Route path="/login" component = {Login}/>
      </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;
