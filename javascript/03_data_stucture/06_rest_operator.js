// Rest operator allows function to accapt agruments i the from of arrays and objects

function myFunc(...name){
    console.log('Name: ',name);
}

myFunc('Andrew','Bob','Chloe','Deny');
// Output: Name:  [ 'Andrew', 'Bob', 'Chloe', 'Deny' ]
