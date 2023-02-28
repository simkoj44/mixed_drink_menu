import '../Styles/DisplayDrinks.css';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import GenerateInstructions from './GenerateInstructions.js';
import GenerateMenu from './GenerateMenu.js';

const DisplayDrinks = (props) => {
  
  // State variable to house the list of cocktails the user can make
  const [userDrinkList, setuserDrinkList] = useState([]);
  // State variable to store the name of the user's establishment (if specified)
  const [establishmentName, setEstablishmentName] = useState('');
  
  // Upon rendering this component with updated props, determine what drinks the user can make
  useEffect(() => {
    let temp = [];
    // For each drink in the directory, check to see if the user has all the required ingredients/tools
    for (let property in props.drinkObject) {
      let canMakeDrink = true;
      for (let i = 0; i < props.drinkObject[property]['Required Tools'].length; i++) {
        if (props.availableItems.hasOwnProperty(props.drinkObject[property]['Required Tools'][i]) === false) {
          canMakeDrink = false;
          break;
        }
      }
      if (canMakeDrink) {
        for (let i = 0; i < props.drinkObject[property]['Required Ingredients'].length; i++) {
          if (props.availableItems.hasOwnProperty(props.drinkObject[property]['Required Ingredients'][i]) === false) {
            canMakeDrink = false;
            break;
          }
        }
      }
      if (canMakeDrink) {
        temp.push(property);    
      }
    }
    // Sort temporary array so the list of drinks will be rendered in alphabetical order
    temp.sort();
    // Update state variable to store list of drinks
    setuserDrinkList(temp);
    // Auto scroll to the drink list
    document.getElementById('drinkList').scrollIntoView({behavior: 'smooth'});
  }, [props.availableItems, props.drinkObject])

  // Upon selecting a drink, display the drink's details
  const displayDrinkDetails = (event) => {
    let drinkName = event.target.value;
    const drinkDetails = (
      <div className='drinkContainer'>
        <h3 className='drinkName'>{drinkName}</h3>
        <p><strong>Base Spirit: </strong>{props.drinkObject[drinkName]['Base Spirit']}</p>
        <p><strong>Required Ingredients: </strong>{props.drinkObject[drinkName]['Required Ingredients'].join(', ')}</p>
        <p><strong>Optional Ingredients: </strong>{props.drinkObject[drinkName]['Optional Items'].join(', ')}</p>
        <p><strong>Required Tools: </strong>{props.drinkObject[drinkName]['Required Tools'].join(', ')}</p>
        <p><strong>Instructions: </strong>{props.drinkObject[drinkName]['Instructions']}</p>
        <p>
        <strong>Approximate Amount of Alcohol: </strong>{props.drinkObject[drinkName]['Approximate Amount of Alcohol']}
          {props.drinkObject[drinkName]['Approximate Amount of Alcohol'] === 1.0 ? ' Standard Drink' : ' Standard Drinks'}
        </p>
        <p><strong>IBA Official Cocktail: </strong>{props.drinkObject[drinkName]['IBA Official Cocktail']}</p>
      </div>
    );
    // Create a root to display drink details upon selection
    const detailsRoot = createRoot(document.getElementById('detailsBox'));
    detailsRoot.render(drinkDetails);
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
      <div className='drinkGroup' id='drinkList'>
        <div className='drinkColumn'>
          <h4 className='drinkListIntro'>{userDrinkList.length === 0.0 ? 'You cannot make any cocktails.' : userDrinkList.length === 1.0 ? 'You can make 1 cocktail:' : 'You can make ' + userDrinkList.length + ' cocktails:'}</h4>
          <p>{userDrinkList.length === 0 ? 'Add some ingredients to get started.' : 'Select an option to see details.'}</p>
          {
            // Render a button for each drink the user is able to make
            userDrinkList.map(drink => {
              return (
                <div className='drinkButtonContainer'>
                  <button className='drinkButton' onClick={displayDrinkDetails} type='button' value={drink} id={drink}>{drink}</button>
                </div>
              )
            })
          }
        </div>
        <div className='space'></div>
        <div className='detailsColumn' id='detailsBox'>
          <h4>Drink details will be displayed here upon selection.</h4>
        </div>
      </div>
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
    </div>
  );
}

export default DisplayDrinks;