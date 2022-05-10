import Index from '@/layout/index';
import Login from '@/pages/login';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
class App extends Component<any,any> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={()=><Login />} />
          <Route path="/" component={()=><Index />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;