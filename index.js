const { search, reverse, mod } = require("./helpers");

function encrypt(message, key) {
    let encryptedMessage = "";
    const cleanedMessage = message.replace(/\s/g, "").toUpperCase();
    const cleanedKey = key.replace(/\s/g, "").toUpperCase();
    for (let i = 0; i < cleanedMessage.length; i++) {
        const valueString = search(cleanedMessage[i]);
        const valueKey = search(cleanedKey[i]);
        const intString = typeof valueString === "undefined" ? parseInt(cleanedMessage[i]) : valueString
        const intKey = typeof valueKey === "undefined" ? parseInt(cleanedKey[i]) : valueKey
        if (isNaN(intString) || isNaN(intKey)) {
            encryptedMessage += cleanedMessage[i];
        } else {
            const reverseValue = mod(intString + intKey);
            let reverseLookup = reverse(reverseValue);
            if (reverseLookup == 0) {
                reverseLookup = "";
            }
            encryptedMessage += reverseLookup;
        }
    }
    return encryptedMessage;
}

function decrypt(message, key) {
    let encryptedMessage = "";
    const cleanedMessage = message.replace(/\s/g, "").toUpperCase();
    const cleanedKey = key.replace(/\s/g, "").toUpperCase();
    for (let i = 0; i < cleanedMessage.length; i++) {
        const valueString = search(cleanedMessage[i]);
        const valueKey = search(cleanedKey[i]);
        const intString = typeof valueString === "undefined" ? parseInt(cleanedMessage[i]) : valueString
        const intKey = typeof valueKey === "undefined" ? parseInt(cleanedKey[i]) : valueKey
        if (isNaN(intString) || isNaN(intKey)) {
            encryptedMessage += cleanedMessage[i]
        } else {
            const reverseValue = mod(intString - intKey);
            let reverseLookup = reverse(reverseValue);
            if (reverseLookup == 0) {
                reverseLookup = "";
            }
            encryptedMessage += reverseLookup;
        }
    }
    return encryptedMessage;
}

module.exports = {
    encrypt,
    decrypt,
}