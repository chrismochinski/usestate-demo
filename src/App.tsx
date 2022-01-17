import React, { useState } from 'react';
import './App.css';
import App2 from './App2';

function App() {

  const [count, setCount] = useState(1);

  const partyTime = () => {
    console.log('count is:', count + 1);
    setCount(count => +count * 2.3);
  }

  const morePartier = (incoming: string) => {
    console.log("incoming is:", incoming)
  }
  
  return (
    <div className="App">
      <button style={{margin: '10vh auto 10vh'}} onClick={() => {
        partyTime(); 
        partyTime();
        morePartier('THINGS');
      }}>{count}</button>
     <App2 />
    </div>
  );
}

export default App;
