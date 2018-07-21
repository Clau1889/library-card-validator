'use strict';

if (typeof window === 'undefined') {

    var _validateFunctions = require('./validateFunctions');
    var _compareFunctions = require('./compareFunctions');
}

var validateAllTDC = function validateAllTDC(name, num, month, year, cvv) {
    if (validateFunctions.validateName(name) && validateFunctions.validateNumTDC(num) && validateFunctions.expDateMonth(month) && validateFunctions.expDateYear(year) && validateFunctions.cvvVal(cvv)) {
        // console.log("Tarjeta si valida");
    }if (compareFunctions.compareUserName(name) && compareFunctions.compareUserNumTDC(num) && compareFunctions.compareMonth(month) && compareFunctions.compareYear(year) && compareFunctions.compareUserCvv(cvv)) {
        console.log("Tarjeta valida para pagar");
        return true;
    }
    console.log("TARJETA NO VALIDA");
    return false;
};

if (typeof window == "undefined") {
    console.log('estamos en consola');
    module.exports = validateAllTDC;
} else {
    console.log('navegador');
    window.validateAllTDC = validateAllTDC;
};