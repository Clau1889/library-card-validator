const dataClients = require('../credit-card/dist/data-client');
const compare = require('../credit-card/dist/compareFunctions');

describe('compareFunctions()',() => {
    const dataClients = [
        {
            'name': 'Erika Estrada',
            'numberCard': '4571612553847958',
            'month': '10',
            'year': '17',
            'cvv': '270',
        },
        {
            'name': 'Israel Álvarez',
            'numberCard': '4065471966803600',
            'month': '07',
            'year': '16',
            'cvv': '336',
        },
        {
            'name': 'Claudia Montserrat Torres',
            'numberCard': '4043800134371172',
            'month': '05',
            'year': '18',
            'cvv': '568',
        },
        {
            'name': 'Carolina Valle',
            'numberCard': '4686008102429244',
            'month': '10',
            'year': '17',
            'cvv': '895',
        },
        {
            'name': 'Carmen Valencia Menchaca',
            'numberCard': '4530929310352951',
            'month': '07',
            'year': '17',
            'cvv': '242',
        },

    ];

    compare.sentData(dataClients);
    it('debería devolver: El nombre fue encontrado en la posición([j])', () =>{
        if(compare.compareUserName('Claudia Montserrat Torres') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver error: Nombre no encontrado(Claudia 1234.; Torres)',() => {
        if(compare.compareUserName('Claudia 1234.; Torres') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })
    it('debería de devolver: El número fue encontrado en la posición([i])', () =>{
        if(compare.compareUserNumTDC('4043800134371172') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver número no válido(4043800hoLA71172)',() => {
        if(compare.compareUserNumTDC('4043800hoLA71172') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })
    it('debería de devolver mes válido en la posición([j])', () =>{
        if(compare.compareMonth('05') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver mes no válido(0m)',() => {
        if(compare.compareMonth('0m') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })
    it('debería de devolver año válido en la posición([j])', () =>{
        if(compare.compareYear('18') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver año no válido(1B)',() => {
        if(compare.compareYear('1B') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })
    it('debería de devolver número de verificación válido encontrado en la posición([j])', () =>{
        if(compare.compareUserCvv('242') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver número de verificación no válido(5689)',() => {
        if(compare.compareUserCvv('5689') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })

});