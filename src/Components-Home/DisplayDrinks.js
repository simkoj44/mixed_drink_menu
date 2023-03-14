import '../Styles-Home/DisplayDrinks.css';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';

// This component displays the full list of drinks that the user can make, based on the items they have available
// Users can select from their list of drinks to see specific details on each cocktail
const DisplayDrinks = (props) => {
  // State variable to store a html root that we will use to render data
  const [detailsRoot, setDetailsRoot] = useState();
  

  // Upon rendering, scroll page to component and create root for to use for rendering
  useEffect(() => {
    document.getElementById('drinkList').scrollIntoView({behavior: 'smooth'});
    const tempRoot = createRoot(document.getElementById('detailsBox'));
    setDetailsRoot(tempRoot);
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
    
    // Display the details of the selected drink to the detailsRoot
    detailsRoot.render(drinkDetails);
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
                <div className='drinkButtonContainer' key={drink}>
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
    </div>
  );
}

export default DisplayDrinks;