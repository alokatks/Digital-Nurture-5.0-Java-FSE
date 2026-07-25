import React from 'react';
import Counter from './Counter';
import WelcomeButton from './WelcomeButton';
import SyntheticEventDemo from './SyntheticEventDemo';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div>
      <h1>React Event Handling Examples</h1>
      <Counter />
      <hr />
      <WelcomeButton />
      <hr />
      <SyntheticEventDemo />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
