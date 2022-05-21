class Transactions

    def initialize(attribute)
      @attribute = attribute
    end

    def calculateHash
    end

    def signTransaction
    end

    def isValid
    end
end

class Block
    
    def initialize(attribute)
      @attribute = attribute
    end

    def calculateHash 
    end

    def mineBlock
    end

    def hasValidTransaction 
    end

end


class Blockchain
    
    def initialize(attribute)
      @attribute = attribute
    end

    def createGenesisBlock
    end

    def getLastBlock
    end

    def minePendingTransactions
    end

    def addTransaction(transaction)
    end

    def getBalanceOfAddress(adress)
    end

    def isChainValid
    end
end