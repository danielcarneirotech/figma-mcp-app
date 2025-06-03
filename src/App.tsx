import './App.css';
import React from 'react';
import Input from './components/Input';
import Showcase from './Showcase';

function App() {

  return (
    <>
      <div>
        <Input label="Enter your name" optional active filled />
      </div>
      <div className="App">
        <Showcase />
      </div>
    </>
  )
}

export default App
