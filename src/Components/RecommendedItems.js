import '../Styles/RecommendedItems.css';
import React from 'react';
import {useState, useEffect} from 'react';

const RecommendedItems = (props) => {

    const [missingItemsByDrink, setMissingItemsByDrink] = useState({});
    const [drinksOneAway, setDrinksOneAway] = useState([]);
    const [drinksTwoAway, setDrinksTwoAway] = useState([]);
    const [recommendedItems, setRecommendedItems] = useState({});

    useEffect(() => {

        let tempMissingItemsByDrink = {};
        let tempDrinksOneAway = [];
        let tempDrinksTwoAway = [];
        let tempRecommendedItems = {};

        for (let property in props.drinkObject) {
            let missingItems = [];
            let canMakeDrink = true;
            for (let i = 0; i < props.drinkObject[property]['Required Tools'].length; i++) {
                if (props.availableItems.hasOwnProperty(props.drinkObject[property]['Required Tools'][i]) === false) {
                    canMakeDrink = false;
                    missingItems.push(props.drinkObject[property]['Required Tools'][i]);
                }
            }
            for (let i = 0; i < props.drinkObject[property]['Required Ingredients'].length; i++) {
                if (props.availableItems.hasOwnProperty(props.drinkObject[property]['Required Ingredients'][i]) === false) {
                  canMakeDrink = false;
                  missingItems.push(props.drinkObject[property]['Required Ingredients'][i]);
                }
            }
            if (!canMakeDrink) {
                tempMissingItemsByDrink[property] = missingItems;
                if (tempMissingItemsByDrink[property].length === 1) {
                    tempDrinksOneAway.push(property);
                    if (tempRecommendedItems[missingItems[0]]) {
                        tempRecommendedItems[missingItems[0]] += 1
                    }
                    else {
                        tempRecommendedItems[missingItems[0]] = 1
                    }
                }
                else if (tempMissingItemsByDrink[property].length === 2) {
                    tempDrinksTwoAway.push(property);
                    for (let i = 0; i < 2; i++) {
                        if (tempRecommendedItems[missingItems[i]]) {
                            tempRecommendedItems[missingItems[i]] += 1
                        }
                        else {
                            tempRecommendedItems[missingItems[i]] = 1
                        }
                    }
                }
            }
        }

        setMissingItemsByDrink(tempMissingItemsByDrink);
        setDrinksOneAway(tempDrinksOneAway);
        setDrinksTwoAway(tempDrinksTwoAway);
        setRecommendedItems(tempRecommendedItems);

    }, [props.drinkObject, props.availableItems])

    return (
        <div>
            <div className='recommendationsGroup'>
                <div className='itemsColumn'>
                    <div className='recommendationsContainer'>
                        <h4>Here are the top 10 recommended items to enhance your mixed drink menu: </h4>
                        {/* List of Recommended Items (sorted) */}
                    </div>
                </div>
                <div className='space'></div>
                <div className='drinkColumn'>
                    <div className='recommendationsContainer'>
                        <h4 className='drinkListIntro'>{drinksOneAway.length === 0 ? <></> : 'You are 1 item away from making the following cocktails: '}</h4>
                        {
                            drinksOneAway.map(drink => {
                                return (
                                    <p>{drink}</p>
                                )
                            })
                        }
                        <h4 className='drinkListIntro'>{drinksOneAway.length < 10 ? 'You are 2 items away from making the following cocktails: ' : <></>}</h4>
                        {
                            drinksOneAway.length < 10 ? (
                                drinksTwoAway.map(drink => {
                                    return (
                                        <p>{drink}</p>
                                    )
                                })
                            ) : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedItems;