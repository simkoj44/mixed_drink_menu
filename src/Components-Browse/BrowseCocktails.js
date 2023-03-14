import '../Styles-Browse/BrowseCocktails.css';
import {useState, useLayoutEffect} from 'react';
import React from 'react';

// This component displays a list of all cocktails from the database and allows the user to sort alphabetically, by category, or by alcohol content
const BrowseCocktails = (props) => {
  // State variable to store the full list of drinks from the database
  const [fullDrinkList, setFullDrinkList] = useState([]);
  // State variable to store a copy of fullDrinkList (to preserve original list while sorting the state variable above)
  const [fullDrinkListStorage, setFullDrinkListStorage] = useState([]);


  // When component is first rendered and receives props, generate an array of drinks from the database object (receieved as props)
  useLayoutEffect(() => {
    // Temporary variable to store drink names and alcohol content (so we can sort by alcohol)
    let tempArr = [];
    for (let property in props.drinkObject) {
      tempArr.push([[property], [props.drinkObject[property]['Approximate Amount of Alcohol']]]);
    }

    // Sort resulting array so by default the page displays drinks in alphabetical order, update state variables
    tempArr.sort();
    setFullDrinkList(tempArr);
    setFullDrinkListStorage(tempArr);
  }, [props.drinkObject])
  

  // Sort list alphabetically
  const sortAtoZ = () => {
      // Use array.slice to create a new array instead of a reference to original array (needed to force page to rerender)
      let temp = fullDrinkList.slice();
      // Sort array alphabetically and update state variable
      temp.sort();
      setFullDrinkList(temp);
  }
  

  // Filter list by selected category
  const filterByCategory = (event) => {
      // If 'All' is selected, reset fullDrinkList to fullDrinkListStorage
      // Otherwise, iterate through drinkObject and set fullDrinkList to all drinks in the chosen category
      if (event.target.value === 'All') {
        setFullDrinkList(fullDrinkListStorage);
      } else {
        let temp = [];
        for (let property in props.drinkObject) {
          if (props.drinkObject[property]['Base Spirit'] === event.target.value) {
            temp.push([property, props.drinkObject[property]['Approximate Amount of Alcohol']]);
          }
        }
        
        // Sort resulting array alphabetically and update state variable
        temp.sort();
        setFullDrinkList(temp);
      }
  }


  // Sort list by alcohol content (highest to lowest)
  const sortByAlcohol = () => {
      let temp = fullDrinkList.slice();
      // Sort by the second index in our 2D array, which contains the alcohol content of each cocktail
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
            <label htmlFor='base spirit'>Sort by Base Spirit:</label>
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
            // Iterate through list of drinks and display corresponding details
            // Element[0] is used because fullDrinkList is a 2D array also contains the alcohol content of each drink (needed to sort list by alcohol)
            fullDrinkList.map(element => {
              return (
                <div className='browseContainer' key={element[0]}>
                  <div className='drinkDetails'>
                    <h2>{element[0]}</h2>
                    <p><strong>Base Spirit: </strong>{props.drinkObject[element[0]]['Base Spirit']}</p>
                    <p><strong>Required Ingredients: </strong>{props.drinkObject[element[0]]['Required Ingredients'].join(', ')}</p>
                    <p><strong>Optional Ingredients: </strong>{props.drinkObject[element[0]]['Optional Items'].join(', ')}</p>
                    <p><strong>Required Tools: </strong>{props.drinkObject[element[0]]['Required Tools'].join(', ')}</p>
                    <p><strong>Instructions: </strong>{props.drinkObject[element[0]]['Instructions']}</p>
                    <p><strong>Traditional Glass: </strong>{props.drinkObject[element[0]]['Traditional Glass']}</p>
                    <p>
                      <strong>Approximate Amount of Alcohol: </strong>{props.drinkObject[element[0]]['Approximate Amount of Alcohol']}
                      {props.drinkObject[element[0]]['Approximate Amount of Alcohol'] === 1.0 ? ' Standard Drink' : ' Standard Drinks'}
                    </p>
                    <p><strong>IBA Official Cocktail: </strong>{props.drinkObject[element[0]]['IBA Official Cocktail']}</p>
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