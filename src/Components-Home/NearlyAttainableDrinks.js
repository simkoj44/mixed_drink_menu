import '../Styles-Home/NearlyAttainableDrinks.css';
import React from 'react';
import {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';

// Subcomponent of ItemSelector
// This component displays a list of nearly attainable drinks, which are drinks where the user is only missing 1-2 items
// Users can select from the list of drinks to see specific details on each cocktail and the items they are missing

const NearlyAttainableDrinks = (props) => {
    // Variable to store a html root that we will use to render data
    const [detailsRoot, setDetailsRoot] = useState();


    // Upon rendering, scroll page to component and create root for to use for rendering
    useEffect(() => {
        document.getElementById('drinkList').scrollIntoView({behavior: 'smooth'});
        const tempRoot = createRoot(document.getElementById('detailsBox'));
        setDetailsRoot(tempRoot);
    }, [])


    // Create an HTML element containing the selected drink's details and include a list of all missing items for that drink
    const displayDrinkDetails = (event) => {
        let drinkName = event.target.value;
        const drinkDetails = (
            <div className='drinkContainer'>
                <h3 className='drinkName'>{drinkName}</h3>
                <p className='missingItems'><i>You are missing: {props.missingItemsByDrink[drinkName].join(', ')}</i></p>
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
        detailsRoot.render(drinkDetails);
    }

    
    return (
        <div>
            <div className='drinkGroup' id='drinkList'>
                <div className='drinkColumn'>
                    <h4 className='drinkListIntro'>{props.drinksOneAway.length === 0 ? <></> : 'You are 1 item away from making the following cocktails: '}</h4>
                    {/* Iterate through the list of drinks where the user is missing only 1 item and render a button for each drink */}
                    {
                        props.drinksOneAway.map(drink => {
                            return (
                                <div className='drinkButtonContainer' key={drink}>
                                    <button className='drinkButton' onClick={displayDrinkDetails} type='button' value={drink} id={drink}>{drink}</button>
                                </div>
                            )
                        })
                    }
                    <h4 className='drinkListIntro'>{(props.drinksOneAway.length < 10 && props.drinksTwoAway.length > 0) ? 'You are 2 items away from making the following cocktails: ' : <></>}</h4>
                    <h4 className='drinkListIntro'>{(props.drinksOneAway.length === 0 && props.drinksTwoAway.length === 0) ? 'You are not within 2 items of making any additional drinks.' : <></>}</h4>
                    {/* If the user has fewer than 10 drinks in drinksOneAway, also iterate through all drinks where the user is missing only 2 items and render a button for each drink */}
                    {
                        props.drinksOneAway.length < 10 ? (
                            props.drinksTwoAway.map(drink => {
                                return (
                                    <div className='drinkButtonContainer' key={drink}>
                                        <button className='drinkButton' onClick={displayDrinkDetails} type='button' value={drink} id={drink}>{drink}</button>
                                    </div>
                                )
                            })
                        ) : <></>
                    }
                </div>
                <div className='space'></div>
                {/* The following div element is the location where drinkDetails will be displayed upon selection */}
                <div className='detailsColumn' id='detailsBox'>
                    <h4>Drink details will be displayed here upon selection.</h4>
                </div>
            </div>
        </div>
    )
}

export default NearlyAttainableDrinks;