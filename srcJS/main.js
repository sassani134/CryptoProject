const {Blockchain, Transactions} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ebfedf86c597d6d6d511a3b061a8d387438ebc0fd31bdc1808ed79ff2f0ad4df');

const myWalletAddress = myKey.getPublic('hex');


console.log("1 - Creation Blockchaine ligne10");
let samCoin = new Blockchain();
console.log("Blockchain valide? " + samCoin.isChainValid());

console.log("2 - mining pending Transaction ligne14");
samCoin.minePendingTransactions(myWalletAddress);
console.log("Blockchain valide? " + samCoin.isChainValid());

console.log("3 - nouvelle transaction ligne18");
const tx1 = new Transactions(myWalletAddress, 'public keys goes here', 10);
tx1.signTransaction(myKey);
samCoin.addTransaction(tx1);
console.log("Blockchain valide? " + samCoin.isChainValid());



//Video 3
// samCoin.createTransaction(new Transactions('addresse1', 'address2', 100));
// samCoin.createTransaction(new Transactions('addresse2', 'address1', 50));

console.log("Starting the miner ...");

samCoin.minePendingTransactions(myWalletAddress);
console.log("Blockchain valide? " + samCoin.isChainValid());


console.log('\n Balance of samuel is', samCoin.getBalanceOfAddress(myWalletAddress));

console.log("Blockchain valide? " + samCoin.isChainValid());
console.log("Blockchain valide? " + samCoin.isChainValid());
console.log("Starting the miner ...");

samCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of samuel is', samCoin.getBalanceOfAddress(myWalletAddress));

console.log("Blockchain valide? " + samCoin.isChainValid());
console.log("Blockchain valide? " + samCoin.isChainValid());




/*
console.log("Starting the miner ...");

samCoin.minePendingTransactions('samuel-address');
console.log('\n Balance of samuel is', samCoin.getBalanceOfAddress('address1'));
*/

/*test video 2 ne pas aller trop loin dans la difficulty
console.log('Mining block 1...');
samCoin.addBlock(new Block(1," 10/03/2022", { amount: 4}));
console.log('Mining block 2...');
samCoin.addBlock(new Block(2," 11/03/2022", { amount: 4}));
*/

/*test video 1
samCoin.addBlock(new Block(1," 10/03/2022", { amount: 4}));
samCoin.addBlock(new Block(2," 11/03/2022", { amount: 4}));
samCoin.addBlock(new Block(3," 12/03/2022", { amount: 5}));


console.log("Blockchain valide? " + samCoin.isChainValid());
//console.log(JSON.stringify(samCoin, null, 4));

samCoin.chain[1].data = {amount: 777};
console.log("Blockchain valide? " + samCoin.isChainValid());

samCoin.chain[1].hash = samCoin.chain[1].calculateHash();
console.log("Blockchain valide? " + samCoin.isChainValid());
*/

/* old mining method change from vid 3
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        //newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }
*/

// Fin video 3