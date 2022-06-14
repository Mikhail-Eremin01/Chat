const fs = require('fs');
const path = require('path');

function signInUser(request, response, next) {
    
    new Promise((resolve, reject)=> {
        fs.access(`users/${request.body.signIn_name}.json`, fs.F_OK, (err)=> {

            if(err) response.end(JSON.stringify('Incorrect username or password'));
            resolve(request.body.signIn_name);
        })
    })
    .then((usersName) => {
        return new Promise((resolve, reject)=> {
            const fileName = path.join('users/', usersName + '.json');

            fs.readFile(fileName, (err, data) => {
                if(err) reject(err);
                
                resolve(data);
            })
        })
    })
    .then((data)=> {

        const usersData = JSON.parse(data);
        // console.log(usersData);
        if(request.body.signIn_password == usersData.signUp_password) {
            return response.end(data);
        }
        response.end(JSON.stringify('Incorrect username or password'));
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = signInUser;