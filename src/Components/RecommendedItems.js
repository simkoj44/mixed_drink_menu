import '../Styles/RecommendedItems.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';

const RecommendedItems = (props) => {

    const [recommendedItems, setRecommendedItems] = useState({});
    const [sortedRecommendedItems, setSortedRecommendedItems] = useState([]);

    useEffect(() => {

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
                if (missingItems.length === 1) {
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
                else if (missingItems.length === 2) {
                    for (let i = 0; i < 2; i++) {
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
            }
        }

        setRecommendedItems(tempRecommendedItems);
        
        document.getElementById('recommendationsList').scrollIntoView({behavior: 'smooth'});

    }, [props.drinkObject, props.availableItems])

    useEffect(() => {

        let tempArr = [];
        for (let property in recommendedItems) {
            tempArr.push([property, recommendedItems[property]['Count']]);
        }

        tempArr.sort(function(a, b) {
            return b[1] - a[1];
        });

        let reducedArr = tempArr.slice(0, 10);
        setSortedRecommendedItems(reducedArr);

        console.log(reducedArr);
        console.log(recommendedItems);

    }, [recommendedItems])

    const findOtherMissing = (drink, mainItem) => {

        let missingItem = '';
        for (let i = 0; i < props.drinkObject[drink]['Required Ingredients'].length; i++) {
            let currItem = props.drinkObject[drink]['Required Ingredients'][i];
            if (currItem !== mainItem && currItem in recommendedItems) {
                missingItem = currItem;
            }
        }
        if (missingItem === '') {
            for (let i = 0; i < props.drinkObject[drink]['Required Tools'].length; i++) {
                let currItem = props.drinkObject[drink]['Required Tools'][i];
                if (currItem !== mainItem && currItem in recommendedItems) {
                    missingItem = currItem;
                }
            }
        }

        return (
            <><i>You are also missing {missingItem}</i></>
        )
    }

    const displayItemDetails = (event) => {
        let itemName = event.target.value;
        
        let displayOneAway = (recommendedItems[itemName]['Drinks One Away'].length > 0);
        let displayTwoAway = (recommendedItems[itemName]['Drinks Two Away'].length > 0);

        // Formatting update for certain items to improve grammar of output
        let formattedName = itemName;
        if (itemName === 'Strainer' || itemName === 'Blender' || itemName === 'Cocktail Shaker' || itemName === 'Lemon' || itemName === 'Lime' || itemName === 'Sugar Cube') {
            formattedName = 'a ' + itemName;
        }
        else if (itemName === 'Orange' || itemName === 'Egg White' || itemName === 'Egg Yolk') {
            formattedName = 'an ' + itemName;
        }
        
        const itemDetails = (
            <div>
                <h3 className='itemName'>{itemName}</h3>
                <div className='itemContainer'>
                    {
                        displayOneAway ? (
                            <div>
                                <hr></hr>
                                <p><strong>Acquiring {formattedName} will enable you to make the following cocktails:</strong></p>
                                {
                                    recommendedItems[itemName]['Drinks One Away'].map(drink => {
                                        return (
                                            <>
                                            <p><strong>{drink}:</strong> {props.drinkObject[drink]['Required Ingredients'].join(', ')}
                                            {
                                                props.drinkObject[drink]['Required Tools'][0] !== 'None' ? (
                                                    ', ' + props.drinkObject[drink]['Required Tools'].join(', ')
                                                ) : <></>
                                            }   
                                            </p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        ) : <></>
                    }
                    {
                        displayTwoAway ? (
                            <div>
                                <hr></hr>
                                <p><strong>Acquiring {formattedName} and one other item will enable you to make the following cocktails:</strong></p>
                                {
                                    recommendedItems[itemName]['Drinks Two Away'].map(drink => {
                                        return (
                                            <>
                                            <p><strong>{drink}:</strong> {props.drinkObject[drink]['Required Ingredients'].join(', ')}
                                            {
                                                props.drinkObject[drink]['Required Tools'][0] !== 'None' ? (
                                                    ', ' + props.drinkObject[drink]['Required Tools'].join(', ')
                                                ) : <></>
                                            } - {
                                                findOtherMissing(drink, itemName)
                                            }
                                            </p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        ) : <></>
                    }
                </div>
            </div>
        )

        // Create a root to display drink details upon selection
        const detailsRoot = createRoot(document.getElementById('itemBox'));
        detailsRoot.render(itemDetails);
    }

    return (
        <div>
            <div className='recommendationsGroup' id='recommendationsList'>
                <div className='itemsColumn'>
                    <div className='recommendationsContainer'>
                        <h4>Here are the top recommended items to enhance your mixed drink menu: </h4>
                        <p>Select an item to see the cocktails it will help you make.</p>
                        {
                            sortedRecommendedItems.map((item, index) => {
                                return (
                                    <div className='itemButtonContainer'>
                                        <button className='itemButton' onClick={displayItemDetails} type='button' value={item[0]} id={item[0]}>{index + 1}. {item[0]}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='space'></div>
                <div className='drinkColumn'>
                    <div className='recommendationsContainer' id='itemBox'>
                        <h4>Item details will be displayed here upon selection.</h4>
                        {/* <h4 className='drinkListIntro'>{drinksOneAway.length === 0 ? <></> : 'You are 1 item away from making the following cocktails: '}</h4>
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
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedItems;