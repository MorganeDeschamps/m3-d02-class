import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

import Counter from './components/Counter'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">

<h1>You spent {count} Euros</h1>
      <Counter parentSetCount={setCount} parentCount={count} counterName='tibidabo' />
      <Counter parentSetCount={setCount} parentCount={count} counterName='ovella negra' />
    </div>
  );
}

export default App;
