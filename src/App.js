import './App.css';
import {useState} from 'react';
import React from 'react';
import ItemSelector from './Components/ItemSelector.js';
import BrowseCocktails from './Components/BrowseCocktails.js';

const App = () => {

  // State variable to determine if we display the homepage or cocktail list
  const [displayHome, setDisplay] = useState(true);

  return (
    <div className='fullApplication'>
      <div>
        <h1 className='title'>Mixed Drink Menu</h1>
        <div className='navBar'>
          <button type='button' onClick={() => setDisplay(true)} className='navBarButton'>Home</button>
          <div className='space'></div>
          <button type='button' onClick={() => setDisplay(false)} className='navBarButton'>Browse Cocktails</button>
          <div className='space'></div>
          <button type='button' className='navBarButton'>Placeholder Button</button>
        </div>
      </div>

      <div className='body'>
      {
        // Use state variable to determine whether we render ItemSelector or BrowseCocktails
        displayHome ? <ItemSelector /> : <BrowseCocktails />
      }
      </div>
    </div>
  );
}

export default App;