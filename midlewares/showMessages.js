const fs = require('fs');
const path = require('path');

function showAllMessages(request, response, next) {
    new Promise((resolve, reject) => {
        const filePath = path.join(require.main.path, 'messages.json');
        console.log(filePath);
        fs.readFile(filePath, (err, allMessages) => {
            err ? reject(err) : resolve(allMessages);
        })
        
    })
    .then((allMessages) => {
        response.end(allMessages);
    })
}

module.exports = showAllMessages;