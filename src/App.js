import React from 'react';
import logo from './logo.svg';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
