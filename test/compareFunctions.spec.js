const compare = require('../credit-card/dist/compareFunctions');

describe('compareFunctions()',() => {
    it('debería devolver: El nombre fue encontrado en la posición([j])', () =>{
        if(compare.compareUserName('Claudia Montserrat Torres') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver error: Nombre no encontrado(Claudia 1234.; Torres)',() => {
        if(compare.compareUserName('Claudia 1234.; Torres') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
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
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
        }
    })
    it('debería de devolver mes válido en la posición([j])', () =>{
        if(compare.compareMonth('05') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');            
        }
    })
    it('debería devolver mes no válido(0l)',() => {
        if(compare.compareMonth('0l') !==true) {
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
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
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
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
            console.error('✗ fail');
        } else {
            console.log('✓ok');  
        }
    })

});