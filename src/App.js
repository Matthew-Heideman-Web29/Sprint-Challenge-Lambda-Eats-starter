import React from "react";
import HomePage from './Components/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const App = () => {
  return (
    <>
      <Nav>
        <NavItem>
        
        </NavItem>
        <NavItem>

        </NavItem>
      </Nav>
      <Switch>
        <Route path = '/' component={HomePage}/>
      </Switch>
      
    </>
  );
};
export default App;
