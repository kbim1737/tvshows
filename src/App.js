import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SearchedPage from './pages/SearchedPage';
import SearchComponent from './components/SearchComponent'
import DetailedPage from './pages/DetailedPage';


function App() {
  
  return (
  <Router>
        <SearchComponent></SearchComponent>
        <div>
          <Route path="/search" component={SearchedPage} />
          <Route path="/detailed" component={DetailedPage} />
        </div>
    </Router>
  );
}

export default App;
