import React from 'react';

import SearchForm from '../search-form/SearchForm';
import Favourites from '../favourites/Favourites';

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