// Rest operator allows function to accapt agruments i the from of arrays and objects

function myFunc(...name){
    console.log('Name: ',name);
}

myFunc('Andrew','Bob','Chloe','Deny');
// Output: Name:  [ 'Andrew', 'Bob', 'Chloe', 'Deny' ]

// Array Lenght
function users(...name2){
    console.log(name2.length);
    console.log('Name: ',name2);
}
users('Andrew','Bob','Chloe','Deny')
// Output:
// 4
// Name:  [ 'Andrew', 'Bob', 'Chloe', 'Deny' ]
