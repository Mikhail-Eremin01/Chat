function validationInputs(nameSignUp, emailSignUp, passwordSignUp) {
    
    if(!validation(nameSignUp, /^[a-z]{2,15}/gmi)){
        nameSignUp.style.border = '2px solid red';

        return false;
    } else {
        nameSignUp.style.border = 'none';
    }

    if(!validation(emailSignUp,/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,3}$/gmi)){
        emailSignUp.style.border = '2px solid red';

        return false;
    } else {
        emailSignUp.style.border = 'none';
    }

    if(!validation(passwordSignUp,/^([a-z0-9_-]+)$/gmi)){
        passwordSignUp.style.border = '2px solid red';

        return false;
    } else {
        passwordSignUp.style.border = 'none';
    }
}