import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // BR is used to add routing to react projects
      <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
