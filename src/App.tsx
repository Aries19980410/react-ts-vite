import Index from '@/layout/index';
import Login from '@/pages/login';
import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
class App extends Component<any,any> {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login history={undefined}/>}/>
          <Route path="/" element={<Index />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;