import React from 'react';
import Favourites from '../favourites/Favourites';

import SearchForm from '../search-form/SearchForm';

import './Sidebar.css'

const Sidebar = () => {
  return ( 
    <aside>
      <SearchForm />
      <Favourites />
    </aside>
  );
}

export default Sidebar;