//user setup and log in methods
const fetch = require('node-fetch');

// The following disables certificate validity checks for ALL of this node.js process.
// This is fine for this demo and maybe for a test, but if you are running in
// production against the production Photo Hub API, don't do this.
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var tokenResponse;

var commands = {
    login: function (username, password) {
        return this
            .click('.form-group label[for= username]')
            .setValue('.form-group input[name= username]', username)
            .setValue('.form-group input[name= password]', password)
            .click('.form-group .btn')
    },
    create_user: async function (username, password) {
        var response = await fetch('https://localhost:5001/api/rest/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
                'emailAddress': "test@shutterpilot.com"
            })
        });

        return this
    },
    create_client_id_secret: async function (username, password) {
        var response = await fetch('https://localhost:5001/api/rest/v1/client', {
            method: 'POST',
            headers: {
                // For Basic Auth, base-64 encode the username + ":" + password
                'Authorization': 'Basic ' + (new Buffer(`${username}:${password}`)).toString('base64'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type": "native", // See comment below re ClientType
                "privileged": true // This allows the client to make the 'password' grant type
            })
        });
        tokenResponse = await response.json();
    },
    cleanup_user: async function (username, password) {
        var usernameToDelete = username;
        response = await fetch(`https://localhost:5001/api/rest/v1/user/${usernameToDelete}`, {
            method: 'DELETE', // <-- THIS IS THE KEY RIGHT HERE!!!
            headers: {
                'Authorization': `Bearer ${tokenResponse.authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return this
    }
}

module.exports = {
    commands: [commands],
};