
function getRandomCharacter() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
const generateKey = () => {
    let key = '';
    // we need the key to be 32 letter to have the size of 256 bit.
    for (let i = 0; i < 32; i++) {
        key += getRandomCharacter();
    }
    return key;
}

module.exports = { generateKey };
