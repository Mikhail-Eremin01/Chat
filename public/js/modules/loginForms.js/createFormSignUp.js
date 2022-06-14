const createFormSignUp = function() {
    //  Create form
    const form = document.createElement('form');
        form.action = 'signUp';
        form.id = 'form-signUp';
        form.className = 'form-signup';
        form.method = 'post';
        form.name = 'form2';

    //////  Container user-name //////
    const containerUserName = document.createElement('div');
        containerUserName.className = 'container';

    form.appendChild(containerUserName);

    const labelUserName = document.createElement('label');
        labelUserName.for = 'fullname';
        labelUserName.innerHTML = 'Full name';

    const inputUserName = document.createElement('input');
        inputUserName.id = 'signUp-name';
        inputUserName.className = 'container__input';
        inputUserName.type = 'text';
        inputUserName.placeholder = 'Enter your name in Latin letters';
        inputUserName.name = 'fullname';

        const userAlreadyExist = document.createElement('div');
        userAlreadyExist.className = 'container__user-exist';

    containerUserName.appendChild(labelUserName);
    containerUserName.appendChild(inputUserName);
    containerUserName.appendChild(userAlreadyExist);

    //////  Container email //////
    const containerEmail = document.createElement('div');
        containerEmail.className = 'container';

    form.appendChild(containerEmail);

    const labelEmail = document.createElement('label');
        labelEmail.for = 'email';
        labelEmail.innerHTML = 'Email';

    const inputEmail = document.createElement('input');
        inputEmail.id = 'signUp-email';
        inputEmail.className = 'container__input';
        inputEmail.type = 'text';
        inputEmail.placeholder = 'Enter your email';
        inputEmail.name = 'email';

        containerEmail.appendChild(labelEmail);
        containerEmail.appendChild(inputEmail);

    //////  Container password //////
    const containerPass = document.createElement('div');
        containerPass.className = 'container';

    form.appendChild(containerPass);

    const labelPassword = document.createElement('label');
        labelPassword.for = 'password';
        labelPassword.innerHTML = 'Password';

    const inputPassword = document.createElement('input');
        inputPassword.id = 'signUp-password';
        inputPassword.className = 'container__input';
        inputPassword.type = 'text';
        inputPassword.placeholder = 'Enter your password';
        inputPassword.name = 'password';

    containerPass.appendChild(labelPassword);
    containerPass.appendChild(inputPassword);

    
    //  Button send form
    const btnSendForm = document.createElement('input');
        btnSendForm.value = 'Sign Up';
        btnSendForm.className = 'btn-send form-signup__btn';
        btnSendForm.type = 'button';

    form.appendChild(btnSendForm);

    return form
}