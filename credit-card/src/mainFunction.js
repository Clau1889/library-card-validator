import  validateFunctions from './validateFunctions';
import  compareFunctions from './compareFunctions';

const name = document.getElementById('name').value;
const num = document.getElementById('cn').value;
const month = document.getElementById('expMonth').value;
const year = document.getElementById('expYear').value;
const cvv = document.getElementById('cvv').value;

const validateAllTDC = (name, num, month, year, cvv) => {
    if (validateFunctions.validateName(name) && validateFunctions.validateNumTDC(num) && validateFunctions.expDateMonth(month) && validateFunctions.expDateYear(year) && validateFunctions.cvvVal(cvv)) { 
        // console.log("Tarjeta si valida");
    } if (compareFunctions.compareUserName(name) && compareFunctions.compareUserNumTDC(num) && compareFunctions.compareMonth(month) && compareFunctions.compareYear(year) &&  compareFunctions.compareUserCvv(cvv)){
        console.log("Tarjeta valida para pagar");
        return true;
    } 
        console.log("TARJETA NO VALIDA");
        return false;
};

validateAllTDC(name, num, month, year, cvv);

