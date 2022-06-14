const receiveData = function(url, str, method) {

    const newUsersData = JSON.stringify(str);
    console.log(`DATA: ${newUsersData}`);
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open(method, url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.responseType = 'json';

        xhttp.onload = () => {
            if(xhttp.status >= 400) {
                reject(err)
            } else{
                console.log(xhttp.response);
                resolve(xhttp.response);
            }
        }
        xhttp.send(newUsersData);
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`);
    })
}