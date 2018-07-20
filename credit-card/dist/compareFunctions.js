'use strict';

var _dataClient = require('./data-client');

var data = _interopRequireWildcard(_dataClient);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var compareFunctions = {};


/*************FUNCION PARA NAME************************/
compareFunctions.compareUserName = function (fullName) {
    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].name === fullName) {
            // console.log('El nombre fue encontrado en la posicion ' + [j]);
            return true;
        }
    }
    // console.log('nombre no encontrado');
    return false;
};

/*************FUNCION PARA NUMERO************************/
compareFunctions.compareUserNumTDC = function (fullNumTDC) {
    // validateNumTDC(fullNumTDC);

    var i = 0;

    for (i; i < data.dataClients.length; i += 1) {
        if (data.dataClients[i].numberCard === fullNumTDC) {
            // console.log('En esta posicion el numero de tarjeta fue encontrada' + [i])
            return true;
        }
    }
    // console.log('numero de tarjeta no encontrado');
    return false;
};

/*************FUNCION PARA EXPDATE************************/
compareFunctions.compareMonth = function (month) {
    // validacion.expDateMonth(month);
    // validacion.expDateYear(year);

    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].month === month) {
            // console.log('Month de expiración fue encontrada en la posicion ' + [j]);
            return true;
        }
    }
    return false;
};

compareFunctions.compareYear = function (year) {
    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].year === year) {
            // console.log('Year de expiración fue encontrada en la posicion ' + [j]);
            return true;
        }
    }
    // console.log('La fecha no fue encontrada');
    return false;
};

// /*************FUNCION PARA CVV************************/
compareFunctions.compareUserCvv = function (cvvDigits) {
    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].cvv === cvvDigits) {
            // console.log('El cvv fue encontrado en la posicion ' + [j]);
            return true;
        }
    }
    // console.log('cvv no encontrado');
    return false;
};
module.exports = compareFunctions;