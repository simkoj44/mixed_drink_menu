import '../App.css';
import React from 'react';

const GenerateInstructions = (props) => {

  // Iterate through the list of the user's available drinks (received as props) and display that drink's details and instructions
  return (
      <div style={{ textAlign: 'center'}}>
        <h1 style={{ marginBottom: '30px', fontFamily: 'sans-serif'}}>{props.name} Cocktail Preparation Instructions</h1>
        {
          props.userDrinkList.map((drink) => {
            return (
              <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                <h3>{drink}</h3>
                <p><strong>Required Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                <p><strong>Optional Ingredients: </strong>{props.drinkObject[drink]['Optional Items'].join(', ')}</p>
                <p><strong>Instructions: </strong>{props.drinkObject[drink]['Instructions']}</p>
                <p><strong>Traditional Glass: </strong>{props.drinkObject[drink]['Traditional Glass']}</p>
                <p>
                  <strong>Approximate Amount of Alcohol: </strong>{props.drinkObject[drink]['Approximate Amount of Alcohol']}
                  {props.drinkObject[drink]['Approximate Amount of Alcohol'] === 1.0 ? ' Standard Drink' : ' Standard Drinks'}
                </p>
              </div>
            )
          })
        }
      </div>
  );
}

export default GenerateInstructions;