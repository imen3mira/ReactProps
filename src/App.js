import React from 'react';
import data from './composants/Data'
import './App.css';
import ProductTable from './composants/ProductTable';
import './composants/ProductTable.css';

function App() {
  return (
    <div className="App">
      <h1 className= "titre">Nos Produits </h1>
     {data.map(el=>(<ProductTable name = {el.nom} prix={el.prix}  categorie={el.categorie} />))}
    </div>
  );
}

export default App;
