/** Packages */
const CryptoJS = require("crypto-js");
const config = require("config");

/** Encrypt password */
exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretKeys").CryptoJS;
    let encryptedPassword = CryptoJS.AES.encrypt(password, "kg'>$HQH4+e*WC9").toString();
    return encryptedPassword;
};