const createFormSignIn = function() {
    //  Create form
    const form = document.createElement('form');
        form.action = 'signIn';
        form.id = 'form-signIn';
        form.className = 'form-signin';
        form.method = 'post';
        form.name = 'form1';

    //////  Container user-name //////
    const containerUserName = document.createElement('div');
        containerUserName.className = 'container';

    form.appendChild(containerUserName);

    const labelUserName = document.createElement('label');
        labelUserName.for = 'username';
        labelUserName.innerHTML = 'Username';

    const inputUserName = document.createElement('input');
        inputUserName.id = 'signIn-name';
        inputUserName.className = 'container__input';
        inputUserName.type = 'text';
        inputUserName.placeholder = 'Enter your name in Latin letters';
        inputUserName.name = 'username';
        inputUserName.value = 'Mikhail';

    const userNotFound = document.createElement('div');
        userNotFound.className = 'container__userNotFound';

    containerUserName.appendChild(labelUserName);
    containerUserName.appendChild(inputUserName);
    containerUserName.appendChild(userNotFound);

    //////  Container password //////
    const containerPass = document.createElement('div');
        containerPass.className = 'container';

    form.appendChild(containerPass);

    const labelPassword = document.createElement('label');
        labelPassword.for = 'password';
        labelPassword.innerHTML = 'Password';

    const inputPassword = document.createElement('input');
        inputPassword.id = 'signIn-password';
        inputPassword.className = 'container__input';
        inputPassword.type = 'text';
        inputPassword.placeholder = 'Enter your password';
        inputPassword.name = 'password';
        inputPassword.value = 'r';

    containerPass.appendChild(labelPassword);
    containerPass.appendChild(inputPassword);

    //  Button send form
    const btnSendForm = document.createElement('input');
        btnSendForm.value = 'Sign In';
        btnSendForm.className = 'btn-send form-signin__btn';
        btnSendForm.type = 'button';

    form.appendChild(btnSendForm);

    return form
}