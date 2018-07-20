const compareFunctions={};
import * as data from './data-client';

/*************FUNCION PARA NAME************************/
compareFunctions.compareUserName = fullName => {
    let j = 0;

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
compareFunctions.compareUserNumTDC = fullNumTDC => {
    // validateNumTDC(fullNumTDC);

    let i = 0;

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
compareFunctions.compareMonth = month => {
    // validacion.expDateMonth(month);
    // validacion.expDateYear(year);

    let j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].month === month) {
            // console.log('Month de expiración fue encontrada en la posicion ' + [j]);
            return true;
        } 
    }
    return false;
}

compareFunctions.compareYear = year => {
    let j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].year === year) {
            // console.log('Year de expiración fue encontrada en la posicion ' + [j]);
            return true;
        } 
    }
    // console.log('La fecha no fue encontrada');
    return false;
}

// /*************FUNCION PARA CVV************************/
compareFunctions.compareUserCvv = cvvDigits => {
    let j = 0;

    for (j; j < data.dataClients.length; j += 1) {
        if (data.dataClients[j].cvv === cvvDigits) {
            // console.log('El cvv fue encontrado en la posicion ' + [j]);
            return true;
        }
    }
    // console.log('cvv no encontrado');
    return false;
}
module.exports=compareFunctions;


