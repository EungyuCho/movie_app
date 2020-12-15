import React from 'react';
import Foods from './Foods';

function App() {
  return (
    <div className="App">
      Hello
        <Foods  name={'kimchi'} price={3000}/>
        <Foods  name={'cheese'} price={500}/>
    </div>
  );
}

export default App;
