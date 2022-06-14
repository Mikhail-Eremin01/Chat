function validation(input, regularExp) {
    
    if((input.value == '') || !regularExp.test(input.value)) {
        
        input.value = '';
        return false;
    } else {
        input.style.border = '2px solid green';
        return true;
    }
}