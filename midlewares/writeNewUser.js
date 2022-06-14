const path = require('path');
const fs = require('fs');

function writeNewUser(request, response, next) {

    const filePath = path.join(require.main.path, 'users', request.body.signUp_name + '.json');
    console.log(require.main.path);
    console.log(request.body);
    const newUser = JSON.stringify(request.body);

    //  Write file with new user
    return new Promise((resolve, reject) => {

        fs.access(`users/${request.body.signUp_name}.json`, fs.F_OK, (err)=> {

            if(!err) reject(response.end(JSON.stringify('user already exists')));

            resolve();
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, newUser, err => {
                if(err) reject(err);
                console.log(`Файл ${request.body.signUp_name} создан`);
                resolve(newUser);
            })
        })
    })
    .then((newUser) => {
        console.log(`NEW USER: ${newUser}`);
        response.end(newUser);
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = writeNewUser;