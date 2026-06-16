// THROWING ERROR

// const error = new Error('This is Error');

const price = 100;
const paid = 80;
// if (paid < price){
//     throw new Error('not enough');
// }

// CATCHING ERROR

// 1. TRY-CATCH

try{
    console.log('Start')
    console.log('End')
} catch (err){
    console.log('cuse dont error, this block will Ignored')
}
// Output:
// Start
// End


// If catct block excecuted

try{
    console.log('Start')
    throw new Error('Program stop')
    console.log('End Program')
    
} catch(err2){
    console.log('cuse dont error, this block will Ignored')
}
// Output:

// Start
// cuse dont error, this block will Ignored