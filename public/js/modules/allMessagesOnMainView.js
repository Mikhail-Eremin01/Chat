function allMessagesOnMainView(data) {

    const messages = document.querySelector('.messages');
    for(let i = 0; i < data.length; i++) {

        const item = document.createElement('li');

        item.innerHTML = `<span class="messages__current-time-message">${data[i].messageDate}</span>
                    <span>${data[i].name}: </span><span>${data[i].message}</span>`;
        item.style.boxShadow = `3px 3px 3px ${randomColor()}`;
        messages.appendChild(item);
    }
    return messages;
}