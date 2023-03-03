import '../Styles/DisplayDrinks.css';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import GenerateInstructions from './GenerateInstructions.js';
import GenerateMenu from './GenerateMenu.js';

// This component displays the full list of drinks that the user can make, based on the items they have available
// Users can select from their list of drinks to see specific details on each cocktail
const DisplayDrinks = (props) => {
  // State variable to store the name of the user's establishment (if specified)
  const [establishmentName, setEstablishmentName] = useState('');
  

  // Upon rendering, scroll page to component
  useEffect(() => {
    document.getElementById('drinkList').scrollIntoView({behavior: 'smooth'});
  }, [])


  // Create an HTML element containing the selected drink's details
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
    instructionsRoot.render(<GenerateInstructions name={establishmentName} userDrinkList={props.userDrinkList} drinkObject={props.drinkObject}/>);
  }


  // Open new window with GenerateMenu component, passing the establishment name and user's drink list as props
  const generateMenu = () => {
    const menuWindow = window.open();
    const menuRoot = createRoot(menuWindow.document);
    menuRoot.render(<GenerateMenu name={establishmentName} userDrinkList={props.userDrinkList} drinkObject={props.drinkObject}/>);
  }


  return (
    <div>
      <div className='drinkGroup' id='drinkList'>
        <div className='drinkColumn'>
          <h4 className='drinkListIntro'>{props.userDrinkList.length === 0.0 ? 'You cannot make any cocktails.' : props.userDrinkList.length === 1.0 ? 'You can make 1 cocktail:' : 'You can make ' + props.userDrinkList.length + ' cocktails:'}</h4>
          <p>{props.userDrinkList.length === 0 ? 'Check out our recommended items to expand your menu.' : 'Select an option to see details.'}</p>
          {
            // Render a button for each drink the user is able to make
            props.userDrinkList.map(drink => {
              return (
                <div className='drinkButtonContainer'>
                  <button className='drinkButton' onClick={displayDrinkDetails} type='button' value={drink} id={drink}>{drink}</button>
                </div>
              )
            })
          }
        </div>
        <div className='space'></div>
        {/* The following div element is the location where drinkDetails will be displayed upon selection */}
        <div className='detailsColumn' id='detailsBox'>
          <h4>Drink details will be displayed here upon selection.</h4>
        </div>
      </div>
      {
        // If the user is able to make at least 1 drink, display the establishment name input box along with buttons to generate the menu or instructions
        props.userDrinkList.length > 0 ? (
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