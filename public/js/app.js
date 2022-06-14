const root = document.getElementById('root');


//  Create login forms
root.appendChild(loginForms());

//////  Switching forms  //////

//  Buttons switch forms SIGN IN / SIGN UP
const btnsForSwitchForms = document.getElementsByTagName('li');
//  Forms
const forms = document.querySelectorAll('.forms-container form');

switchingForms(btnsForSwitchForms, forms);



//////////////////  Sign Up  //////////////////

const btn_signUp = document.querySelector('.form-signup__btn');

btn_signUp.addEventListener('click', () => {

    //  Validation inputs in sign-up form
    const inputsSignUpForm = document.querySelectorAll('.form-signup input[type=text]');
    const nameSignUp = document.getElementById('signUp-name');
    const emailSignUp = document.getElementById('signUp-email');
    const passwordSignUp = document.getElementById('signUp-password');
    //  If user already exist
    const userAlreadyExist = document.querySelector('.container__user-exist');
    userAlreadyExist.innerHTML = '';

    const registrationDate = new Date();
    
    inputsSignUpForm.forEach((input) => {
        if(input.value === '') {
            input.style.border = '2px solid red';
        } else {
            input.style.border = 'none';
        }
    })
    
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
    
    //  usersData
    const signUpsData = {
        signUp_name: nameSignUp.value,
        signUp_email: emailSignUp.value,
        signUp_password: passwordSignUp.value,
        registrationDate: registrationDate
    }
    
    receiveData('signUp', signUpsData, 'POST')
    .then((newUsersData) => {

        if(typeof newUsersData == 'object') {
            //  Append form for send messages
            root.appendChild(createMainView());

            const formsContainer = document.querySelector('.forms-container');
            formsContainer.style.display = 'none';
            
            let userName = newUsersData.signUp_name;
            document.querySelector('.messages-input-field__name').innerHTML = userName;

            return newUsersData;

        } else {
            nameSignUp.style.border = '2px solid red';
            userAlreadyExist.innerHTML = 'This name is already in use';
            console.log('Its false');
            console.log(typeof newUsersData);
            return newUsersData;
        }

    })
    .then((newUsersData) => {
        if(typeof newUsersData == 'string') {
            return 
        }

        // Show all messages on main view
        receiveData('/showMessages', newUsersData, 'POST')
        .then((data) => {

            allMessagesOnMainView(data);
        })

        //////  Socket connection  //////
        socketConnect(newUsersData);
    }) 
    .catch((err) => {
        console.log(`ERROR: ${err}`);
    })
})




//////////////////  Sign In  //////////////////

const btn_signIn = document.querySelector('.form-signin__btn');

btn_signIn.addEventListener('click', ()=> {
    
    //  Validation inputs in sign-up form
    const inputsSignInForm = document.querySelectorAll('.form-signin input[type=text]');

    const nameSignIn = document.getElementById('signIn-name');
    const passwordSignIn = document.getElementById('signIn-password');

    //  If user not found in folder "users"
    const userNotFound = document.querySelector('.container__userNotFound');
    userNotFound.innerHTML = '';

    inputsSignInForm.forEach((input) => {
        if(input.value === '') {
            input.style.border = '2px solid red';
        } else {
            input.style.border = 'none';
        }
    })

    if(!validation(nameSignIn, /^[a-z]{2,15}/gi)){
        nameSignIn.style.border = '2px solid red';
        return false;
    } else {
        nameSignIn.style.border = 'none';
    }

    if(!validation(passwordSignIn,/^([a-z0-9_-]+)$/gi)){
        passwordSignIn.style.border = '2px solid red';
        return false;
    } else {
        passwordSignIn.style.border = 'none';
    }

    const signInsData = {
        signIn_name: nameSignIn.value,
        signIn_password: passwordSignIn.value
    }

    receiveData('signIn', signInsData, 'POST')
    .then((newUsersData) => {
        if(typeof newUsersData === 'object') {
            //  Append form for send messages
            root.appendChild(createMainView());

            const formsContainer = document.querySelector('.forms-container');

            formsContainer.style.display = 'none';
            let userName = newUsersData.signUp_name;
            document.querySelector('.messages-input-field__name').innerHTML = userName;

            return newUsersData;
        } 
        return false;
    })
    .then((newUsersData) => {

        // Show all messages on main view
        receiveData('/showMessages', newUsersData, 'POST')
        .then((data) => {
            allMessagesOnMainView(data);
        })
        //////  Socket connection  //////
        socketConnect(newUsersData);
    })
    .catch(err => {
        console.log(err);
        nameSignIn.style.border = '2px solid red';
        passwordSignIn.style.border = '2px solid red';
        userNotFound.innerHTML = 'Incorrect username or password. Try again';
    })
})