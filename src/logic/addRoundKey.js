const {generateKey} = require('./keyGenerat');


function ascii_to_hexa(str) {
    let hexaVar = '';
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        hexaVar += hex;
    }
    return hexaVar;
}
function createMessageKeyBlock(messageKey, lenght) {
    let blocks = [];
    for (let i = 0; i < lenght; i += 4) {
        blocks.push(parseInt(ascii_to_hexa(messageKey.slice(i, 4 + i)), 16)
        );

    }
    return blocks;
}

const AddRoundKey = () => {
    let message = 'hello, world!';
    let hexMessage = createMessageKeyBlock(message, message.length);
    let hexkey = createMessageKeyBlock(generateKey(), 32);
    let xored = [];
    // let nxored = [];

    for (let i = 0; i < hexMessage.length; i++) {
        xored.push(hexMessage[i] ^ hexkey[i]);
        // nxored.push((hexMessage[i] ^ hexkey[i]) ^ hexkey[i]);
    }
    return xored;
}

module.exports = { AddRoundKey };