// Exapmle Pure Function

const coin = ['BTC','ETH','SOL'];

function addCoin(pureArray,newCoin){
    return [...pureArray,newCoin];
}

const newupdatedWallet = addCoin(coin,'BNB');

console.log(coin)
// [ 'BTC', 'ETH', 'SOL' ]
console.log(newupdatedWallet)
// [ 'BTC', 'ETH', 'SOL', 'BNB' ]