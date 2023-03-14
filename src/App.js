import './App.css';
import {useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import * as Realm from 'realm-web';
import ItemSelector from './Components-Home/ItemSelector.js';
import BrowseCocktails from './Components-Browse/BrowseCocktails.js';

// Primary application function called when webpage is loaded
const App = () => {
  // State variable to determine if we have finished fetching and processing data from the server
  const [isFetching, setIsFetching] = useState(true);
  // State variables to store info from the database
  const [drinkCollection, setDrinkCollection] = useState([]);
  const [ingredientCollection, setIngredientCollection] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});
  //
  const navigate = useNavigate();


  // Upon rendering, call function to get data from the database
  useEffect(() => {
    getData()
  }, []);


  // Function call to the DrinkDirectory database to obtain full list of cocktails and ingredients/tools
  const getData = async () => {
    const app = new Realm.App({ id: "mixed_drink_menu-ikzpu" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allDrinks = await user.functions.getAllDrinks();
      const allIngredients = await user.functions.getIngredientsAndTools();
      setDrinkCollection(allDrinks);
      setIngredientCollection(allIngredients);
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }


  // After data has been obtained, initialize a Javascript object for faster access within application
  useEffect(() => {
    let tempObj = {};
    for (let i = 0; i < drinkCollection.length; i ++) {
      tempObj[[drinkCollection[i]['Name']]] = {
        'Base Spirit': drinkCollection[i]['Base Spirit'],
        'Required Ingredients': drinkCollection[i]['Required Ingredients'],
        'Optional Items': drinkCollection[i]['Optional Items'],
        'Required Tools': drinkCollection[i]['Required Tools'],
        'Instructions': drinkCollection[i]['Instructions'],
        'Traditional Glass': drinkCollection[i]['Traditional Glass'],
        'Approximate Amount of Alcohol': drinkCollection[i]['Approximate Amount of Alcohol'],
        'IBA Official Cocktail': drinkCollection[i]['IBA Official Cocktail'],
      }
    }
    setDrinkObject(tempObj);
    // If we are done loading and processing data from the server, update isFetching
    if (drinkCollection.length > 0) {
      setIsFetching(false);
    }
  }, [drinkCollection]);


  return (
      <div className='fullApplication'>
        <div>
          <h1 className='title'>Mixed Drink Menu</h1>
          <p className='subtitle'>A Desktop Application</p>
          <div className='navBar'>
              <button type='button' className='navBarButton' onClick={() => navigate('/')}>Home</button>
            <div className='space'></div>
              <button type='button' className='navBarButton' onClick={() => navigate('/browse')}>Browse Cocktails</button>
          </div>
        </div>
        <div className='body'>
          {
            isFetching ? <div><h2 className='loadingLabel'>Loading Data</h2><div className='loader'></div></div> : (
              <Routes>
                <Route exact path='/' element={<ItemSelector ingredientCollection={ingredientCollection} drinkObject={drinkObject} />} />
                <Route path='/browse' element={<BrowseCocktails drinkObject={drinkObject} />} />
              </Routes>
            )
          }
        </div>
      </div>
  );
}

export default App;