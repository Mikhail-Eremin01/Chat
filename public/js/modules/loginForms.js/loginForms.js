const loginForms = function() {
    const loginForms = document.createElement('div');
    loginForms.className = 'forms-container';

    const frame = document.createElement('div');
        frame.className = 'frame';
    loginForms.appendChild(frame);

    frame.appendChild(createFormNavLinks());

    const formsContainer = document.createElement('div');
        formsContainer.className = 'forms-container-forms';

    formsContainer.appendChild(createFormSignIn());
    formsContainer.appendChild(createFormSignUp());
    frame.appendChild(formsContainer);

    return loginForms
}