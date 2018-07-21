const validate = require('../credit-card/dist/validateFunctions');

describe('validateFunctions()',() => {
    it('debería de devolver ok(Claudia Montserrat Torres)', () =>{
        if(validate.validateName('Claudia Montserrat Torres') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver error(Claudia 1234.; Torres)',() => {
        if(validate.validateName('Claudia 1234.; Torres') !== true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })
    it('debería de devolver número válido(4043800134371172)', () =>{
        if(validate.validateNumTDC('4043800134371172') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver número no válido(4043800hoLA71172)',() => {
        if(validate.validateNumTDC('4043800hoLA71172') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })
    it('debería de devolver mes válido(05)', () =>{
        if(validate.expDateMonth('05') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver mes no válido(0k)',() => {
        if(validate.expDateMonth('0k') !==true) {
            console.log('✓ok');
        } else {
            console.error('✗ fail');   
        }
    })

    it('debería de devolver año válido(18)', () =>{
        if(validate.expDateYear('18') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver año no válido(1B)',() => {
        if(validate.expDateYear('1B') !==true) {
              console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })

    it('debería de devolver número de verificación válido(568)', () =>{
        if(validate.cvvVal('568') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver número de verificación no válido(5689)',() => {
        if(validate.cvvVal('5689') !==true) {
             console.log('✓ok');
        } else {
            console.error('✗ fail');  
        }
    })

});