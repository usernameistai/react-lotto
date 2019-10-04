import React from 'react';
import Lottery from './Lottery';
import Ball from './Ball';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' maxBalls={4} maxNum={10}/>
      <Lottery title='Who wants to be a Billionaire...' maxBalls={25} maxNum={125}/>
      <Ball num={37}/>
      <Ball num={3.14}/>
    </div>
  );
}

export default App;
