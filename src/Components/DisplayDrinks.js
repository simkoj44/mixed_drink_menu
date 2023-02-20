import '../App.css';
import drink_directory from '../DrinkDirectory.js';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import GenerateInstructions from './GenerateInstructions.js';
import GenerateMenu from './GenerateMenu';

const DisplayDrinks = (props) => {
  
  // State variable to house the list of cocktails the user can make
  const [userDrinkList, setuserDrinkList] = useState([]);
  // State variable to store the name of the user's establishment (if specified)
  const [establishmentName, setEstablishmentName] = useState('');

  // Upon rendering this component with updated props, determine what drinks the user can make
  useEffect(() => {
    let temp = [];
    // For each drink in the directory, check to see if the user has all the required ingredients/tools
    for (let property in drink_directory) {
      let canMakeDrink = true;
      for (let i = 0; i < drink_directory[property]['Required Tools'].length; i++) {
        if (props.items.hasOwnProperty(drink_directory[property]['Required Tools'][i]) === false) {
          canMakeDrink = false;
          break;
        }
      }
      if (canMakeDrink) {
        for (let i = 0; i < drink_directory[property]['Required Ingredients'].length; i++) {
          if (props.items.hasOwnProperty(drink_directory[property]['Required Ingredients'][i]) === false) {
            canMakeDrink = false;
            break;
          }
        }
      }
      if (canMakeDrink) {
        temp.push(property);    
      }
    }
    // Update state variable to store list of drinks
    setuserDrinkList(temp);
    // Auto scroll to the drink list
    document.getElementById('drinkList').scrollIntoView({behavior: 'smooth'});
    
  }, [props.items])

  // Upon selecting a drink, display the drink's details
  const displayDrinkDetails = (event) => {
    let drinkName = event.target.value;
    const drinkDetails = (
      <div className='drinkContainer'>
        <h3 className='drinkName'>{drinkName}</h3>
        <p><strong>Base Spirit: </strong>{drink_directory[drinkName]['Base Spirit']}</p>
        <p><strong>Required Ingredients: </strong>{drink_directory[drinkName]['Required Ingredients'].join(', ')}</p>
        <p><strong>Optional Ingredients: </strong>{drink_directory[drinkName]['Optional Items'].join(', ')}</p>
        <p><strong>Required Tools: </strong>{drink_directory[drinkName]['Required Tools'].join(', ')}</p>
        <p><strong>Instructions: </strong>{drink_directory[drinkName]['Instructions']}</p>
        <p>
        <strong>Approximate Amount of Alcohol: </strong>{drink_directory[drinkName]['Approximate Amount of Alcohol']}
          {drink_directory[drinkName]['Approximate Amount of Alcohol'] === 1.0 ? ' Standard Drink' : ' Standard Drinks'}
        </p>
        <p><strong>IBA Official Cocktail: </strong>{drink_directory[drinkName]['IBA Official Cocktail']}</p>
      </div>
    );
    // Create a root to display the details within the drink details box
    const detailsRoot = createRoot(document.getElementById('detailsBox'));
    detailsRoot.render(drinkDetails);
  }

  // As user types in establishment name, update state
  const updateEstablishment = () => {
    let establishment = document.getElementById('establishment').value;
    setEstablishmentName(establishment);
  }

  // Open new window with GenerateInstructions component, passing the user's drink list as props
  const generateInstructions = () => {
    const instructionsWindow = window.open();
    const instructionsRoot = createRoot(instructionsWindow.document);
    instructionsRoot.render(<GenerateInstructions name={establishmentName} userDrinkList={userDrinkList} />);
  }

  // Open new window with GenerateMenu component, passing the user's drink list as props
  const generateMenu = () => {
    const menuWindow = window.open();
    const menuRoot = createRoot(menuWindow.document);
    menuRoot.render(<GenerateMenu name={establishmentName} userDrinkList={userDrinkList} />);
  }

  return (
    <div>
      <hr></hr>
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
            <div className='detailsColumn' id='detailsBox'>
              <h4>Drink details will be displayed here upon selection.</h4>
            </div>
          </div>
          {
            // If the user is able to make at least 1 drink, display the establishment name input box along with buttons to generate the menu or instructions
            userDrinkList.length > 0 ? (
              <div className='buttonContainer'>
                <input type='text' placeholder='Enter Establishment Name' className='establishmentNameInput' id='establishment' onChange={updateEstablishment}></input>
                <div className='space'></div>
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