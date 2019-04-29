import React from 'react';
// import logo from '../../logo.svg';
import logo from '../../logo.svg';
import './Login.css';
// import Button from '../button/Button'
/**
 * React Bootstrap
 */
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>React Bootstrap Button</Button>
      </header>
    </div>
  );
}

export default App;
