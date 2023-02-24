import '../App.css';
import React from 'react';
import DisplayDrinks from './DisplayDrinks.js';

class ItemSelector extends React.Component {
    constructor(props) {
      super(props);
      // ingredientsAndTools is an object that ties to a boolean variable to each checkbox, indicating whether it is checked
      this.state = {
        ingredientsAndTools: {
          'Absinthe': false,
          'Agave Syrup': false,
          'Amaretto': false,
          'Amaro Nonino': false,
          'Anise Liqueur': false,
          'Aperol': false,
          'Apple Juice': false,
          'Applejack': false,
          'Apricot Brandy': false,
          'Baking Soda': false,
          'Benedictine': false,
          'Bitter Orange Aperitif': false,
          'Bitters': false,
          'Blackberry Liqueur': false,
          'Blended Scotch Whiskey': false,
          'Blender': false,
          'Blue Curacao': false,
          'Bourbon Whiskey': false,
          'Brandy': false,
          'Cachaca': false,
          'Carbonated Water': false,
          'Chamomile Cordial': false,
          'Cherry Liqueur': false,
          'Cinnamon Syrup': false,
          'Cocktail Shaker': false,
          'Coffee': false,
          'Coffee Liqueur': false,
          'Cola': false,
          'Cranberry Juice': false,
          'Cream': false,
          'Cream of Coconut': false,
          'Creme de Cacao': false,
          'Creme de Cassis': false,
          'Creme de Menthe': false,
          'Creme de Violette': false,
          'Cuban Aguardiente': false,
          'Dark Creme de Cacao': false,
          'Dark Rum': false,
          'Drambuie': false,
          'Dry Vermouth': false,
          'Egg White': false,
          'Egg Yolk': false,
          'Elderflower Cordial': false,
          'Espadin Mezcal': false,
          'Espresso': false,
          'Falernum': false,
          'Fernet-Branca': false,
          'Galliano Liqueur': false,
          'Gin': false,
          'Ginger': false,
          'Ginger Ale': false,
          'Ginger Beer': false,
          'Gold Rum': false,
          'Grapefruit Juice': false,
          'Grapefruit Soda': false,
          'Grappa': false,
          'Green Chartreuse': false,
          'Grenadine': false,
          'Guinness': false,
          'Honey': false,
          'Honey Syrup': false,
          'Hot Sauce': false,
          'Irish Cream': false,
          'Irish Whiskey': false,
          'Lemon': false,
          'Lemon Juice': false,
          'Lemon Vodka': false,
          'Lillet Blanc': false,
          'Lime': false,
          'Lime Juice': false,
          'Maraschino Liqueur': false,
          'Milk': false,
          'Milk/Cream': false,
          'Mint': false,
          'None': false,
          'Orange': false,
          'Orange Bitters': false,
          'Orange Curacao': false,
          'Orange Flower Water': false,
          'Orange Juice': false,
          'Orgeat Syrup': false,
          'Peach Puree': false,
          'Peach Schnapps': false,
          'Pepper': false,
          "Peychaud's Bitters": false,
          'Pineapple Juice': false,
          'Pisco Brandy': false,
          'Port Wine': false,
          'Raspberry Liqueur': false,
          'Raspberry Syrup': false,
          'Red Wine': false,
          'Reposado Tequila': false,
          'Rum': false,
          'Rye Whiskey': false,
          'Salt': false,
          'Simple Syrup': false,
          'Single Malt Scotch Whiskey': false,
          'Sparkling Wine': false,
          'Spiced Rum': false,
          'Sprite': false,
          'Strainer': false,
          'Sugar': false,
          'Sugar Cube': false,
          'Sweet Vermouth': false,
          'Tequila': false,
          'Tomato Juice': false,
          'Tonic Water': false,
          'Triple Sec': false,
          'Vodka': false,
          'White Rum': false,
          'White Wine': false,
          'Worcestershire Sauce': false,
          'Yellow Chartreuse': false,
          'Yellow Grapefruit': false,
        },
        // display is used to let the program know whether it should render DisplayDrinks
        display: false,
        // availableItems is the list of items that have been selected at the time you click 'See Cocktails'
        availableItems: {}
      };
      // Bind class functions to this component
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
      this.seeDrinkOptions = this.seeDrinkOptions.bind(this);
      this.resetDrinkOptions = this.resetDrinkOptions.bind(this);
    }
  
    // Updates state.ingredientsAndTools when a checkbox is selected/unselected
    handleCheckboxChange = (event) => {
      let state = this.state;
      state.ingredientsAndTools[event.target.value] = event.target.checked;
      this.setState(state);
    }
  
    // Activates DisplayDrinks component after assembling full list of ingredients/tools available
    seeDrinkOptions = () => {
      
      // Iterate through state ingredientsAndTools to see what we have available and add to the temporary variable
      let temp = {};
      for (let property in this.state.ingredientsAndTools) {
        if (this.state.ingredientsAndTools[property] === true) {
          temp[property] = '';
        }
      }

      // Series of special adjustments to account for drinks that accept one of several ingredients
      if (temp['Milk'] === '' || temp['Cream'] === '') {
        temp['Milk/Cream'] = '';
      }
      if (temp['Dark Rum'] === '' || temp['Gold Rum'] === '' || temp['White Rum'] === '' || temp['Spiced Rum'] === '') {
        temp['Rum'] = '';
      }
      temp['None'] = true;

      // Update state availableItems with our list of ingredients and tools
      let state = this.state;
      state.display = true;
      state.availableItems = temp
      this.setState(state);
    }
  
    // Reset checkboxes, reset state variables, and unrender DisplayDrinks component
    resetDrinkOptions = () => {
      let state = this.state;
      for (let property in state.ingredientsAndTools) {
        state.ingredientsAndTools[property] = false;
      }
  
      state.availableItems = {};
      state.display = false;
      this.setState(state);
    }
  
    render() {

      let base = [];
      let supplementary = [];
      let additional = [];
      let tools = [];
      for (let i = 0; i < this.props.ingredientCollection.length; i++) {
        switch (this.props.ingredientCollection[i]['Type']) {
          case 'Base Spirit':
            base.push(this.props.ingredientCollection[i]['Name']);
            break;
          case 'Additional Ingredient':
            additional.push(this.props.ingredientCollection[i]['Name']);
            break;
          case 'Supplementary Alcoholic Drink':
            supplementary.push(this.props.ingredientCollection[i]['Name']);
            break;
          default:
            tools.push(this.props.ingredientCollection[i]['Name']);
            break;
        }
      }

      console.log(base);
      console.log(supplementary);
      console.log(additional);
      console.log(tools);
  
      return (
        <>
          <div className='checkboxGroup'>
            <div className='checkboxColumn'>
              <div className='checkboxLegend'>
              <legend>Please select the base spirits you have available:</legend>
              </div>
              <div className='checkboxContainer'>
                <input onChange={this.handleCheckboxChange} id="Apricot Brandy" type="checkbox" name="ingredients" value="Apricot Brandy" checked={this.state.ingredientsAndTools["Apricot Brandy"]} /> <label for="Apricot Brandy">Apricot Brandy</label><br/>
                <input onChange={this.handleCheckboxChange} id="Blended Scotch Whiskey" type="checkbox" name="ingredients" value="Blended Scotch Whiskey" checked={this.state.ingredientsAndTools["Blended Scotch Whiskey"]} /> <label for="Blended Scotch Whiskey">Blended Scotch Whiskey</label><br/>
                <input onChange={this.handleCheckboxChange} id="Bourbon Whiskey" type="checkbox" name="ingredients" value="Bourbon Whiskey" checked={this.state.ingredientsAndTools["Bourbon Whiskey"]} /> <label for="Bourbon Whiskey">Bourbon Whiskey</label><br/>
                <input onChange={this.handleCheckboxChange} id="Brandy" type="checkbox" name="ingredients" value="Brandy" checked={this.state.ingredientsAndTools["Brandy"]} /> <label for="Brandy">Brandy</label><br/>
                <input onChange={this.handleCheckboxChange} id="Dark Rum" type="checkbox" name="ingredients" value="Dark Rum" checked={this.state.ingredientsAndTools["Dark Rum"]}  /> <label for="Dark Rum">Dark Rum</label><br/>
                <input onChange={this.handleCheckboxChange} id="Espadin Mezcal" type="checkbox" name="ingredients" value="Espadin Mezcal" checked={this.state.ingredientsAndTools["Espadin Mezcal"]} /> <label for="Espadin Mezcal">Espadin Mezcal</label><br/>
                <input onChange={this.handleCheckboxChange} id="Gin" type="checkbox" name="ingredients" value="Gin" checked={this.state.ingredientsAndTools["Gin"]} /> <label for="Gin">Gin</label><br/>
                <input onChange={this.handleCheckboxChange} id="Gold Rum" type="checkbox" name="ingredients" value="Gold Rum" checked={this.state.ingredientsAndTools["Gold Rum"]} /> <label for="Gold Rum">Gold Rum</label><br/>
                <input onChange={this.handleCheckboxChange} id="Grappa" type="checkbox" name="ingredients" value="Grappa" checked={this.state.ingredientsAndTools["Grappa"]} /> <label for="Grappa">Grappa</label><br/>
                <input onChange={this.handleCheckboxChange} id="Irish Whiskey" type="checkbox" name="ingredients" value="Irish Whiskey" checked={this.state.ingredientsAndTools["Irish Whiskey"]} /> <label for="Irish Whiskey">Irish Whiskey</label><br/>
                <input onChange={this.handleCheckboxChange} id="Lemon Vodka" type="checkbox" name="ingredients" value="Lemon Vodka" checked={this.state.ingredientsAndTools["Lemon Vodka"]} /> <label for="Lemon Vodka">Lemon Vodka</label><br/>
                <input onChange={this.handleCheckboxChange} id="Pisco Brandy" type="checkbox" name="ingredients" value="Pisco Brandy" checked={this.state.ingredientsAndTools["Pisco Brandy"]} /> <label for="Pisco Brandy">Pisco Brandy</label><br/>
                <input onChange={this.handleCheckboxChange} id="Rye Whiskey" type="checkbox" name="ingredients" value="Rye Whiskey" checked={this.state.ingredientsAndTools["Rye Whiskey"]} /> <label for="Rye Whiskey">Rye Whiskey</label><br/>
                <input onChange={this.handleCheckboxChange} id="Reposado Tequila" type="checkbox" name="ingredients" value="Reposado Tequila" checked={this.state.ingredientsAndTools["Reposado Tequila"]} /> <label for="Reposado Tequila">Reposado Tequila</label><br/>
                <input onChange={this.handleCheckboxChange} id="Single Malt Scotch Whiskey" type="checkbox" name="ingredients" value="Single Malt Scotch Whiskey" checked={this.state.ingredientsAndTools["Single Malt Scotch Whiskey"]} /> <label for="Single Malt Scotch Whiskey">Single Malt Scotch Whiskey</label><br/>
                <input onChange={this.handleCheckboxChange} id="Spiced Rum" type="checkbox" name="ingredients" value="Spiced Rum" checked={this.state.ingredientsAndTools["Spiced Rum"]} /> <label for="Spiced Rum">Spiced Rum</label><br/>
                <input onChange={this.handleCheckboxChange} id="Tequila" type="checkbox" name="ingredients" value="Tequila" checked={this.state.ingredientsAndTools["Tequila"]} /> <label for="Tequila">Tequila</label><br/>
                <input onChange={this.handleCheckboxChange} id="Vodka" type="checkbox" name="ingredients" value="Vodka" checked={this.state.ingredientsAndTools["Vodka"]} /> <label for="Vodka">Vodka</label><br/>
                <input onChange={this.handleCheckboxChange} id="White Rum" type="checkbox" name="ingredients" value="White Rum" checked={this.state.ingredientsAndTools["White Rum"]} /> <label for="White Rum">White Rum</label><br/>
                </div>
            </div>
            <div className='checkboxColumn'>
              <div className='checkboxLegend'>
              <legend>Please select the liqueurs and supplementary alcoholic drinks you have available:</legend>
              </div>
              <div className='checkboxContainer'>
                <input onChange={this.handleCheckboxChange} id="Absinthe" type="checkbox" name="ingredients" value="Absinthe" checked={this.state.ingredientsAndTools["Absinthe"]} /> <label for="Absinthe">Absinthe</label><br/>
                <input onChange={this.handleCheckboxChange} id="Amaretto" type="checkbox" name="ingredients" value="Amaretto" checked={this.state.ingredientsAndTools["Amaretto"]} /> <label for="Amaretto">Amaretto</label><br/>
                <input onChange={this.handleCheckboxChange} id="Amaro Nonino" type="checkbox" name="ingredients" value="Amaro Nonino" checked={this.state.ingredientsAndTools["Amaro Nonino"]} /> <label for="Amaro Nonino">Amaro Nonino</label><br/>
                <input onChange={this.handleCheckboxChange} id="Anise Liqueur" type="checkbox" name="ingredients" value="Anise Liqueur" checked={this.state.ingredientsAndTools["Anise Liqueur"]} /> <label for="Anise Liqueur">Anise Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Aperol" type="checkbox" name="ingredients" value="Aperol" checked={this.state.ingredientsAndTools["Aperol"]} /> <label for="Aperol">Aperol</label><br/>
                <input onChange={this.handleCheckboxChange} id="Applejack" type="checkbox" name="ingredients" value="Applejack" checked={this.state.ingredientsAndTools["Applejack"]} /> <label for="Applejack">Applejack</label><br/>
                <input onChange={this.handleCheckboxChange} id="Benedictine" type="checkbox" name="ingredients" value="Benedictine" checked={this.state.ingredientsAndTools["Benedictine"]} /> <label for="Benedictine">Benedictine</label><br/>
                <input onChange={this.handleCheckboxChange} id="Bitter Orange Aperitif" type="checkbox" name="ingredients" value="Bitter Orange Aperitif" checked={this.state.ingredientsAndTools["Bitter Orange Aperitif"]} /> <label for="Bitter Orange Aperitif">Bitter Orange Aperitif</label><br/>
                <input onChange={this.handleCheckboxChange} id="Blackberry Liqueur" type="checkbox" name="ingredients" value="Blackberry Liqueur" checked={this.state.ingredientsAndTools["Blackberry Liqueur"]} /> <label for="Blackberry Liqueur">Blackberry Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Blue Curacao" type="checkbox" name="ingredients" value="Blue Curacao" checked={this.state.ingredientsAndTools["Blue Curacao"]} /> <label for="Blue Curacao">Blue Curacao</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cachaca" type="checkbox" name="ingredients" value="Cachaca" checked={this.state.ingredientsAndTools["Cachaca"]} /> <label for="Cachaca">Cachaca</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cherry Liqueur" type="checkbox" name="ingredients" value="Cherry Liqueur" checked={this.state.ingredientsAndTools["Cherry Liqueur"]} /> <label for="Cherry Liqueur">Cherry Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Coffee Liqueur" type="checkbox" name="ingredients" value="Coffee Liqueur" checked={this.state.ingredientsAndTools["Coffee Liqueur"]} /> <label for="Coffee Liqueur">Coffee Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Creme de Cacao" type="checkbox" name="ingredients" value="Creme de Cacao" checked={this.state.ingredientsAndTools["Creme de Cacao"]} /> <label for="Creme de Cacao">Creme de Cacao</label><br/>
                <input onChange={this.handleCheckboxChange} id="Creme de Cassis" type="checkbox" name="ingredients" value="Creme de Cassis" checked={this.state.ingredientsAndTools["Creme de Cassis"]} /> <label for="Creme de Cassis">Creme de Cassis</label><br/>
                <input onChange={this.handleCheckboxChange} id="Creme de Menthe" type="checkbox" name="ingredients" value="Creme de Menthe" checked={this.state.ingredientsAndTools["Creme de Menthe"]} /> <label for="Creme de Menthe">Creme de Menthe</label><br/>
                <input onChange={this.handleCheckboxChange} id="Creme de Violette" type="checkbox" name="ingredients" value="Creme de Violette" checked={this.state.ingredientsAndTools["Creme de Violette"]} /> <label for="Creme de Violette">Creme de Violette</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cuban Aguardiente" type="checkbox" name="ingredients" value="Cuban Aguardiente" checked={this.state.ingredientsAndTools["Cuban Aguardiente"]} /> <label for="Cuban Aguardiente">Cuban Aguardiente</label><br/>
                <input onChange={this.handleCheckboxChange} id="Dark Creme de Cacao" type="checkbox" name="ingredients" value="Dark Creme de Cacao" checked={this.state.ingredientsAndTools["Dark Creme de Cacao"]} /> <label for="Dark Creme de Cacao">Dark Creme de Cacao</label><br/>
                <input onChange={this.handleCheckboxChange} id="Drambuie" type="checkbox" name="ingredients" value="Drambuie" checked={this.state.ingredientsAndTools["Drambuie"]} /> <label for="Drambuie">Drambuie</label><br/>
                <input onChange={this.handleCheckboxChange} id="Dry Vermouth" type="checkbox" name="ingredients" value="Dry Vermouth" checked={this.state.ingredientsAndTools["Dry Vermouth"]} /> <label for="Dry Vermouth">Dry Vermouth</label><br/>
                <input onChange={this.handleCheckboxChange} id="Falernum" type="checkbox" name="ingredients" value="Falernum" checked={this.state.ingredientsAndTools["Falernum"]} /> <label for="Falernum">Falernum</label><br/>
                <input onChange={this.handleCheckboxChange} id="Fernet-Branca" type="checkbox" name="ingredients" value="Fernet-Branca" checked={this.state.ingredientsAndTools["Fernet-Branca"]} /> <label for="Fernet-Branca">Fernet-Branca</label><br/>
                <input onChange={this.handleCheckboxChange} id="Galliano Liqueur" type="checkbox" name="ingredients" value="Galliano Liqueur" checked={this.state.ingredientsAndTools["Galliano Liqueur"]} /> <label for="Galliano Liqueur">Galliano Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Green Chartreuse" type="checkbox" name="ingredients" value="Green Chartreuse" checked={this.state.ingredientsAndTools["Green Chartreuse"]} /> <label for="Green Chartreuse">Green Chartreuse</label><br/>
                <input onChange={this.handleCheckboxChange} id="Guinness" type="checkbox" name="ingredients" value="Guinness" checked={this.state.ingredientsAndTools["Guinness"]} /> <label for="Guinness">Guinness</label><br/>
                <input onChange={this.handleCheckboxChange} id="Irish Cream" type="checkbox" name="ingredients" value="Irish Cream" checked={this.state.ingredientsAndTools["Irish Cream"]} /> <label for="Irish Cream">Irish Cream</label><br/>
                <input onChange={this.handleCheckboxChange} id="Lillet Blanc" type="checkbox" name="ingredients" value="Lillet Blanc" checked={this.state.ingredientsAndTools["Lillet Blanc"]} /> <label for="Lillet Blanc">Lillet Blanc</label><br/>
                <input onChange={this.handleCheckboxChange} id="Maraschino Liqueur" type="checkbox" name="ingredients" value="Maraschino Liqueur" checked={this.state.ingredientsAndTools["Maraschino Liqueur"]} /> <label for="Maraschino Liqueur">Maraschino Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Orange Curacao" type="checkbox" name="ingredients" value="Orange Curacao" checked={this.state.ingredientsAndTools["Orange Curacao"]} /> <label for="Orange Curacao">Orange Curacao</label><br/>
                <input onChange={this.handleCheckboxChange} id="Peach Schnapps" type="checkbox" name="ingredients" value="Peach Schnapps" checked={this.state.ingredientsAndTools["Peach Schnapps"]} /> <label for="Peach Schnapps">Peach Schnapps</label><br/>
                <input onChange={this.handleCheckboxChange} id="Port Wine" type="checkbox" name="ingredients" value="Port Wine" checked={this.state.ingredientsAndTools["Port Wine"]} /> <label for="Port Wine">Port Wine</label><br/>
                <input onChange={this.handleCheckboxChange} id="Raspberry Liqueur" type="checkbox" name="ingredients" value="Raspberry Liqueur" checked={this.state.ingredientsAndTools["Raspberry Liqueur"]} /> <label for="Raspberry Liqueur">Raspberry Liqueur</label><br/>
                <input onChange={this.handleCheckboxChange} id="Red Wine" type="checkbox" name="ingredients" value="Red Wine" checked={this.state.ingredientsAndTools["Red Wine"]} /> <label for="Red Wine">Red Wine</label><br/>
                <input onChange={this.handleCheckboxChange} id="Sparkling Wine" type="checkbox" name="ingredients" value="Sparkling Wine" checked={this.state.ingredientsAndTools["Sparkling Wine"]} /> <label for="Sparkling Wine">Sparkling Wine</label><br/>
                <input onChange={this.handleCheckboxChange} id="Sweet Vermouth" type="checkbox" name="ingredients" value="Sweet Vermouth" checked={this.state.ingredientsAndTools["Sweet Vermouth"]} /> <label for="Sweet Vermouth">Sweet Vermouth</label><br/>
                <input onChange={this.handleCheckboxChange} id="Triple Sec" type="checkbox" name="ingredients" value="Triple Sec" checked={this.state.ingredientsAndTools["Triple Sec"]} /> <label for="Triple Sec">Triple Sec</label><br/>
                <input onChange={this.handleCheckboxChange} id="White Wine" type="checkbox" name="ingredients" value="White Wine" checked={this.state.ingredientsAndTools["White Wine"]} /> <label for="White Wine">White Wine</label><br/>
                <input onChange={this.handleCheckboxChange} id="Yellow Chartreuse" type="checkbox" name="ingredients" value="Yellow Chartreuse" checked={this.state.ingredientsAndTools["Yellow Chartreuse"]} /> <label for="Yellow Chartreuse">Yellow Chartreuse</label><br/>
              </div>
            </div>
            <div className='checkboxColumn'>
              <div className='checkboxLegend'>
              <legend>Please select the supplementary ingredients you have available:</legend>
              </div>
              <div className='checkboxContainer'>
                <input onChange={this.handleCheckboxChange} id="Bitters" type="checkbox" name="ingredients" value="Bitters" checked={this.state.ingredientsAndTools["Bitters"]} /> <label for="Bitters">Aromatic Bitters</label><br/>
                <input onChange={this.handleCheckboxChange} id="Agave Syrup" type="checkbox" name="ingredients" value="Agave Syrup" checked={this.state.ingredientsAndTools["Agave Syrup"]} /> <label for="Agave Syrup">Agave Syrup</label><br/>
                <input onChange={this.handleCheckboxChange} id="Apple Juice" type="checkbox" name="ingredients" value="Apple Juice" checked={this.state.ingredientsAndTools["Apple Juice"]} /> <label for="Apple Juice">Apple Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Carbonated Water" type="checkbox" name="ingredients" value="Carbonated Water" checked={this.state.ingredientsAndTools["Carbonated Water"]} /> <label for="Carbonated Water">Carbonated Water</label><br/>
                <input onChange={this.handleCheckboxChange} id="Chamomile Cordial" type="checkbox" name="ingredients" value="Chamomile Cordial" checked={this.state.ingredientsAndTools["Chamomile Cordial"]} /> <label for="Chamomile Cordial">Chamomile Cordial</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cinnamon Syrup" type="checkbox" name="ingredients" value="Cinnamon Syrup" checked={this.state.ingredientsAndTools["Cinnamon Syrup"]} /> <label for="Cinnamon Syrup">Cinnamon Syrup</label><br/>
                <input onChange={this.handleCheckboxChange} id="Coffee" type="checkbox" name="ingredients" value="Coffee" checked={this.state.ingredientsAndTools["Coffee"]} /> <label for="Coffee">Coffee</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cola" type="checkbox" name="ingredients" value="Cola" checked={this.state.ingredientsAndTools["Cola"]} /> <label for="Cola">Cola</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cranberry Juice" type="checkbox" name="ingredients" value="Cranberry Juice" checked={this.state.ingredientsAndTools["Cranberry Juice"]} /> <label for="Cranberry Juice">Cranberry Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cream" type="checkbox" name="ingredients" value="Cream" checked={this.state.ingredientsAndTools["Cream"]} /> <label for="Cream">Cream</label><br/>
                <input onChange={this.handleCheckboxChange} id="Cream of Coconut" type="checkbox" name="ingredients" value="Cream of Coconut" checked={this.state.ingredientsAndTools["Cream of Coconut"]} /> <label for="Cream of Coconut">Cream of Coconut</label><br/>
                <input onChange={this.handleCheckboxChange} id="Egg White" type="checkbox" name="ingredients" value="Egg White" checked={this.state.ingredientsAndTools["Egg White"]} /> <label for="Egg White">Egg White</label><br/>
                <input onChange={this.handleCheckboxChange} id="Egg Yolk" type="checkbox" name="ingredients" value="Egg Yolk" checked={this.state.ingredientsAndTools["Egg Yolk"]} /> <label for="Egg Yolk">Egg Yolk</label><br/>
                <input onChange={this.handleCheckboxChange} id="Elderflower Cordial" type="checkbox" name="ingredients" value="Elderflower Cordial" checked={this.state.ingredientsAndTools["Elderflower Cordial"]} /> <label for="Elderflower Cordial">Elderflower Cordial</label><br/>
                <input onChange={this.handleCheckboxChange} id="Espresso" type="checkbox" name="ingredients" value="Espresso" checked={this.state.ingredientsAndTools["Espresso"]} /> <label for="Espresso">Espresso</label><br/>
                <input onChange={this.handleCheckboxChange} id="Ginger" type="checkbox" name="ingredients" value="Ginger" checked={this.state.ingredientsAndTools["Ginger"]} /> <label for="Ginger">Ginger</label><br/>
                <input onChange={this.handleCheckboxChange} id="Ginger Ale" type="checkbox" name="ingredients" value="Ginger Ale" checked={this.state.ingredientsAndTools["Ginger Ale"]} /> <label for="Ginger Ale">Ginger Ale</label><br/>
                <input onChange={this.handleCheckboxChange} id="Ginger Beer" type="checkbox" name="ingredients" value="Ginger Beer" checked={this.state.ingredientsAndTools["Ginger Beer"]} /> <label for="Ginger Beer">Ginger Beer</label><br/>
                <input onChange={this.handleCheckboxChange} id="Grapefruit Juice" type="checkbox" name="ingredients" value="Grapefruit Juice" checked={this.state.ingredientsAndTools["Grapefruit Juice"]} /> <label for="Grapefruit Juice">Grapefruit Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Grapefruit Soda" type="checkbox" name="ingredients" value="Grapefruit Soda" checked={this.state.ingredientsAndTools["Grapefruit Soda"]} /> <label for="Grapefruit Soda">Grapefruit Soda</label><br/>
                <input onChange={this.handleCheckboxChange} id="Grenadine" type="checkbox" name="ingredients" value="Grenadine" checked={this.state.ingredientsAndTools["Grenadine"]} /> <label for="Grenadine">Grenadine</label><br/>
                <input onChange={this.handleCheckboxChange} id="Honey" type="checkbox" name="ingredients" value="Honey" checked={this.state.ingredientsAndTools["Honey"]} /> <label for="Honey">Honey</label><br/>
                <input onChange={this.handleCheckboxChange} id="Honey Syrup" type="checkbox" name="ingredients" value="Honey Syrup" checked={this.state.ingredientsAndTools["Honey Syrup"]} /> <label for="Honey Syrup">Honey Syrup</label><br/>
                <input onChange={this.handleCheckboxChange} id="Hot Sauce" type="checkbox" name="ingredients" value="Hot Sauce" checked={this.state.ingredientsAndTools["Hot Sauce"]} /> <label for="Hot Sauce">Hot Sauce</label><br/>
                <input onChange={this.handleCheckboxChange} id="Lemon" type="checkbox" name="ingredients" value="Lemon" checked={this.state.ingredientsAndTools["Lemon"]} /> <label for="Lemon">Lemon</label><br/>
                <input onChange={this.handleCheckboxChange} id="Lemon Juice" type="checkbox" name="ingredients" value="Lemon Juice" checked={this.state.ingredientsAndTools["Lemon Juice"]} /> <label for="Lemon Juice">Lemon Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Lime" type="checkbox" name="ingredients" value="Lime" checked={this.state.ingredientsAndTools["Lime"]} /> <label for="Lime">Lime</label><br/>
                <input onChange={this.handleCheckboxChange} id="Lime Juice" type="checkbox" name="ingredients" value="Lime Juice" checked={this.state.ingredientsAndTools["Lime Juice"]} /> <label for="Lime Juice">Lime Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Milk" type="checkbox" name="ingredients" value="Milk" checked={this.state.ingredientsAndTools["Milk"]} /> <label for="Milk">Milk</label><br/>
                <input onChange={this.handleCheckboxChange} id="Mint" type="checkbox" name="ingredients" value="Mint" checked={this.state.ingredientsAndTools["Mint"]} /> <label for="Mint">Mint</label><br/>
                <input onChange={this.handleCheckboxChange} id="Orange" type="checkbox" name="ingredients" value="Orange" checked={this.state.ingredientsAndTools["Orange"]} /> <label for="Orange">Orange</label><br/>
                <input onChange={this.handleCheckboxChange} id="Orange Bitters" type="checkbox" name="ingredients" value="Orange Bitters" checked={this.state.ingredientsAndTools["Orange Bitters"]} /> <label for="Orange Bitters">Orange Bitters</label><br/>
                <input onChange={this.handleCheckboxChange} id="Orange Flower Water" type="checkbox" name="ingredients" value="Orange Flower Water" checked={this.state.ingredientsAndTools["Orange Flower Water"]} /> <label for="Orange Flower Water">Orange Flower Water</label><br/>
                <input onChange={this.handleCheckboxChange} id="Orange Juice" type="checkbox" name="ingredients" value="Orange Juice" checked={this.state.ingredientsAndTools["Orange Juice"]} /> <label for="Orange Juice">Orange Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Orgeat Syrup" type="checkbox" name="ingredients" value="Orgeat Syrup" checked={this.state.ingredientsAndTools["Orgeat Syrup"]} /> <label for="Orgeat Syrup">Orgeat Syrup</label><br/>
                <input onChange={this.handleCheckboxChange} id="Peach Puree" type="checkbox" name="ingredients" value="Peach Puree" checked={this.state.ingredientsAndTools["Peach Puree"]} /> <label for="Peach Puree">Peach Puree</label><br/>
                <input onChange={this.handleCheckboxChange} id="Pepper" type="checkbox" name="ingredients" value="Pepper" checked={this.state.ingredientsAndTools["Pepper"]} /> <label for="Pepper">Pepper</label><br/>
                <input onChange={this.handleCheckboxChange} id="Peychaud's Bitters" type="checkbox" name="ingredients" value="Peychaud's Bitters" checked={this.state.ingredientsAndTools["Peychaud's Bitters"]} /> <label for="Peychaud's Bitters">Peychaud's Bitters</label><br/>
                <input onChange={this.handleCheckboxChange} id="Pineapple Juice" type="checkbox" name="ingredients" value="Pineapple Juice" checked={this.state.ingredientsAndTools["Pineapple Juice"]} /> <label for="Pineapple Juice">Pineapple Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Raspberry Syrup" type="checkbox" name="ingredients" value="Raspberry Syrup" checked={this.state.ingredientsAndTools["Raspberry Syrup"]} /> <label for="Raspberry Syrup">Raspberry Syrup</label><br/>
                <input onChange={this.handleCheckboxChange} id="Salt" type="checkbox" name="ingredients" value="Salt" checked={this.state.ingredientsAndTools["Salt"]} /> <label for="Salt">Salt</label><br/>
                <input onChange={this.handleCheckboxChange} id="Simple Syrup" type="checkbox" name="ingredients" value="Simple Syrup" checked={this.state.ingredientsAndTools["Simple Syrup"]} /> <label for="Simple Syrup">Simple Syrup</label><br/>
                <input onChange={this.handleCheckboxChange} id="Sprite" type="checkbox" name="ingredients" value="Sprite" checked={this.state.ingredientsAndTools["Sprite"]} /> <label for="Sprite">Sprite</label><br/>
                <input onChange={this.handleCheckboxChange} id="Sugar" type="checkbox" name="ingredients" value="Sugar" checked={this.state.ingredientsAndTools["Sugar"]} /> <label for="Sugar">Sugar</label><br/>
                <input onChange={this.handleCheckboxChange} id="Sugar Cube" type="checkbox" name="ingredients" value="Sugar Cube" checked={this.state.ingredientsAndTools["Sugar Cube"]} /> <label for="Sugar Cube">Sugar Cube</label><br/>
                <input onChange={this.handleCheckboxChange} id="Tomato Juice" type="checkbox" name="ingredients" value="Tomato Juice" checked={this.state.ingredientsAndTools["Tomato Juice"]} /> <label for="Tomato Juice">Tomato Juice</label><br/>
                <input onChange={this.handleCheckboxChange} id="Tonic Water" type="checkbox" name="ingredients" value="Tonic Water" checked={this.state.ingredientsAndTools["Tonic Water"]} /> <label for="Tonic Water">Tonic Water</label><br/>
                <input onChange={this.handleCheckboxChange} id="Worcestershire Sauce" type="checkbox" name="ingredients" value="Worcestershire Sauce" checked={this.state.ingredientsAndTools["Worcestershire Sauce"]} /> <label for="Worcestershire Sauce">Worcestershire Sauce</label><br/>
                <input onChange={this.handleCheckboxChange} id="Yellow Grapefruit" type="checkbox" name="ingredients" value="Yellow Grapefruit" checked={this.state.ingredientsAndTools["Yellow Grapefruit"]} /> <label for="Yellow Grapefruit">Yellow Grapefruit</label><br/>
              </div>
            </div>
          </div>
          <div className='toolsAndSubmitGroup'>
            <legend>Please select the tools you have available:</legend>
            <input onChange={this.handleCheckboxChange} id="Cocktail Shaker" type="checkbox" name="tools" value="Cocktail Shaker" checked={this.state.ingredientsAndTools['Cocktail Shaker']} /> <label for="Cocktail Shaker" className='toolsLabel'>Cocktail Shaker</label>
            <input onChange={this.handleCheckboxChange} id="Strainer" type="checkbox" name="tools" value="Strainer" checked={this.state.ingredientsAndTools['Strainer']} /> <label for="Strainer" className='toolsLabel'>Strainer</label>
            <input onChange={this.handleCheckboxChange} id="Blender" type="checkbox" name="tools" value="Blender" checked={this.state.ingredientsAndTools['Blender']} /> <label for="Blender">Blender</label>
            <br></br>
            <button type='button' className='primaryButton' onClick={this.seeDrinkOptions}>See Cocktails</button>
            <div className='space'></div>
            <button type='button' className='primaryButton' onClick={this.resetDrinkOptions}>Reset</button>
            <br></br>
            <p></p>
            {
              // Activate DisplayDrinks component and pass the available items as props
              this.state.display ? <DisplayDrinks items={this.state.availableItems} /> : <></>
            }
          </div>
        </>
      )
    }
  }

export default ItemSelector;