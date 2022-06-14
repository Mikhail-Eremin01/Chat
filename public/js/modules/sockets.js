const socketConnect = function(newUsersData) {
    
    const socket = io();

    document.querySelector('.messages-input-field').addEventListener('submit', (e) => {
        console.log(e);
        e.preventDefault();
        const input = document.querySelector('.messages-input-field__input');

        if(input.value) {

            socket.emit('chat message', {
                message: input.value,
                name: newUsersData.signUp_name
            });
            input.value = '';
        }
    })

    socket.on('chat message', (data) => {

        const messageDate = new Date();
        const currentTime = `${messageDate.getHours()}:${messageDate.getMinutes()}`;

        data.messageDate = currentTime;
        console.log(data);

        const messages = document.querySelector('.messages');
        const item = document.createElement('li');

        item.innerHTML = `<span class="messages__current-time-message">${currentTime}</span>
                            <span>${data.name}: </span><span>${data.message}</span>`;
        messages.appendChild(item);
        //  When user type new message, all messages scroll down
        window.scrollTo(0, document.body.scrollHeight);
    
        //  Save new message to file "messages.json"
        receiveData('saveMessage', data, 'POST')
        .then((date) =>{
            console.log(`Message saved: ${date.message}`);
        })
    })
}