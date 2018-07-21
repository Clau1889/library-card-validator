const compareFunctions = {};

if (typeof window === 'undefined') {

    const dataClients = require('./data-client');

}

/*************FUNCION PARA NAME************************/
compareFunctions.compareUserName = fullName => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].name === fullName) {
            return true;
        }
    }
    console.log('nombre no encontrado');
    return false;
};

/*************FUNCION PARA NUMERO************************/
compareFunctions.compareUserNumTDC = fullNumTDC => {
    let i = 0;

    for (i; i < dataClients.length; i += 1) {
        if (dataClients[i].numberCard === fullNumTDC) {
            return true;
        }
    }
    console.log('numero de tarjeta no encontrado');
    return false;
};

/*************FUNCION PARA EXPDATE************************/
compareFunctions.compareMonth = month => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].month === month) {
            return true;
        }
    }
    console.log('Mes no encontrado');
    return false;
}

compareFunctions.compareYear = year => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].year === year) {
            return true;
        }
    }
    console.log('La fecha no fue encontrada');
    return false;
}

// /*************FUNCION PARA CVV************************/
compareFunctions.compareUserCvv = cvvDigits => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].cvv === cvvDigits) {
            return true;
        }
    }
    console.log('cvv no encontrado');
    return false;
}


if (typeof window == "undefined") {
    console.log('estamos en consola');
    module.exports = compareFunctions;
} else {
    console.log('navegador');
    window.compareFunctions = compareFunctions;
};



