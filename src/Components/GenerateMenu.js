import '../App.css';
import {useState, useEffect} from 'react';
import React from 'react';

const GenerateMenu = (props) => {

    // State variables to store available cocktails by category
    const [brandyDrinks, setBrandyDrinks] = useState([]);
    const [ginDrinks, setGinDrinks] = useState([]);
    const [rumDrinks, setRumDrinks] = useState([]);
    const [tequilaDrinks, setTequilaDrinks] = useState([]);
    const [vodkaDrinks, setVodkaDrinks] = useState([]);
    const [whiskeyDrinks, setWhiskeyDrinks] = useState([]);
    const [specialtyDrinks, setSpecialtyDrinks] = useState([]);
    const [combinationDrinks, setCombinationDrinks] = useState([]);

    // When component is rendered, sort drinks by category and update state variables
    useEffect(() => {

        // Temporary variables to break out drinks by category (and then update state variables)
        let brandyDrinkList = [];
        let ginDrinkList = [];
        let rumDrinkList = [];
        let tequilaDrinkList = [];
        let vodkaDrinkList = [];
        let whiskeyDrinkList = [];
        let specialtyDrinkList = [];
        let combinationDrinkList = [];

        // Iterate through available drinks (received from props) and add to appropriate category. Statements are sorted by drink frequency in database to minimize runtime. 
        for (let i = 0; i < props.userDrinkList.length; i++) {
            switch (props.drinkObject[props.userDrinkList[i]]['Base Spirit']) {
                case 'Gin':
                    ginDrinkList.push(props.userDrinkList[i]);
                    break;
                case 'Specialty':
                    specialtyDrinkList.push(props.userDrinkList[i]);
                    break;
                case 'Vodka':
                    vodkaDrinkList.push(props.userDrinkList[i]);
                    break;
                case 'Rum':
                    rumDrinkList.push(props.userDrinkList[i]);
                    break;
                case 'Whiskey':
                    whiskeyDrinkList.push(props.userDrinkList[i]);
                    break;    
                case 'Combination':
                    combinationDrinkList.push(props.userDrinkList[i]);
                    break;   
                case 'Brandy':
                    brandyDrinkList.push(props.userDrinkList[i]);
                    break;
                case 'Tequila':
                    tequilaDrinkList.push(props.userDrinkList[i]);
                    break;
                default:
                    break;
            }
        }

        setBrandyDrinks(brandyDrinkList);
        setGinDrinks(ginDrinkList);
        setRumDrinks(rumDrinkList);
        setTequilaDrinks(tequilaDrinkList);
        setVodkaDrinks(vodkaDrinkList);
        setWhiskeyDrinks(whiskeyDrinkList);
        setSpecialtyDrinks(specialtyDrinkList);
        setCombinationDrinks(combinationDrinkList);

    }, [props.userDrinkList, props.drinkObject])
    
    return (
        <div style={{ textAlign: 'center', width: '90%', margin: 'auto', border: '1px solid black' }}>
            <h1 style={{ paddingTop: '30px', marginBottom: '30px', fontFamily: 'sans-serif' }}>{props.name} Cocktail Menu</h1>
            <hr></hr>
            {/* Following code will render drink menu broken out by category. If a category does not have any available drinks, it is skipped. */}
            {
                brandyDrinks.length <= 0 ? <></> : (
                    <div>
                        <h2 style={{fontFamily: 'sans-serif'}}>Brandy Cocktails</h2>
                        {
                            brandyDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                ginDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Gin Cocktails</h2>
                        {
                            ginDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                rumDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Rum Cocktails</h2>
                        {
                            rumDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                tequilaDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Tequila Cocktails</h2>
                        {
                            tequilaDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                vodkaDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Vodka Cocktails</h2>
                        {
                            vodkaDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                whiskeyDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Whiskey Cocktails</h2>
                        {
                            whiskeyDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                specialtyDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Specialty Cocktails</h2>
                        {
                            specialtyDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                combinationDrinks.length <= 0 ? <></> : (
                    <div>
                        <hr></hr>
                        <h2 style={{fontFamily: 'sans-serif'}}>Multiple-Base Cocktails</h2>
                        {
                            combinationDrinks.map((drink) => {
                                return (
                                    <div style={{ padding: '5px', width: '80%', breakInside: 'avoid', textAlign: 'left', marginLeft: '10%', fontFamily: 'sans-serif', fontSize: '12px'}}>
                                        <hr></hr>
                                        <h2>{drink}</h2>
                                        <p><strong>Ingredients: </strong>{props.drinkObject[drink]['Required Ingredients'].join(', ')}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}

export default GenerateMenu;