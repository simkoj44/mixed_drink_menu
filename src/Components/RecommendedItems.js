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
                    for (let i = 0; i < missingItems.length; i++) {
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
                else {
                    for (let i = 0; i < missingItems.length; i++) {
                        if (!tempRecommendedItems[missingItems[i]]) {
                            tempRecommendedItems[missingItems[i]] = {
                                'Count': 0,
                                'Drinks One Away': [],
                                'Drinks Two Away': []
                            };
                        }
                    }
                }
            }
        }

        if (tempRecommendedItems['Rum']) {
            tempRecommendedItems['Dark Rum']['Count'] += (tempRecommendedItems['Rum']['Count']);
            tempRecommendedItems['Dark Rum']['Drinks One Away'].push(...tempRecommendedItems['Rum']['Drinks One Away']);
            tempRecommendedItems['Dark Rum']['Drinks Two Away'].push(...tempRecommendedItems['Rum']['Drinks Two Away']);
        
            tempRecommendedItems['White Rum']['Count'] += (tempRecommendedItems['Rum']['Count']);
            tempRecommendedItems['White Rum']['Drinks One Away'].push(...tempRecommendedItems['Rum']['Drinks One Away']);
            tempRecommendedItems['White Rum']['Drinks Two Away'].push(...tempRecommendedItems['Rum']['Drinks Two Away']);
        
            tempRecommendedItems['Gold Rum']['Count'] += (tempRecommendedItems['Rum']['Count']);
            tempRecommendedItems['Gold Rum']['Drinks One Away'].push(...tempRecommendedItems['Rum']['Drinks One Away']);
            tempRecommendedItems['Gold Rum']['Drinks Two Away'].push(...tempRecommendedItems['Rum']['Drinks Two Away']);

            tempRecommendedItems['Spiced Rum'] = {
                'Count': tempRecommendedItems['Rum']['Count'],
                'Drinks One Away': tempRecommendedItems['Rum']['Drinks One Away'],
                'Drinks Two Away': tempRecommendedItems['Rum']['Drinks Two Away']
            }

            tempRecommendedItems['Rum']['Count'] = 0;
        }
        if (tempRecommendedItems['Milk/Cream']) {
            tempRecommendedItems['Milk']['Count'] += (tempRecommendedItems['Milk/Cream']['Count']);
            tempRecommendedItems['Milk']['Drinks One Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks One Away']);
            tempRecommendedItems['Milk']['Drinks Two Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks Two Away']);
        
            tempRecommendedItems['Cream']['Count'] += (tempRecommendedItems['Milk/Cream']['Count']);
            tempRecommendedItems['Cream']['Drinks One Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks One Away']);
            tempRecommendedItems['Cream']['Drinks Two Away'].push(...tempRecommendedItems['Milk/Cream']['Drinks Two Away']);

            tempRecommendedItems['Milk/Cream']['Count'] = 0;
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

        // Formatting update for certain items to improve grammar of output
        let formattedName = missingItem;
        if (missingItem === 'Strainer' || missingItem === 'Blender' || missingItem === 'Cocktail Shaker' || missingItem === 'Lemon' || missingItem === 'Lime' || missingItem === 'Sugar Cube') {
            formattedName = 'a ' + missingItem;
        }
        else if (missingItem === 'Orange' || missingItem === 'Egg White' || missingItem === 'Egg Yolk') {
            formattedName = 'an ' + missingItem;
        }

        return (
            <><i>You are also missing {formattedName}</i></>
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
                        {
                            sortedRecommendedItems.length === 0 ? (<h4>You already have all the items in our database. Way to go!</h4>) : (
                                <div>
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
                            )
                        }
                    </div>
                </div>
                <div className='space'></div>
                <div className='drinkColumn'>
                    <div className='recommendationsContainer' id='itemBox'>
                        <h4>Item details will be displayed here upon selection.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedItems;