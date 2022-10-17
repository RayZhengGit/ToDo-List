# ToDo-List

## Components

###ListItem
List item is used to handel creating each individual "card" for the to do list. The hooks used here are useState and are used for setting if the item is completed or not.

###DisplayEmpty
This is used to display a message when the list is empty. Else it will display nothing. It takes a prop to know when the list is empty or not.

###App
App uses both useState and useEffect. The useEffect is used to know when the to do list is empty because it takes [inputs] as a dependency. useStates are used to set boolean, string, and list<string> variables. 
