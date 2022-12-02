# Development

### Link to Deployed Website
https://lazypanda888.github.io/development2

### Goal and Value of the Application
The goal of this application is to allow users to quickly place a boba order. The value of the application is that it makes it easier for users to navigate through the menu items by clicking on a drink type and narrow down their choices by selecting the desired caffeine type. Users can also sort the drinks by prices from low to high. These types of filter and sort options make it easier for the user to get to what they want. 

### Usability Principles Considered
- The aggregator (cart) is displayed on the side of the interface so that users can see immediately what items were added and what can be removed. 
- Instead of having a reset button which resets all filters, the filters were implemented such that unchecking all of the filters simply restores the application back to its original state. This type of unfiltering allows for users to filter with more ease.
- The drink items show all their characteristics (with hierarchy) so it each individual qualities are more obvious for the user making the decision of what to purchase.
- The menu item contains both an add to cart and remove from cart button as opposed to one single button that changes states (from “add” to “remove”) when clicked so that users can add/remove an item multiple times.
- When the cart is empty, it gently nudges the user to start shopping!

### Organization of Components
Apart from the main App component, there are two other components: Aggregator and MenuItem. The aggregator component stores the cart display while the MenuItem component stores the individual menu item displays. 

### How Data is Passed Down Through Components
The Aggregator component extends from App ('<Aggregator cart={cart}></Aggregator>' in App) and receives its menu items data from menu-data.json. The MenuItem component from extends from App and receives its menu items data from menu-data.json. When the aggregator data is updated, the props change and the aggregator renders with the updated data.

### How the User Triggers State Changes
All of the filtering and sorting are done in the main App, so the states are keeping track of the conditions that are being checked on and off. In this way, when we click on a filter type, a sort by type, or add to cart, a state change is triggered and results in the corresponding filtering/sorting/adding/removing actions.
