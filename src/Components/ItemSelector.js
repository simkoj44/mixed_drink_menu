import '../Styles/ItemSelector.css';
import React from 'react';
import DisplayDrinks from './DisplayDrinks.js';
import {useState, useEffect} from 'react';
import RecommendedItems from './RecommendedItems.js';

const ItemSelector = (props) => {

  // State variables to store ingredients/tools based on category
  const [baseSpirits, setBaseSpirits] = useState([]);
  const [supplementaryAlcohol, setSupplementaryAlcohol] = useState([]);
  const [additionalIngredients, setAdditionalIngredients] = useState([]);
  const [tools, setTools] = useState([]);
  // State variable to hold full list of items and whether the corresponding checkbox has been checked
  const [itemList, setItemList] = useState({});
  // State variable to hold the list of available items (which is passed as props to DisplayDrinks)
  const [availableItems, setAvailableItems] = useState({});
  // State variable to determine whether we need to display the DisplayDrinks component
  const [display, setDisplay] = useState(false);
  const [defaultDisplay, setDefaultDisplay] = useState(true);

  // This function is called when the component receives new props and it serves two purposes
  // 1) Separates ingredients/tools into respective arrays and updates state variables
  // 2) Initializes an object that holds all ingredients/tools and a boolean property to indicate whether that item's checkbox is checked
  useEffect(() => {
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

    // Sort the arrays so items are rendered in alphabetical order
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

  // Function called when 'See Cocktails' is clicked. It iterates through itemList to see what checkboxes are checked and passes those items in an object as props to DisplayDrinks.
  // It also updates the display state variable so DisplayDrinks is rendered
  const seeDrinkOptions = () => {
    let temp = {};
    for (let property in itemList) {
      if (itemList[property] === true) {
        temp[property] = '';
      }
    }

    // Series of special adjustments to account for drinks that accept one of several ingredients
    if (temp['Milk'] === '' || temp['Cream'] === '') {
      temp['Milk/Cream'] = '';
    }
    if (temp['Dark Rum'] === '' || temp['Gold Rum'] === '' || temp['White Rum'] === '' || temp['Spiced Rum'] === '') {
      temp['Rum'] = '';
    }
    temp['None'] = '';

    setAvailableItems(temp);
    setDisplay(true);
    setDefaultDisplay(true);
  }

  // Function called when 'Reset' is clicked. It unchecks all checkboxes, updates the itemList so all items are set to false, and deactivates the DisplayDrinks component
  const resetDrinkOptions = () => {
    let tempItemList = {};

    for (let i = 0; i < props.ingredientCollection.length; i++) {
      tempItemList[props.ingredientCollection[i]['Name']] = false;
    }

    setItemList(tempItemList);
    setDisplay(false);
    setDefaultDisplay(true);
    let x = document.getElementsByClassName('checkbox');
    for (let i = 0; i < x.length; i++) {
      x[i].checked = false;
    }
  }

  return (
        <div>
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
                      <>
                        <input type='checkbox' id={element} name='ingredients' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label><br></br>
                      </>
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
              {
                  supplementaryAlcohol.map(element => {
                    return (
                      <>
                        <input type='checkbox' id={element} name='ingredients' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label><br></br>
                      </>
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
              {
                  additionalIngredients.map(element => {
                    return (
                      <>
                        <input type='checkbox' id={element} name='ingredients' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label><br></br>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='toolsAndSubmitGroup'>
            <div className='toolsGroup'>
              <legend className='toolsLegend'>Please select the tools you have available:</legend>
              <div className='toolsCheckboxes'>
                {
                  tools.map(element => {
                    return (
                      <>
                        <input type='checkbox' id={element} name='tools' value={element} className='checkbox' onChange={handleCheckboxChange}/><label htmlFor={element}>{element}</label>
                        <div className='space'></div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className='itemButtonGroup'>
              <button type='button' className='primaryButton' onClick={seeDrinkOptions}>See Cocktails</button>
              <div className='space'></div>
              <button type='button' className='primaryButton' onClick={resetDrinkOptions}>Reset</button>
            </div>
          </div>
          {
            // Activates either DisplayDrinks or RecommendedItems component and passes the drinkObject and availableItems as props
            display ? (
            <>
            <hr></hr>
            <div className='displayButtonGroup'>
              <button type='button' className='primaryButton' onClick={() => setDefaultDisplay(true)}>View Available Drinks</button>
              <div className='space'></div>
              <button type='button' className='primaryButton' onClick={() => setDefaultDisplay(false)}>View Recommended Items</button>
            </div>
            {
              defaultDisplay ? <DisplayDrinks drinkObject={props.drinkObject} availableItems={availableItems} /> : <RecommendedItems drinkObject={props.drinkObject} availableItems={availableItems} />
            }
            </>
            ) : <></>
          }
        </div>
  );
}

export default ItemSelector;