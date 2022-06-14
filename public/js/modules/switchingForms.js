const switchingForms = function(btns, forms) {
    btns[0].addEventListener('click', () => {
        btns[0].classList.toggle('nav-links__sign-active');
        btns[1].classList.toggle('nav-links__sign-active');

        forms[0].classList.toggle('form-signin-left');

        btns[0].classList.toggle('nav-links__sign-inactive');
        btns[1].classList.toggle('nav-links__sign-inactive');

        forms[1].classList.toggle('form-signup-left');
    })
    btns[1].addEventListener('click', () => {
        btns[0].classList.toggle('nav-links__sign-active');
        btns[1].classList.toggle('nav-links__sign-active');

        forms[0].classList.toggle('form-signin-left');

        btns[0].classList.toggle('nav-links__sign-inactive');
        btns[1].classList.toggle('nav-links__sign-inactive');

        forms[1].classList.toggle('form-signup-left');
    })
}