import React from 'react';

import Sidebar from '../sidebar/Sidebar';
import SearchResults from '../search-results/SearchResults';

import './Main.css';

const Main = () => {
  return ( 
    <main className="main">
      <Sidebar />
      <SearchResults />
    </main>
  );
}

export default Main;