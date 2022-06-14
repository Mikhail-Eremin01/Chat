const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

function saveMessage(request, response, next) {

    const filePath = path.join(require.main.path, 'messages.json');
    
    new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
    .then((allMessages) => {
        
        const messages = JSON.parse(allMessages);
        messages.push(request.body);
        console.log(messages);
        let messagesToSave = JSON.stringify(messages);
        
        fs.writeFile(filePath, messagesToSave, (err) => {
            err ? reject(err) : resolve(messagesToSave);
        })
    })
}


module.exports = saveMessage;