var pay = document.getElementById('button');

pay.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('ingresa al evento');

    const name = document.getElementById('name').value;
    const num = document.getElementById('cn').value;
    const month = document.getElementById('expMonth').value;
    const year = document.getElementById('expYear').value;
    const cvv = document.getElementById('cvv').value;


    if (validateAllTDC(name, num, month, year, cvv, dataClients) !== true) {
        alert('TARJETA RECHAZADA. El pago no pudo ser realizado. Favor de verificar tus datos de ingreso');
    } else {
        alert('PAGO EXITOSO');
    }

});