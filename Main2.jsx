import React from 'react';
import ItemList from './components/ItemList';
import { artistArray } from './assets/database/artists';
import { songsArray } from './assets/database/songs';

const Main2 = () => {
  return (
    <div className="main">
      {/* item list de Artista */}
      <ItemList title="Artistas" 
      items={5} 
      itemsArray={artistArray} 
      path='/artists'
      idPath='/artists'
      />
        {/* item list de Musicas */}
      <ItemList 
      title="Musicas" 
      items={25} 
      itemsArray={songsArray} 
      path='/songs'
      idPath='/songs'
      />
     </div>
  );
}

export default Main2;
