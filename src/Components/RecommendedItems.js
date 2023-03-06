import '../Styles/RecommendedItems.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';

// This component displays a list of recommended items for the user. Recommended items are missing items for all nearly available drinks (drinks where the user is missing only 1-2 items)
// Users can select from the list of recommended items to see which drinks it will help them make
const RecommendedItems = (props) => {
    // State variable to store sorted list of recommended items (based on frequency in nearly available drinks)
    const [sortedRecommendedItems, setSortedRecommendedItems] = useState([]);
    // State variable to store a html root that we will use to render data
    const [detailsRoot, setDetailsRoot] = useState();

    // Upon rendering, scroll page to component and create root for to use for rendering
    useEffect(() => {
        document.getElementById('recommendationsList').scrollIntoView({behavior: 'smooth'});
        const tempRoot = createRoot(document.getElementById('itemBox'));
        setDetailsRoot(tempRoot);
    }, [])


    // When receiving new recommendedItems props, create a sorted list of the top 10 recommended items
    useEffect(() => {
        let tempArr = [];
        for (let property in props.recommendedItems) {
            tempArr.push([property, props.recommendedItems[property]['Count']]);
        }

        tempArr.sort(function(a, b) {
            return b[1] - a[1];
        });

        let reducedArr = tempArr.slice(0, 10);
        setSortedRecommendedItems(reducedArr);
    }, [props.recommendedItems])


    // When the user selects an item, this function generates an HTML element with that item's details
    const displayItemDetails = (event) => {
        let itemName = event.target.value;

        // Boolean variables to identify whether a particular item is the only item missing for any drinks or one of two items missing for any drinks
        let displayOneAway = (props.recommendedItems[itemName]['Drinks One Away'].length > 0);
        let displayTwoAway = (props.recommendedItems[itemName]['Drinks Two Away'].length > 0);

        // Formatting update for certain items to improve grammar of output
        let formattedName = itemName;
        if (itemName === 'Strainer' || itemName === 'Blender' || itemName === 'Cocktail Shaker' || itemName === 'Lemon' || itemName === 'Lime' || itemName === 'Sugar Cube') {
            formattedName = 'a ' + itemName;
        }
        else if (itemName === 'Orange' || itemName === 'Egg White' || itemName === 'Egg Yolk') {
            formattedName = 'an ' + itemName;
        }
        
        // HTML element to store details on selected item
        const itemDetails = (
            <div>
                <h3 className='itemName'>{itemName}</h3>
                <div className='itemContainer'>
                    {/* Check display variable and render all drinks for which the selected item is the only missing item */}
                    {
                        displayOneAway ? (
                            <div>
                                <hr></hr>
                                <p><strong>Acquiring {formattedName} will enable you to make the following cocktails:</strong></p>
                                {
                                    props.recommendedItems[itemName]['Drinks One Away'].map(drink => {
                                        return (
                                            <p key={drink}><strong>{drink}:</strong> {props.drinkObject[drink]['Required Ingredients'].join(', ')}
                                            {
                                                props.drinkObject[drink]['Required Tools'][0] !== 'None' ? (
                                                    ', ' + props.drinkObject[drink]['Required Tools'].join(', ')
                                                ) : <></>
                                            }   
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        ) : <></>
                    }
                    {/* Check display variable and render all drinks for which the selected item is one of two missing items
                        Call function findOtherMissing to identify the other missing item (and display for the user) */}
                    {
                        displayTwoAway ? (
                            <div>
                                <hr></hr>
                                <p><strong>Acquiring {formattedName} and one other item will enable you to make the following cocktails:</strong></p>
                                {
                                    props.recommendedItems[itemName]['Drinks Two Away'].map(drink => {
                                        return (
                                            <p key={drink}><strong>{drink}:</strong> {props.drinkObject[drink]['Required Ingredients'].join(', ')}
                                            {
                                                props.drinkObject[drink]['Required Tools'][0] !== 'None' ? (
                                                    ', ' + props.drinkObject[drink]['Required Tools'].join(', ')
                                                ) : <></>
                                            } - {
                                                findOtherMissing(drink, itemName)
                                            }
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        ) : <></>
                    }
                </div>
            </div>
        )

        // Display the details of the selected drink to the detailsRoot
        detailsRoot.render(itemDetails);
    }


    // This function is called when the user selects an item which is one of two missing items for a particular drink
    // It identify and returns the other missing item in an italicized HTML element
    const findOtherMissing = (drink, mainItem) => {
        // Check all required items for the given drink and find which one is also in recommendedItems
        let missingItem = '';
        for (let i = 0; i < props.drinkObject[drink]['Required Ingredients'].length; i++) {
            let currItem = props.drinkObject[drink]['Required Ingredients'][i];
            if (currItem !== mainItem && currItem in props.recommendedItems) {
                missingItem = currItem;
                break;
            }
        }
        if (missingItem === '') {
            for (let i = 0; i < props.drinkObject[drink]['Required Tools'].length; i++) {
                let currItem = props.drinkObject[drink]['Required Tools'][i];
                if (currItem !== mainItem && currItem in props.recommendedItems) {
                    missingItem = currItem;
                    break;
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
        
        // Return HTML element with formattedName
        return (
            <><i>You are also missing {formattedName}</i></>
        )
    }

    
    return (
        <div>
            <div className='recommendationsGroup' id='recommendationsList'>
                <div className='itemsColumn'>
                    <div className='recommendationsContainer'>
                        {/* Check to see if the user already has every item */}
                        {
                            sortedRecommendedItems.length === 0 ? (<h4>You already have all the items in our database. Way to go!</h4>) : (
                                <div>
                                    <h4>Here are the top recommended items to enhance your mixed drink menu: </h4>
                                    <p>Select an item to see the cocktails it will help you make.</p>
                                    {/* If the user does not have every item, iterate through sortedRecommendedItems and render a button for each item */}
                                    {
                                        sortedRecommendedItems.map((item, index) => {
                                            return (
                                                <div className='itemButtonContainer' key={item}>
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
                    {/* The following div element is the location where itemDetails will be displayed upon selection */}
                    <div className='recommendationsContainer' id='itemBox'>
                        <h4>Item details will be displayed here upon selection.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedItems;