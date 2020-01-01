import React from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom'
import{
  Home
} from './containers'

export default function Routers() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}
