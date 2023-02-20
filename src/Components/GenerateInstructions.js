import '../App.css';
import drink_directory from '../DrinkDirectory.js';
import React from 'react';

const GenerateInstructions = (props) => {

  return (
      <div style={{ textAlign: 'center'}}>
        <h1 style={{ marginBottom: '30px', fontFamily: 'sans-serif'}}>{props.name} Cocktail Preparation Instructions</h1>
        {
          props.userDrinkList.map((drink) => {
            return (
              <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                <h3>{drink}</h3>
                <p><strong>Required Ingredients: </strong>{drink_directory[drink]['Required Ingredients'].join(', ')}</p>
                <p><strong>Optional Ingredients: </strong>{drink_directory[drink]['Optional Items'].join(', ')}</p>
                <p><strong>Instructions: </strong>{drink_directory[drink]['Instructions']}</p>
                <p><strong>Traditional Glass: </strong>{drink_directory[drink]['Traditional Glass']}</p>
                <p>
                  <strong>Approximate Amount of Alcohol: </strong>{drink_directory[drink]['Approximate Amount of Alcohol']}
                  {drink_directory[drink]['Approximate Amount of Alcohol'] === 1.0 ? ' Standard Drink' : ' Standard Drinks'}
                </p>
              </div>
            )
          })
        }
      </div>
  );
}

export default GenerateInstructions;