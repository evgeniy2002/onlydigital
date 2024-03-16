import React from 'react';

import { Header } from './components/Header';

import './App.scss';

import { Content } from './components/Content';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Header />

          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
