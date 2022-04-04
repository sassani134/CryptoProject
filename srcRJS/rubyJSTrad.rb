require 'digest'

class Block()
  
  def initialize(index, timestamp, data, previous_hash ='')
    @index =index
    @timestamp = timestamp
    @data = data
    @previous_hash = previous_hash
    @hash = ''
  end

  def calculateHash()
    @ayo = Digest::SHA2.new(256).hexdigest 'abc' # => "ba7816bf8..."
    return @ayo
  end

end

class Blockchain
  def initialize()
    @chain = [createGenesisBlock()]
  end

  def createGenesisBlock()
    return Block.new(0,"03/03/2022", "Genesis Block", "0")
  end

  def getLatestBlock()
    return @chain.last
  end

  
  def addBlock(newBlock)
    #newBlock.previous_hash = Digest::SHA2.new(256).hexdigest getLatestBlock()

    newBlock = Block.new()
    newBlock.previous_hash = 5
    newBlock.hash = newBlock.calculateHash()
    @chain.push(newBlock)
    #@chain << newBlock
  end
end


savjeeCoin = Blockchain.new

savjeeCoin.addBlock(Block.new(1, "03/03/2022", { amount: 4}))
