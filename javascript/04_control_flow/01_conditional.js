// ======== If Statement ===========

const gpa = 90;

if (gpa >= 90){
    console.log('Your Eligible!');
}
else{
    console.log('Dont Give Up')
}

// Output: If gpa >= 90 = 'Your Eligible!'
// And gpa <= 90 = 'Dont Give Up'


// ============= Switch Case ============

const fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('Im banana');
        break
    case 'apple':
        console.log('im apple');
        break
    case 'orange':
        console.log('I am an orange.');
        break;
    case 'strawberry':
        console.log('I am a strawberry.');
        break;
    default:
        console.log('I am not a fruit. I am a programmer.');
}

// Output: im apple