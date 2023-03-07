import '../Styles/ItemSelector.css';
import React from 'react';
import {useState, useLayoutEffect} from 'react';
import {createRoot} from 'react-dom/client';
import DisplayDrinks from './DisplayDrinks.js';
import RecommendedItems from './RecommendedItems.js';
import NearlyAttainableDrinks from './NearlyAttainableDrinks.js';
import GenerateMenu from './GenerateMenu.js';
import GenerateInstructions from './GenerateInstructions.js';

// This function is the main driver of the application - it displays a 4 groups of checkboxes of all required cocktail items from the database
// Users can select all the items they have available and hit 'See Cocktails' to view a list of available drinks, recommended items, and nearly attainable drinks
// From there, users can generate a printable menu of all their available drinks or a printable list of instructions on how to make each drink
// Much of the logic for the program is executed in this component and resulting data is passed to child components as props
const ItemSelector = (props) => {
  // State variables to store ingredients/tools based on category
  const [baseSpirits, setBaseSpirits] = useState([]);
  const [supplementaryAlcohol, setSupplementaryAlcohol] = useState([]);
  const [additionalIngredients, setAdditionalIngredients] = useState([]);
  const [tools, setTools] = useState([]);

  // State variable to hold full list of items and whether the corresponding checkbox has been checked
  const [itemList, setItemList] = useState({});

  // State variables updated on form submission that are passed as props to child components
  const [userDrinkList, setuserDrinkList] = useState([]);
  const [drinksOneAway, setDrinksOneAway] = useState([]);
  const [drinksTwoAway, setDrinksTwoAway] = useState([]);
  const [missingItemsByDrink, setMissingItemsByDrink] = useState({});
  const [recommendedItems, setRecommendedItems] = useState({});

  // State variable to determine whether we need to display the toggle buttons
  const [displayButtons, setDisplayButtons] = useState(false);

  // State variables to determine which subcomponent is rendered (if any)
  const [showDisplayDrinks, setShowDisplayDrinks] = useState(false);
  const [showRecommendedItems, setShowRecommendedItems] = useState(false);
  const [showNearlyAttainableDrinks, setShowNearlyAttainableDrinks] = useState(false);
  
  // State variable to store the name of the user's establishment (if specified)
  const [establishmentName, setEstablishmentName] = useState('');


  // This function is called when the component receives new props and it serves two purposes
  // 1) Separates ingredients/tools into respective arrays and updates state variables
  // 2) Initializes an object that holds all ingredients/tools and a boolean property to indicate whether that item's checkbox is checked
  useLayoutEffect(() => {
    let base = [];
    let supplementary = [];
    let additional = [];
    let tools = [];
    let tempItemList = {};
    
    for (let i = 0; i < props.ingredientCollection.length; i++) {
      tempItemList[props.ingredientCollection[i]['Name']] = false;

      // Switch statements are sorted from most common to least common category to minimize the number of cases checked
      switch (props.ingredientCollection[i]['Type']) {
        case 'Additional Ingredient':
          additional.push(props.ingredientCollection[i]['Name']);
          break;
        case 'Supplementary Alcoholic Drink':
          supplementary.push(props.ingredientCollection[i]['Name']);
          break;
        case 'Base Spirit':
          base.push(props.ingredientCollection[i]['Name']);
          break;
        default:
          tools.push(props.ingredientCollection[i]['Name']);
          break;
      }
    }

    // Sort the arrays so items are rendered in alphabetical order and update state variables
    base.sort();
    supplementary.sort();
    additional.sort();
    setItemList(tempItemList);
    setBaseSpirits(base);
    setSupplementaryAlcohol(supplementary);
    setAdditionalIngredients(additional);
    setTools(tools);
  }, [props.ingredientCollection])


  // Function called whenever a checkbox is checked/unchecked and it updates that item's boolean property in the itemList state variable
  const handleCheckboxChange = (event) => {
    let temp = itemList;
    const item = event.target.value;
    temp[item] = !temp[item];
    setItemList(temp);
  }


  // This function is called when the user clicks 'See Cocktails'
  // It checks which items the user has selected and generates data to be passed to child components
  const generateDrinkOptions = () => {  
    // Iterate through itemList to determine which items are available and add those items to availableItems object
    let availableItems = {};
    for (let property in itemList) {
      if (itemList[property] === true) {
        availableItems[property] = '';
      }
    }

    // Series of special adjustments to account for drinks that accept one of several ingredients
    if (availableItems['Milk'] === '' || availableItems['Cream'] === '') {
      availableItems['Milk/Cream'] = '';
    }
    if (availableItems['Dark Rum'] === '' || availableItems['Gold Rum'] === '' || availableItems['White Rum'] === '' || availableItems['Spiced Rum'] === '') {
      availableItems['Rum'] = '';
    }
    availableItems['None'] = '';

    // Initialize temporary variables to store data (which will be used to update state variables)
    // 1) userDrinkList will contain the drinks the user is able to make with their available items
    let tempUserDrinkList = [];
    // 2) drinksOneAway will contain all drinks where the user is missing 1 item
    let tempOneAway = [];
    // 3) drinksTwoAway will contain all drinks where the user is missing 2 items
    let tempTwoAway = [];
    // 4) missingItemsByDrink is an object that will contain an array of missing items for each drink
    let tempMissingItemsByDrink = {};
    // 5) recommendedItems is an object that will contain the top recommended items to enhance the user's drink menu
    let tempRecommendedItems = {};
    
    // Iterate through all cocktails in the database and check to see if the user has all available items
    for (let property in props.drinkObject) {
      let canMakeDrink = true;
      // When the user is missing an item, add it to the missingItems array
      let missingItems = [];
      for (let i = 0; i < props.drinkObject[property]['Required Tools'].length; i++) {
        if (availableItems.hasOwnProperty(props.drinkObject[property]['Required Tools'][i]) === false) {
            canMakeDrink = false;
            missingItems.push(props.drinkObject[property]['Required Tools'][i]);
        }
      }
      for (let i = 0; i < props.drinkObject[property]['Required Ingredients'].length; i++) {
        if (availableItems.hasOwnProperty(props.drinkObject[property]['Required Ingredients'][i]) === false) {
          canMakeDrink = false;
          missingItems.push(props.drinkObject[property]['Required Ingredients'][i]);
        }
      }
      // If the user has all required items, add the drink to userDrinkList
      if (canMakeDrink) {
        tempUserDrinkList.push(property);
      }
      // If the user does not have all required items for the given drink, check to see how many items the user is missing
      else {
        // If the user is only missing 1 item, add the drink to drinksOneAway, update the missingItemsByDrink, and increment the count for that item in the recommendedItems object
        if (missingItems.length === 1) {
          tempOneAway.push(property)
          tempMissingItemsByDrink[property] = missingItems;
          if (tempRecommendedItems[missingItems[0]]) {
            tempRecommendedItems[missingItems[0]]['Count'] += 1.01
            tempRecommendedItems[missingItems[0]]['Drinks One Away'].push(property);
          }
          else {
            tempRecommendedItems[missingItems[0]] = {
                'Count': 1.01,
                'Drinks One Away': [property],
                'Drinks Two Away': []
            };
          }
        }
        // If the user is missing 2 items, add the drink to drinksTwoAway, update the missingItemsByDrink, and increment the count for that item in the recommendedItems object
        else if (missingItems.length === 2) {
          tempTwoAway.push(property);
          tempMissingItemsByDrink[property] = missingItems;
          for (let i = 0; i < missingItems.length; i++) {
            if (tempRecommendedItems[missingItems[i]]) {
                tempRecommendedItems[missingItems[i]]['Count'] += 1
                tempRecommendedItems[missingItems[i]]['Drinks Two Away'].push(property);
            }
            else {
                tempRecommendedItems[missingItems[i]] = {
                    'Count': 1,
                    'Drinks One Away': [],
                    'Drinks Two Away': [property]
                };
            }
          }
        }
        // If the user is missing 3 or more items and we have not encountered this item before, add an empty instance to recommendedItems (used to search for missing items in child component)
        else {
          for (let i = 0; i < missingItems.length; i++) {
            if (!tempRecommendedItems[missingItems[i]]) {
                tempRecommendedItems[missingItems[i]] = {
                    'Count': 0,
                    'Drinks One Away': [],
                    'Drinks Two Away': []
                };
            }
          }
        }
      }
    }

    // Series of special adjustments to account for drinks that accept one of several ingredients
    if (tempRecommendedItems['Rum']) {
      tempRecommendedItems['Dark Rum']['Count'] += (tempRecommendedItems['Rum']['Count']);
      tempRecommendedItems['Dark Rum']['Drinks One Away'].push(...tempRecommendedItems['Rum']['Drinks One Away']);
      tempRecommendedItems['Dark Rum']['Drinks Two Away'].push(...tempRecommendedItems['Rum']['Drinks Two Away']);
  
      tempRecommendedItems['White Rum']['Count'] += (tempRecommendedItems['Rum']['Count']);
      tempRecommendedItems['White Rum']['Drinks One Away'].push(...tempRecommendedItems['Rum']['Drinks One Away']);
      tempRecommendedItems['White Rum']['Drinks Two Away'].push(...tempRecommendedItems['Rum']['Drinks Two Away']);
  
      tempRecommendedItems['Gold Rum']['Count'] += (tempRecommendedItems['Rum']['Count']);
      tempRecommendedItems['Gold Rum']['Drinks One Away'].push(...tempRecommendedItems['Rum']['Drinks One Away']);
      tempRecommendedItems['Gold Rum']['Drinks Two Away'].push(...tempRecommendedItems['Rum']['Drinks Two Away']);

      tempRecommendedItems['Spiced Rum'] = {
          'Count': tempRecommendedItems['Rum']['Count'],
          'Drinks One Away': tempRecommendedItems['Rum']['Drinks One Away'],
          'Drinks Two Away': tempRecommendedItems['Rum']['Drinks Two Away']
      }
      tempRecommendedItems['Rum']['Count'] = 0;
    }
    if (tempRecommendedItems['Milk/Cream']) {
      tempRecommendedItems['Milk']['Count'] += (tempRecommendedItems['Milk/Cream']['Count']);
      tempRecommendedItems['Milk']['Drinks One Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks One Away']);
      tempRecommendedItems['Milk']['Drinks Two Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks Two Away']);
  
      tempRecommendedItems['Cream']['Count'] += (tempRecommendedItems['Milk/Cream']['Count']);
      tempRecommendedItems['Cream']['Drinks One Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks One Away']);
      tempRecommendedItems['Cream']['Drinks Two Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks Two Away']);

      tempRecommendedItems['Milk/Cream']['Count'] = 0;
    }

    // Sort the arrays so items will be rendered in alphabetical order and update state variables
    tempUserDrinkList.sort();
    tempOneAway.sort();
    tempTwoAway.sort();
    setuserDrinkList(tempUserDrinkList);
    setDrinksOneAway(tempOneAway);
    setDrinksTwoAway(tempTwoAway);
    setMissingItemsByDrink(tempMissingItemsByDrink);
    setRecommendedItems(tempRecommendedItems);
    setDisplayButtons(true);
    setShowDisplayDrinks(true);
    setShowRecommendedItems(false);
    setShowNearlyAttainableDrinks(false);

    // Automatically scroll page to subcomponents
    document.getElementById('scrollTarget').scrollIntoView({behavior: 'smooth'});
  }


  // Function called when 'Reset' is clicked. It updates the itemList so all items are set to false, unchecks all checkboxes, and deactivates all subcomponents
  const resetDrinkOptions = () => {
    let tempItemList = {};

    // Update itemList so all items set to false
    for (let i = 0; i < props.ingredientCollection.length; i++) {
      tempItemList[props.ingredientCollection[i]['Name']] = false;
    }

    // Uncheck all checkboxes
    let x = document.getElementsByClassName('checkbox');
    for (let i = 0; i < x.length; i++) {
      x[i].checked = false;
    }

    // Update state variables and turn off display of all child components
    setItemList(tempItemList);
    setDisplayButtons(false);
    setShowDisplayDrinks(false);
    setShowRecommendedItems(false);
    setShowNearlyAttainableDrinks(false);
  }


  // Show DisplayDrinks component
  const viewDisplayDrinks = () => {
    setShowDisplayDrinks(true);
    setShowRecommendedItems(false);
    setShowNearlyAttainableDrinks(false);
  }


  // Show RecommendedItems component
  const viewRecommendedItems = () => {
    setShowDisplayDrinks(false);
    setShowRecommendedItems(true);
    setShowNearlyAttainableDrinks(false);
  }


  // Show NearlyAttainableDrinks component
  const viewNearlyAttainableDrinks = () => {
    setShowDisplayDrinks(false);
    setShowRecommendedItems(false);
    setShowNearlyAttainableDrinks(true);
  }


  // As user types in establishment name, update state
  const updateEstablishment = () => {
    let establishment = document.getElementById('establishment').value;
    setEstablishmentName(establishment);
  }


  // Open new window with GenerateInstructions component, passing the establishment name and user's drink list as props
  const generateInstructions = () => {
    const instructionsWindow = window.open();
    const instructionsRoot = createRoot(instructionsWindow.document);
    instructionsRoot.render(<GenerateInstructions name={establishmentName} userDrinkList={userDrinkList} drinkObject={props.drinkObject}/>);
  }


  // Open new window with GenerateMenu component, passing the establishment name and user's drink list as props
  const generateMenu = () => {
    const menuWindow = window.open();
    const menuRoot = createRoot(menuWindow.document);
    menuRoot.render(<GenerateMenu name={establishmentName} userDrinkList={userDrinkList} drinkObject={props.drinkObject}/>);
  }


  return (
        <div>
          <p><strong>Select your available items to view a list of cocktails you are able to make, along with recommended items and nearly attainable drinks.</strong></p>
          <div className='checkboxGroup'>
            <div className='checkboxColumn'>
              <div className='checkboxLegend'>
                <legend>Please select the base spirits you have available:</legend>
              </div>
              <div className='checkboxContainer'>
                {/* Conditionally render checkboxes based on the stateful item arrays */}
                {
                  baseSpirits.map(element => {
                    return (
                      <div key={element}>
                        <input type='checkbox' id={element} name='ingredients' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label><br></br>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='checkboxColumn'>
              <div className='checkboxLegend'>
                <legend>Please select the liqueurs and supplementary alcoholic drinks you have available:</legend>
              </div>
              <div className='checkboxContainer'>
                {/* Conditionally render checkboxes based on the stateful item arrays */}
                {
                  supplementaryAlcohol.map(element => {
                    return (
                      <div key={element}>
                        <input type='checkbox' id={element} name='ingredients' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label><br></br>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='checkboxColumn'>
              <div className='checkboxLegend'>
                <legend>Please select the supplementary ingredients you have available:</legend>
              </div>
              <div className='checkboxContainer'>
                {/* Conditionally render checkboxes based on the stateful item arrays */}
                {
                  additionalIngredients.map(element => {
                    return (
                      <div key={element}>
                        <input type='checkbox' id={element} name='ingredients' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label><br></br>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='toolsAndSubmitGroup'>
            <div className='toolsGroup'>
              <legend className='toolsLegend'>Please select the tools you have available:</legend>
              {/* Conditionally render checkboxes based on the stateful item arrays */}
              <div className='toolsCheckboxes'>
                {
                  tools.map(element => {
                    return (
                      <span key={element}>
                        <input type='checkbox' id={element} name='tools' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label>
                        <div className='space'></div>
                      </span>
                    )
                  })
                }
              </div>
            </div>
            <div className='itemButtonGroup'>
              <button type='button' className='primaryButton' onClick={generateDrinkOptions}>See Cocktails</button>
              <div className='space'></div>
              <button type='button' className='primaryButton' onClick={resetDrinkOptions}>Reset</button>
            </div>
          </div>
          {/* Render component toggle buttons if the displayButtons state variable set to true */}
          {
            displayButtons ? (
            <>
            <hr></hr>
            <div className='displayButtonGroup'>
              <button type='button' className='primaryButton' onClick={viewDisplayDrinks}>View Available Drinks</button>
              <div className='space'></div>
              <button type='button' className='primaryButton' onClick={viewRecommendedItems}>View Recommended Items</button>
              <div className='space'></div>
              <button type='button' className='primaryButton' onClick={viewNearlyAttainableDrinks}>View Nearly Attainable Drinks</button>
            </div>
            {/* When one of the component toggle buttons is selected, display the chosen child component and pass data as props */}
            {
              showDisplayDrinks ? <DisplayDrinks drinkObject={props.drinkObject} userDrinkList={userDrinkList} /> :  <></>
            }
            {
              showRecommendedItems ? <RecommendedItems drinkObject={props.drinkObject} recommendedItems={recommendedItems} /> : <></>
            }
            {
              showNearlyAttainableDrinks ? <NearlyAttainableDrinks drinkObject={props.drinkObject} drinksOneAway={drinksOneAway} drinksTwoAway={drinksTwoAway} missingItemsByDrink={missingItemsByDrink} /> : <></>
            }
            {
              // If the user is able to make at least 1 drink, display the establishment name input box along with buttons to generate the menu or instructions
              userDrinkList.length > 0 ? (
                <div className='buttonContainer'>
                  <label className='establishmentNameLabel' htmlFor='establishment'>Enter Establisment Name: </label>
                  <input type='text' placeholder='Establishment Name' className='establishmentNameInput' id='establishment' onChange={updateEstablishment}></input>
                  <br></br>
                  <button type='button' className='primaryButton' onClick={generateMenu}>Generate Printable Menu</button>
                  <div className='space'></div>
                  <button type='button' className='primaryButton' onClick={generateInstructions}>Generate Printable Instructions</button>
                </div>
              ) : <></>
            }
            </>
            ) : <></>
          }
          <div id='scrollTarget'></div>
        </div>
  );
}

export default ItemSelector;