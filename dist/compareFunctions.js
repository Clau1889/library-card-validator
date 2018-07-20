'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dataClient = require('./data-client');

var data = _interopRequireWildcard(_dataClient);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var compareFunctions = {};

/*************FUNCION PARA NAME************************/
compareFunctions.compareUserName = function (fullName) {
    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].name !== fullName) {
            console.log('no valido');
            return false;
        }
        console.log('El nombre fue encontrado en la posicion ' + [j]);
        return true;
    }
};

/*************FUNCION PARA NUMERO************************/
compareFunctions.compareUserNumTDC = function (fullNumTDC) {
    // validateNumTDC(fullNumTDC);

    var i = 0;

    for (i; i < data.dataClients.length; i += 1) {
        if (data.dataClients[i].numberCard !== fullNumTDC) {
            return false;
        }
        console.log('En esta posicion la Tarjeta fue encontrada' + [i]);
        return true;
    }
};

/*************FUNCION PARA EXPDATE************************/
compareFunctions.compareMonth = function (month) {
    // validacion.expDateMonth(month);
    // validacion.expDateYear(year);

    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].month !== month) {
            // console.log('La fecha no fue encontrada');
            return false;
        }
        console.log('Month de expiración fue encontrada en la posicion ' + [j]);
        return true;
    }
};

compareFunctions.compareYear = function (year) {
    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].year !== year) {
            // console.log('La fecha no fue encontrada');
            return false;
        }
        console.log('Year de expiración fue encontrada en la posicion ' + [j]);
        return true;
    }
};

// /*************FUNCION PARA CVV************************/
compareFunctions.compareUserCvv = function (cvvDigits) {
    var j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].cvv !== cvvDigits) {
            return false;
        }
        console.log('El cvv fue encontrado en la posicion ' + [j]);
        return true;
    }
};

exports.default = compareFunctions;