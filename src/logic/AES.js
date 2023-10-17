const {AddRoundKey} = require('./addRoundKey')
const {subBlocks} = require('./SubBytes')

console.log(subBlocks(AddRoundKey()));
