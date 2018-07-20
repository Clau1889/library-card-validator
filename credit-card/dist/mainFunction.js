'use strict';

var _validateFunctions = require('./validateFunctions');

var _validateFunctions2 = _interopRequireDefault(_validateFunctions);

var _compareFunctions = require('./compareFunctions');

var _compareFunctions2 = _interopRequireDefault(_compareFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const valName = 'Claudia Montserrat Torres';
// const numTDC = '4043800134371172';
// const monthData = '05';
// const yearData = '18';
// const cvv = '568';

var validateAllTDC = function validateAllTDC(name, num, month, year, cvv) {
    if (_validateFunctions2.default.validateName(name) && _validateFunctions2.default.validateNumTDC(num) && _validateFunctions2.default.expDateMonth(month) && _validateFunctions2.default.expDateYear(year) && _validateFunctions2.default.cvvVal(cvv)) {
        // console.log("Tarjeta si valida");
    }if (_compareFunctions2.default.compareUserName(name) && _compareFunctions2.default.compareUserNumTDC(num) && _compareFunctions2.default.compareMonth(month) && _compareFunctions2.default.compareYear(year) && _compareFunctions2.default.compareUserCvv(cvv)) {
        console.log("Tarjeta valida para pagar");
        return true;
    }
    console.log("TARJETA NO VALIDA");
    return false;
};

validateAllTDC('Claudia Montserrat Torres', '4043800134371172', '05', '18', '568');