import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

import Counter from './components/Counter'

function App() {

  {/*Parent state goes here */}

  return (
    <div className="App">

<h1>You spent {count} Euros</h1>
      <Counter
      {/* you must pass the callback here */}
      counterName='tibidabo' />

      <Counter
      {/* you must pass the callback here */}
        counterName='ovella negra' />
    </div>
  );
}

export default App;
