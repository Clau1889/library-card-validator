import  validateFunctions from './validateFunctions';
import  compareFunctions from './compareFunctions';

// const valName = 'Claudia Montserrat Torres';
// const numTDC = '4043800134371172';
// const monthData = '05';
// const yearData = '18';
// const cvv = '568';

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

validateAllTDC('Claudia Montserrat Torres','4043800134371172', '05', '18', '568' );

