import React, {Fragment} from 'react';
//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
/* Shared */
import Header from './componentes/shared/Header';

function App() {
  
  return(    
      <Header />
  );
}

export default App;
