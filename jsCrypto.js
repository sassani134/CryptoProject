const SHA256 = require('crypto-js/sha256')

class Transactions{
    constructor(fromAdress, toAdress, amount){
        this.fromAdress = fromAdress;
        this.toAdress = toAdress;
        this.amount = amount;
    }
}
class Block{
    constructor(timestamp, transactions, previousHash = ""){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty){
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("01/03/2022", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        
        console.log("Block succefully mined");
        this.chain.push(block);

        this.pendingTransactions = [
            new Transactions(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transactions){
        this.pendingTransactions.push(transactions)
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAdress === address){
                    balance -= trans.amount;
                }
                if (trans.toAdress === address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }
    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousHash = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousHash.hash){
                return false;
            }
        }
        return true;
    }
}

let samCoin = new Blockchain();

samCoin.createTransaction(new Transactions('addresse1', 'address2', 100));
samCoin.createTransaction(new Transactions('addresse2', 'address1', 50));

console.log("Starting the miner ...");

samCoin.minePendingTransactions('samuel-address');
console.log('\n Balance of samuel is', samCoin.getBalanceOfAddress('samuel-address'));


console.log("Starting the miner ...");

samCoin.minePendingTransactions('samuel-address');
console.log('\n Balance of samuel is', samCoin.getBalanceOfAddress('address1'));


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