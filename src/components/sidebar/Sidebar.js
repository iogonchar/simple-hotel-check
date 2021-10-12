import React from 'react';
import Favourites from '../favourites/Favourites';

import SearchForm from '../search-form/SearchForm';

import './Sidebar.css'

const Sidebar = () => {
  return ( 
    <aside className="aside">
      <SearchForm />
      <Favourites />
    </aside>
  );
}

export default Sidebar;