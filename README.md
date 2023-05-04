# Mixed_Drink_Menu

My roommates and I enjoy hosting events at our house and over the course of the last year we built up a modestly stocked bar of cocktail ingredients. We knew a few of the basic mixed drinks that we could make, but always wondered about other possible cocktails that we did not know about. This dilemma inspired me to create Mixed Drink Menu, a web application that determines all the possible cocktails the user can make with the selected items. Later, I added new functionality to recommend extra items for users to purchase that will go the farthest in helping them make new drinks. Currently, there are 109 cocktails in the database, which represent all 90 of the International Bartenders Association (IBA) recognized cocktails along with an assortment of the most popular drinks in the world that have not been recognized by the IBA.

# About

Mixed Drink Menu is a full stack web application that utilizes MongoDB Atlas for the back-end, MongoDB Realm as a synchronization piece connecting the front-end and back-end, and React.js for the front-end. The project is currently live at mixeddrinkmenu.com.

The application allows users to browse a list of all the cocktails within the database, along with key details on each drink. Users can sort and filter alphabetically, by alcohol content, or by the cocktail's base spirit.

The primary function of the app allows users to select the items (ingredients and tools) that they have available for mixing cocktails from several groups of checkboxes. After selecting the items and submitting the form, the app generates three pieces of output:
1) A list of all cocktails the user is able to make, based on their available ingredients.
2) A list of the top recommended items that the user does not have. These items are those that will most quickly allow the user to make new cocktails (cocktails where the user is only 1 or 2 items away)
3) A list of all nearly available drinks (where the users is only missing 1 or 2 items) along with what item needs to be acquired to make each drink.

As long as the user is able to make at least 1 drink, the app also offers the ability to generate a print-friendly menu of all available cocktails and a print-friendly list of instructions on how to make each drink.

# Setup
Users will need Node.js to install all the required dependencies listed in the package.json file. Running 'npm install' in your terminal will take care of the installation for these files. 
No additional setup is necessary for MongoDB and MongoDB Realm. The database and app services are deployed on the cloud using Microsoft Azure and the necessary code to pull data is already included in the repository.