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
        if(validate.validateName('Claudia 1234.; Torres') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
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
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
        }
    })

});