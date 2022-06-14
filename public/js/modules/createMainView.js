const createMainView = function() {
    const header = document.createElement('header');

    const list = document.createElement('ul');
    list.className = 'messages';
    header.appendChild(list);

    header.appendChild(formForEnteringMessages());

    return header;
}

//  Create form for input messages
const formForEnteringMessages = function() {

    const formForEnteringMessages = document.createElement('form');
    formForEnteringMessages.className = 'messages-input-field';

    //  Block with user's name
    const usersName = document.createElement('div');
    usersName.className = 'messages-input-field__name';
    formForEnteringMessages.appendChild(usersName);

    //  Input for entering messages
    const inputMessage = document.createElement('input');
    inputMessage.className = 'messages-input-field__input';
    inputMessage.type = 'text';
    formForEnteringMessages.appendChild(inputMessage);

    //  Button to send a message
    const btn = document.createElement('button');
    btn.className = 'messages-input-field__btn';
    btn.innerHTML = 'Send';
    formForEnteringMessages.appendChild(btn);

    return formForEnteringMessages;
}