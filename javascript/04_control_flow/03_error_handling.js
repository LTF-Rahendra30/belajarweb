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