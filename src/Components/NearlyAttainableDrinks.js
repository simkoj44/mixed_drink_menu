import '../Styles/NearlyAttainableDrinks.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';

const NearlyAttainableDrinks = (props) => {

    // Add scroll on button click

    return (
        <div>
            <div className='drinkGroup' id='drinkList'>
                <div className='drinkColumn'>
                    <h4 className='drinkListIntro'>Sina is Wobbuffet</h4>
                    <p>Cricks my Jaris</p>
                </div>
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
                <div className='space'></div>
                <div className='detailsColumn' id='detailsBox'>
                    <h4>Drink details will be displayed here upon selection.</h4>
                </div>
            </div>
        </div>
    )
}

export default NearlyAttainableDrinks;