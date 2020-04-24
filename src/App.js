import React from "react";
import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm';
import { Switch, Route, Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const App = () => {
  return (
    <>
      <Nav>
        <NavItem>
          <Link to = '/'> Home </Link>
        </NavItem>
        <NavItem>
          <Link to = '/pizza'> Order Now </Link>
        </NavItem>
      </Nav>
      <Switch>
        <Route path = '/pizza' component = {PizzaForm} />
        <Route path = '/' component = {HomePage} />
      </Switch>
    </>
  );
};
export default App;
