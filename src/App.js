import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import ItemSelector from './Components/ItemSelector.js';
import BrowseCocktails from './Components/BrowseCocktails.js';
import * as Realm from 'realm-web';

const App = () => {

  // State variable to determine if we display the homepage or cocktail list
  const [displayHome, setDisplay] = useState(true);
  // State variables to store info from the database
  const [drinkCollection, setDrinkCollection] = useState([]);
  const [ingredientCollection, setIngredientCollection] = useState([]);
  const [drinkObject, setDrinkObject] = useState({});

  // Function call to the DrinkDirectory database to obtain full list of cocktails
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

  // Upon rendering, call function to get data from the database
  useEffect(() => {
    getData()
  }, []);

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
  }, [drinkCollection]);

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
        // Use state variable to determine whether we render ItemSelector or BrowseCocktails, pass the collection of drinks from the database as props.
        displayHome ? <ItemSelector ingredientCollection={ingredientCollection}/> : <BrowseCocktails drinkCollection={drinkCollection} drinkObject={drinkObject}/>
      }
      </div>
    </div>
  );
}

export default App;