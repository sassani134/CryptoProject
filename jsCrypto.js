const SHA256 = require('crypto-js/sha256')
class Block{
    constructor(index, timestamp, data, previousHash = ""){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "01/03/2022", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
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
samCoin.addBlock(new Block(1," 10/03/2022", { amount: 4}));
samCoin.addBlock(new Block(2," 11/03/2022", { amount: 4}));
samCoin.addBlock(new Block(3," 12/03/2022", { amount: 5}));


console.log("Blockchain valide? " + samCoin.isChainValid());
//console.log(JSON.stringify(samCoin, null, 4));

samCoin.chain[1].data = {amount: 777};
console.log("Blockchain valide? " + samCoin.isChainValid());

samCoin.chain[1].hash = samCoin.chain[1].calculateHash();
console.log("Blockchain valide? " + samCoin.isChainValid());