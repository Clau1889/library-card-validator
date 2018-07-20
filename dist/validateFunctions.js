'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var validateFunctions = {};

/****************FUNCION PARA VALIDACIONES: NOMBRE***************/
validateFunctions.validateName = function (name) {
    var regEx = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g;
    if (regEx.exec(name) == null) {
        console.log('NOMBRE INVALIDO');
        return false;
    }
    console.log('NOMBRE VALIDO');
    return true;
};

/**********FUNCION DE VALIDACIONES ACEPTABLES PARA NUM DE TDC**********/
/*                                  NOTA:
                        TARJETAS DE CREDITO QUE ACEPTA:
                                4 == VISA
                                5 == MASTERCARD
*/
validateFunctions.validateNumTDC = function (nums) {
    /*Expresion regular que especifica que es lo que acepta */
    var regEx = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //EXPRESION REGULAR PARA TDC DE MASTERCARD-VISA-DISCORD
    if (regEx.exec(nums) == null) {
        return false;
    }
    /*Convertir el string en Array y en numero entero */
    var arrayNums = [];

    for (var i = 0; i < nums.length; i++) {
        arrayNums.push(parseInt(nums[i]));
    }
    validateNumTDCluhn(arrayNums);
    return true;
};

/*COMIENZA FUNCION ALGORITMO LUHN: para corroborar validacion de TDC */
var validateNumTDCluhn = function validateNumTDCluhn(numeros) {
    var sumTotalDigits = 0;
    var reverseNums = numeros.reverse();

    var k = 0;

    for (k; k < reverseNums.length; k++) {
        var pairNums = void 0;
        /*BUSCAR LA POSICION PAR */
        if ((k + 1) % 2 == 0) {
            pairNums = reverseNums[k] * 2;
            if (pairNums >= 10) {
                var getOneDigits = pairNums - 10 + 1;
                reverseNums[k] = getOneDigits;
            } else {
                reverseNums[k] = pairNums;
            }
        }
        /*SUMA DEL ARRAY */
        sumTotalDigits += reverseNums[k];
    }

    if (sumTotalDigits % 10 == 0) {
        console.log('TARJETA VALIDA');
        return true;
    } else {
        console.log('TARJETA INVALIDA');
        return false;
    }
};

/*****FUNCION PARA VALIDACIONES DEL MES DE EXPIRACIÓN DE LA TARJETA******/
validateFunctions.expDateMonth = function (month) {
    var datExpRegEx = /^(0[0-9]|1[0-2])$/;

    if (datExpRegEx.exec(month) == null) {
        console.log('mes de expiración erronea');
        return false;
    }
    console.log('mes de expiración válida');
    return true;
};

/*****FUNCION PARA VALIDACIONES DEL AÑO DE EXPIRACIÓN DE LA TARJETA******/
validateFunctions.expDateYear = function (year) {
    var datExpRegEx = /^(20)?([0-9]{2})$/;

    if (datExpRegEx.exec(year) == null) {
        console.log('year de expiración erronea');
        return false;
    }
    console.log('year de expiración válida');
    return true;
};

/****************FUNCION PARA VALIDACIONES: CVV***************/
validateFunctions.cvvVal = function (securityCode) {
    var cvvRegEx = /^[0-9]{3}$/; ///^d{2}$/;//(/\D/g, ""/);
    if (cvvRegEx.exec(securityCode) == null) {
        console.log('número de seguridad inválido');
        return false;
    }
    console.log('número de seguridad válido');
    return true;
};

exports.default = validateFunctions;