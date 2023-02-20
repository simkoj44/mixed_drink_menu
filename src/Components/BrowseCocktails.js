import '../App.css';
import drink_directory from '../DrinkDirectory.js';
import {useState, useEffect} from 'react';
import React from 'react';

const BrowseCocktails = () => {
  
  // State variable to store the full list of drinks from the database
  const [fullDrinkList, setFullDrinkList] = useState([]);
  // State variable copy of the full drink list to preserve original list while sorting the state variable above
  const [fullDrinkListStorage, setFullDrinkListStorage] = useState([]);

  // When component is first rendered, pull the full list of drinks from the database
  useEffect(() => {
      // Conditional to prevent unwanted updates after sorting list
      if (fullDrinkList.length === 0) {
          let temp = [];
          for (let property in drink_directory) {
            temp.push([[property],[drink_directory[property]['Approximate Amount of Alcohol']]]);
          }
          setFullDrinkList(temp);
          setFullDrinkListStorage(temp);
      }
  }, [fullDrinkList])
  
  // Sort list alphabetically
  const sortAtoZ = () => {
      // Use array.slice to create a new array instead of a reference to original array (needed to force page to rerender)
      let temp = fullDrinkList.slice();
      temp.sort();
      setFullDrinkList(temp);
  }
  
  // Filter list by selected category
  const filterByCategory = (event) => {
      if (event.target.value === 'all') {
        setFullDrinkList(fullDrinkListStorage);
      } else {
        let temp = [];
        for (let i = 0; i < fullDrinkListStorage.length; i++) {
          if (drink_directory[fullDrinkListStorage[i][0]]['Base Spirit'] === event.target.value) {
            temp.push(fullDrinkListStorage[i]);
          }
        }
        setFullDrinkList(temp);
      }
  }

  // Sort list by alcohol content (highest to lowest)
  const sortByAlcohol = () => {
      let temp = fullDrinkList.slice();
      temp.sort(function(a, b) {
          return b[1] - a[1];
      });
      setFullDrinkList(temp);
  }
  
  return (
      <div className='browseCocktails'>
        <h3 className='browseCocktailsHeader'>We have {fullDrinkList.length} cocktails in our database: </h3>
        <div className='sortingButtonGroup'>
          <button type='button' className='primaryButton' onClick={sortAtoZ}>Sort A-Z</button>
          <div className='space'></div>
          <div className='baseSpiritSelector'>
            <label for='base spirit'>Sort by Base Spirit:</label>
            <div className='space'></div>
            <select onChange={filterByCategory} name='base spirit' id='base spirit'>
              <option value='All'>All</option>
              <option value='Brandy'>Brandy</option>
              <option value='Gin'>Gin</option>
              <option value='Rum'>Rum</option>
              <option value='Tequila'>Tequila</option>
              <option value='Vodka'>Vodka</option>
              <option value='Whiskey'>Whiskey</option>
              <option value='Specialty'>Specialty</option>
              <option value='Combination'>Combination</option>
            </select>
          </div>
          <div className='space'></div>
          <button type='button' className='primaryButton' onClick={sortByAlcohol}>Sort by Alcohol Content</button>
        </div>
        <div>
          {
            // Element[0] is used because the drink list also contains the alcohol content of each drink (needed to sort list by alcohol)
            fullDrinkList.map(element => {
              return (
                <div className='browseContainer'>
                  <div className='drinkDetails'>
                    <h2>{element[0]}</h2>
                    <p><strong>Base Spirit: </strong>{drink_directory[element[0]]['Base Spirit']}</p>
                    <p><strong>Required Ingredients: </strong>{drink_directory[element[0]]['Required Ingredients'].join(', ')}</p>
                    <p><strong>Optional Ingredients: </strong>{drink_directory[element[0]]['Optional Items'].join(', ')}</p>
                    <p><strong>Required Tools: </strong>{drink_directory[element[0]]['Required Tools'].join(', ')}</p>
                    <p><strong>Instructions: </strong>{drink_directory[element[0]]['Instructions']}</p>
                    <p><strong>Traditional Glass: </strong>{drink_directory[element[0]]['Traditional Glass']}</p>
                    <p>
                      <strong>Approximate Amount of Alcohol: </strong>{drink_directory[element[0]]['Approximate Amount of Alcohol']}
                      {drink_directory[element[0]]['Approximate Amount of Alcohol'] === 1.0 ? ' Standard Drink' : ' Standard Drinks'}
                    </p>
                    <p><strong>IBA Official Cocktail: </strong>{drink_directory[element[0]]['IBA Official Cocktail']}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  );
}

export default BrowseCocktails;